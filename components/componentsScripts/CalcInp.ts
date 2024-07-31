import { defineComponent } from "vue";
export const CalcInp = (() =>
  defineComponent({
    name: "CalcInp",
    props: {
      labTxt: {
        type: String,
        required: true,
      },
      inpId: {
        type: String,
        required: true,
      },
      labCls: {
        type: String,
        default: "labResult",
      },
      inpT: {
        type: String,
        default: "text",
      },
      inpCls: {
        type: String,
        default: "form-control",
      },
      inpPh: {
        type: String,
        default: "",
      },
    },
    mounted() {
      console.log("Input mounted");
    },
  }))();
export default CalcInp;
