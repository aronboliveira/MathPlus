<style scoped>
  .divInp {
    /* Add any scoped styles here */
  }
</style>

<script lang="ts">
  import CalcInp from "../components/componentsScripts/CalcInp.ts";
  export default CalcInp;
</script>

<template>
  <div class="divInp">
    <label :class="labCls" :for="inpId">{{ labTxt }}</label>
    <input
      :type="inpT"
      :class="'inp-entry ' + inpCls"
      :placeholder="inpPh"
      :id="inpId"
    />
  </div>
</template>
