import { defineComponent, ref } from "vue";
//@ts-ignore
import StackedAccordion from "../icons/StackedAccordion.vue";
//@ts-ignore
import AccordionList from "../accordion/AccordionList.vue";

export const Header = (() =>
  defineComponent({
    name: "Header",
    components: {
      StackedAccordion,
      AccordionList,
    },
    setup() {
      const shouldShowAccordion = ref(false);
      return {
        shouldShowAccordion,
      };
    },
    mounted() {
      console.log("Header component mounted");
    },
  }))();
export default Header;
