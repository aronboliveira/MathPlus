<script lang="ts">
  import AccordionList from "../componentsScripts/accordion/AccordionList.ts";
  export default AccordionList;
</script>
<template>
  <nav
    class="accordion-nav accordion-container"
    :id="'accordion-nav-' + baseId"
    :data-target="'accordion-' + baseId"
  >
    <ul class="accordion-list" :id="'accordion-list-' + baseId">
      <li
        class="accordion-item"
        v-for="i in n_i"
        :key="'accordion-i__' + i"
        :id="'accordion-item-' + baseId + i"
      >
        <button
          class="accordion-button"
          :key="'accordion-btn__' + i"
          :id="'accordion-button-' + baseId + i"
        >
          Categoria {{ i }}
        </button>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
  .accordion-nav {
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 1;
    width: -moz-fit-content;
    width: 10rem;
    max-width: 75vw;
    height: -moz-fit-content;
    height: fit-content;
    padding: 3vw 0.5vw 0.2vw 3vw;
    gap: 1vh;
    position: absolute;
    top: 4rem;
    right: 0;
    bottom: -0.625rem;
    box-sizing: border-box;
    background-color: #242527;
    transition: transform 0.4s ease;
    z-index: 99;
    overflow-y: auto;
    overflow-x: auto;
    transform: translateX(100%);
  }
  .accordion-nav.shown {
    transform: translateX(0%);
  }
  .accordion-nav .accordion-list {
    padding-right: 10%;
  }
  .accordion-nav .accordion-button {
    color: white;
  }
</style>
