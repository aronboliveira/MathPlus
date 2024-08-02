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
    font-weight: 700;
    transition: transform 0.2s ease-in-out;
    transform: translate(0, 0);
  }
  #btnCalcValues:hover {
    transform: translate(0, -0.1rem);
  }
  #btnCalcValues:active {
    transform: translate(0, 0.1rem);
  }
</style>
