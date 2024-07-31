import { defineComponent } from "vue";
//@ts-ignore
import StackedAccordion from "../icons/StackedAccordion.vue";

export const Header = (() =>
  defineComponent({
    name: "Header",
    components: {
      StackedAccordion,
    },
    mounted() {
      console.log("Header component mounted");
    },
  }))();
export default Header;
