<script lang="ts">
  import StackedAccordion from "../componentsScripts/icons/StackedAccordion.ts";
  export default StackedAccordion;
</script>

<template>
  <button
    class="accordion-btn-toggle"
    @click="toggleAccordion($event)"
    :data-src="'accordion-' + baseId"
  >
    <!-- value returned as a method, managing the model value (as .value) with $emit -->
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        />
      </svg>
    </span>
  </button>
</template>

<style scoped>
  .accordion-btn-toggle {
  }
</style>
