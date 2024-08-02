<style scoped>
  .divResult .result-output {
    color: #ffff;
    font-size: 0.7rem;
    overflow: auto;
    vertical-align: middle;
  }
</style>

<script lang="ts">
  import CalcRes from "../components/componentsScripts/CalcRes.ts";
  export default CalcRes;
</script>

<template>
  <div class="divResult">
    <label :class="labCls" :for="outpId">{{ labTxt }}</label>
    <output :data-type="outpT" :class="outpCls" :id="outpId"></output>
  </div>
</template>
