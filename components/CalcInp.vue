<style scoped>
  .divInp {
    /* Add any scoped styles here */
  }
</style>

<script lang="ts">
  import {defineComponent} from "vue";
  import Inp from "../components/componentsScripts/Inp.ts";
  export default defineComponent(
    new Inp("CalcInp", {
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
    }),
  );
</script>

<template>
  <div class="divInp">
    <label :class="labCls" :for="inpId">{{ labTxt }}</label>
    <input :type="inpT" :class="inpCls" :placeholder="inpPh" :id="inpId" />
  </div>
</template>
