<template>
  <header>
    <div class="header-wrapper">
      <h1>dev.finances$</h1>

      <button>Nova transação</button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  background-color: var(--green);
  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1140px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;

    button {
      border: 0;
      background: var(--green-light);
      color: var(--shape);

      font-size: 1rem;

      padding: 0 2rem;
      height: 3rem;

      border-radius: 0.25rem;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(90%);
      }
    }
  }
}
</style>
