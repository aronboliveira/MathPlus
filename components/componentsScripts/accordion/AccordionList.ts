import { defineComponent } from "vue";
export const AccordionList = (() =>
  defineComponent({
    name: "AccordionList",
    props: {
      baseId: {
        type: String,
        required: true,
      },
      n_i: {
        type: Number,
        required: true,
        default: 1,
      },
      shouldShowAccordion: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    mounted() {
      console.log("Accordion List mounted");
    },
  }))();
export default AccordionList;
