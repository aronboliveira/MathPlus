import { defineComponent, nextTick, ref } from "vue";
//@ts-ignore
import StackedAccordion from "../icons/StackedAccordion.vue";
//@ts-ignore
import AccordionList from "../accordion/AccordionList.vue";
import {
  evTargNotFound,
  htmlElementNotFound,
} from "../../lib/handlers/handlersErrors";
import { nullishHTMLEl } from "../../lib/declarations/types";
import { isClickOutside } from "../../lib/handlers/handlersEvents";
export const Header = (() =>
  defineComponent({
    name: "Header",
    components: {
      StackedAccordion,
      AccordionList,
    },
    setup() {
      let shouldShowLogin = ref(false);
      const modal = ref<nullishHTMLEl>(null);
      return {
        shouldShowAccordion: ref(false),
        shouldShowLogin,
        modal,
        toggleLogin: (ev: MouseEvent) => {
          try {
            shouldShowLogin.value = !shouldShowLogin.value;
            nextTick(() => {
              try {
                if (!(ev.currentTarget instanceof HTMLElement))
                  throw evTargNotFound(ev.currentTarget, ev, ["HTMLElement"]);
                if (!ev.currentTarget.dataset.src)
                  throw new Error(
                    `No definition for dataset source in the event target attrs`,
                  );
                const targ =
                  document
                    .querySelector(
                      `[data-target="${ev.currentTarget.dataset.src}"]`,
                    )
                    ?.querySelector("dialog") ??
                  ev.currentTarget.parentElement?.querySelector("dialog");
                if (!(targ instanceof HTMLDialogElement))
                  throw htmlElementNotFound(
                    targ,
                    `Validation of Target instance`,
                    ["HTMLDialogElement"],
                  );
                shouldShowLogin.value ? targ.showModal() : targ.close();
                nextTick(() => {
                  if (shouldShowLogin.value)
                    location.search !== ""
                      ? history.pushState(
                          {},
                          "",
                          `${location.origin}${location.pathname}${location.search}&login-open=true`,
                        )
                      : history.pushState(
                          {},
                          "",
                          `${location.origin}${location.pathname}?login-open=true`,
                        );
                  else
                    history.pushState(
                      {},
                      "",
                      //@ts-ignore
                      `${location.origin}${location.pathname}${location.search}`.replaceAll(
                        /[\?\&]login-open=true/g,
                        "",
                      ),
                    );
                });
              } catch (e) {
                console.error(
                  `Error executing nextTick callback for toggleLogin:\n${
                    (e as Error).message
                  }`,
                );
              }
            });
          } catch (e) {
            console.error(
              `Error executing toggleLogin:\n${(e as Error).message}`,
            );
          }
        },
        onIsClickOutside: (ev: MouseEvent, ref: nullishHTMLEl) => {
          nextTick(() => {
            const targ = ref ?? modal.value ?? ev.currentTarget;
            if (
              targ instanceof HTMLDialogElement &&
              isClickOutside(ev, ev.currentTarget as Element).some(
                coord => coord === true,
              )
            ) {
              targ.close();
              shouldShowLogin.value = !shouldShowLogin.value;
              if (shouldShowLogin.value)
                location.search !== ""
                  ? history.pushState(
                      {},
                      "",
                      `${location.origin}${location.pathname}${location.search}&login-open=true`,
                    )
                  : history.pushState(
                      {},
                      "",
                      `${location.origin}${location.pathname}?login-open=true`,
                    );
              else
                history.pushState(
                  {},
                  "",
                  //@ts-ignore
                  `${location.origin}${location.pathname}${location.search}`.replaceAll(
                    /[\?&]login-open=true/g,
                    "",
                  ),
                );
            }
          });
        },
      };
    },
    mounted() {
      console.log("Header component mounted");
    },
  }))();
export default Header;
