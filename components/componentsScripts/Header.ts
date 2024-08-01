import { defineComponent, ref } from "vue";
//@ts-ignore
import StackedAccordion from "../icons/StackedAccordion.vue";
//@ts-ignore
import AccordionList from "../accordion/AccordionList.vue";
import {
  evTargNotFound,
  htmlElementNotFound,
} from "../../lib/handlers/handlersErrors";

export const Header = (() =>
  defineComponent({
    name: "Header",
    components: {
      StackedAccordion,
      AccordionList,
    },
    setup() {
      let shouldShowLogin = ref(false);
      return {
        shouldShowAccordion: ref(false),
        shouldShowLogin,
        toggleLogin: (ev: MouseEvent) => {
          try {
            shouldShowLogin.value = !shouldShowLogin.value;
            console.log(shouldShowLogin.value);
            if (!(ev.currentTarget instanceof HTMLElement))
              throw evTargNotFound(ev.currentTarget, ev, ["HTMLElement"]);
            if (!ev.currentTarget.dataset.src)
              throw new Error(
                `No definition for dataset source in the event target attrs`,
              );
            const targ =
              document.querySelector(
                `[data-target=${ev.currentTarget.dataset.src}]`,
              ) ?? ev.currentTarget.parentElement?.querySelector("dialog");
            if (!(targ instanceof HTMLDialogElement))
              throw htmlElementNotFound(targ, `Validation of Target instance`, [
                "HTMLDialogElement",
              ]);
            shouldShowLogin.value ? targ.showModal() : targ.close();
          } catch (e) {
            console.error(
              `Error executing toggleLogin:\n${(e as Error).message}`,
            );
          }
        },
      };
    },
    mounted() {
      console.log("Header component mounted");
    },
  }))();
export default Header;
