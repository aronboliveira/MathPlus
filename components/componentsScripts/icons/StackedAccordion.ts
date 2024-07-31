import { defineComponent } from "vue";
export const StackedAccordion = (() =>
  defineComponent({
    name: "StackedAccordion",
    mounted() {
      console.log("Accordion component mounted");
    },
  }))();
export default StackedAccordion;
