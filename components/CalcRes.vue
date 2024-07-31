<style scoped>
  .divResult {
    /* Add any scoped styles here */
  }
</style>

<script lang="ts">
  import {defineComponent} from "vue";
  import Outp from "../components/componentsScripts/Outp.ts";
  export default defineComponent(
    new Outp("CalcRes", {
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
    }),
  );
</script>

<template>
  <div class="divResult">
    <label :class="labCls" :for="outpId">{{ labTxt }}</label>
    <output :data-type="outpT" :class="outpCls" :id="outpId"></output>
  </div>
</template>
