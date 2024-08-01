import { defineComponent } from "vue";

export const CalcRes = (() =>
  defineComponent({
    name: "CalcRes",
    props: {
      labTxt: {
        type: String,
        required: true,
      },
      outpId: {
        type: String,
        required: true,
      },
      labCls: {
        type: String,
        default: "labResult",
      },
      outpT: {
        type: String,
        default: "number",
      },
      outpCls: {
        type: String,
        default: "form-control result-output",
      },
    },
    mounted() {
      console.log("Output mounted");
    },
  }))();
export default CalcRes;
