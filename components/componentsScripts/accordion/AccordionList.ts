import { defineComponent } from "vue";
import {
  camelToKebab,
  initFillAttrs,
} from "../../../lib/handlers/handlersModel";
import { HTMLNav } from "../../../lib/declarations/types";
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
      routeToOprtGrp(name: string = "") {
        try {
          //@ts-ignore
          if (typeof name !== "string") name = name.toString();
          history.pushState(
            {},
            "",
            `${location.origin}${
              location.pathname
            }?oprt-grp=${name.toLowerCase()}`,
          );
        } catch (e) {
          console.error(
            `Error executing routeToOprtGrp:\n${(e as Error).message}`,
          );
        }
      },
    },
    mounted() {
      console.log("Accordion List mounted");
      // console.log("Tag for Component:");
      // console.log(
      //   camelToKebab(
      //     this.$vnode.tag.slice(this.$vnode.tag.lastIndexOf("-") + 1),
      //   ),
      // );
      const navElement = this.$refs.nav as HTMLNav;
      initFillAttrs(navElement ?? document);
    },
  }))();
export default AccordionList;
