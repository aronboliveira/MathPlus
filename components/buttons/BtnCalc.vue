<script lang="ts">
  import BtnCalc from "../componentsScripts/buttons/BtnCalc.ts";
  export default BtnCalc;
</script>
<template>
  <button class="btn btn-info" id="btnCalcValues" @click="calculate($event)">
    Calculate
  </button>
</template>
<style scoped>
  #btnCalcValues {
    margin-bottom: 2rem;
  }
</style>
