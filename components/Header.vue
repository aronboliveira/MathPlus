<script lang="ts">
  import {defineComponent} from "vue";
  import Header from "../components/componentsScripts/Header.ts";
  import StackedAccordion from "../components/icons/StackedAccordion.vue";
  export default defineComponent(new Header("Header", {}));
</script>

<template>
  <header id="mainHeader" aria-hidden="false">
    <span class="instDiv" style="display: flex" aria-hidden="false">
      <StackedAccordion />
      <div class="tips" style="color: rgb(255, 255, 255)" aria-hidden="false">
        <span class="tip tipT" aria-hidden="false"
          ><span aria-hidden="false">Clique</span
          ><a
            class="anchorUndecor"
            id="anchorInstText"
            href="https://www.instagram.com/anadoces_rj/"
            target="_blank"
            rel="noreferrer"
            aria-hidden="false"
            ><strong
              style="font-weight: 900; color: rgb(255, 255, 255)"
              aria-hidden="false"
              >&nbsp;aqui&nbsp;</strong
            ></a
          ><span aria-hidden="false">para acessar nosso Instagram</span></span
        >
      </div></span
    ><span aria-hidden="false">
      <button
        class="biBtn"
        style="
          color: rgba(223, 221, 221, 0.745);
          padding-right: 1rem;
          font-weight: 700;
        "
        aria-hidden="false"
        aria-pressed="false"
      >
        <span aria-hidden="false">Login</span></button
      ><button
        class="biBtn"
        style="
          color: rgba(223, 221, 221, 0.745);
          padding-right: 1rem;
          font-weight: 700;
        "
        aria-hidden="false"
      >
        <span aria-hidden="false">Sobre &amp; Autores</span>
      </button></span
    >
  </header>
</template>

<style scoped>
  header {
    display: flex;
    align-items: center;
    height: -moz-fit-content;
    height: fit-content;
    width: 100%;
    justify-content: space-between;
    text-align: center;
    border-bottom: ridge rgba(40, 40, 40, 0.605) 0.15rem;
    background: linear-gradient(
      to right,
      #c77787,
      rgba(130, 51, 91, 0.5843137255)
    );
    font-size: 0.8rem;
    font-weight: 500;
    padding-block: 0.3rem;
  }
</style>
