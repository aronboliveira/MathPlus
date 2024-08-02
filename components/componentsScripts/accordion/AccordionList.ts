import Vue, { defineComponent } from "vue";
import {
  initFillAttrs,
  textTransformPascal,
} from "../../../lib/handlers/handlersModel";
import { HTMLNav, voidishHtmlEl } from "../../../lib/declarations/types";
import * as Formulas from "../../../lib/formulaTitles";
import {
  htmlElementNotFound,
  stringError,
  typeError,
} from "../../../lib/handlers/handlersErrors";
//@ts-ignore
import CalcRes from "../../CalcRes.vue";
import { addOprtTarg } from "../../../lib/handlers/handlersEvents";
import { handleRouteToOprtGrp } from "../../../lib/handlers/handlersRouting";
export const AccordionList = (() =>
  defineComponent({
    name: "AccordionList",
    props: {
      baseId: {
        type: String,
        required: true,
      },
      n_i: {
        type: Array as () => string[],
        required: true,
        default: 1,
      },
      shouldShowAccordion: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    methods: {
      routeToOprtGrp(btn: voidishHtmlEl): void {
        handleRouteToOprtGrp(this, btn);
      },
    },
    mounted() {
      console.log("Accordion List mounted");
      const navElement = this.$refs.nav as HTMLNav;
      initFillAttrs(navElement ?? document);
      try {
        if (/oprt-grp=/g.test(location.search)) {
          const routingButton = document.querySelector(
            `[data-route=${location.search.replace(/[\?&]oprt-grp=/, "")}`,
          );
          if (!(routingButton instanceof HTMLElement)) {
            history.pushState({}, "", `${location.origin}${location.pathname}`);
            throw htmlElementNotFound(
              routingButton,
              `Validation of Routing Button based on url`,
            );
          }
          handleRouteToOprtGrp(this, routingButton);
        }
      } catch (e) {
        console.error(
          `Error executing procedure for routing to operations section on initial mounting:\n${
            (e as Error).message
          }`,
        );
      }
    },
  }))();
export default AccordionList;
