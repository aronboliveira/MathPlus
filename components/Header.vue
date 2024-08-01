<script lang="ts">
  import Header from "./componentsScripts/Header.ts";
  export default Header;
</script>

<template>
  <header id="mainHeader" data-parent="parent-accordion-oprt-types">
    <button class="biBtn" data-src="login-modal" @click="toggleLogin($event)">
      <span>Login</span>
    </button>
    <button class="biBtn">
      <span>MATH PLUS</span>
    </button>
    <StackedAccordion
      v-model="shouldShowAccordion"
      baseId="oprt-types"
      icon="bi"
    />
    <AccordionList
      baseId="oprt-types"
      :n_i="[
        'Algebra',
        'Statistics',
        'Probability',
        'Combinatorics',
        'Trigonometry',
        'Geometry',
      ]"
      :shouldShowAccordion="shouldShowAccordion"
    />
    <div id="dlg-header-root" data-target="login-modal">
      <dialog
        v-if="shouldShowLogin"
        id="login-modal"
        class="modal-content"
        ref="modal"
        @click="onIsClickOutside($event, modal)"
      >
        <p>Dialog montado</p>
        <button class="btn btn-close" @click="toggleLogin"></button>
      </dialog>
    </div>
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
    position: sticky;
    top: 0;
  }
  header .biBtn {
    color: rgba(223, 221, 221, 0.745);
    padding-right: 1rem;
    font-weight: 700;
  }
  header #dlg-header-root {
    position: fixed;
  }
  header button {
    margin-bottom: 0;
  }
</style>
