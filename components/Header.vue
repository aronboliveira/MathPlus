<script lang="ts">
  import Header from "./componentsScripts/Header.ts";
  export default Header;
</script>

<template>
  <header id="mainHeader">
    <StackedAccordion />
    <button class="biBtn">
      <span>Login</span>
    </button>
    <button class="biBtn">
      <span>Sobre &amp; Autores</span>
    </button>
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
    .biBtn {
      color: rgba(223, 221, 221, 0.745);
      padding-right: 1rem;
      font-weight: 700;
    }
  }
</style>
