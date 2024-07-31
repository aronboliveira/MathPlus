<style scoped>
  .divResult {
    /* Add any scoped styles here */
  }
</style>

<script lang="ts">
  import CalcRes from "../components/componentsScripts/Outp.ts";
  export default CalcRes;
</script>

<template>
  <div class="divResult">
    <label :class="labCls" :for="outpId">{{ labTxt }}</label>
    <output :data-type="outpT" :class="outpCls" :id="outpId"></output>
  </div>
</template>
