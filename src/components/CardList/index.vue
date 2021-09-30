<template>
  <ul class="container-list">
    <li class="container-item">
      <Card title="Entradas" logo="income.svg" :amount="17000" />
    </li>
    <li class="container-item">
      <Card title="Saídas" logo="outcome.svg" :amount="600" />
    </li>
    <li class="container-item">
      <Card title="Total" logo="total.svg" :amount="17000 - 600" highlighted />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "../Card/index.vue";

export default defineComponent({
  name: "CardList",
  components: {
    Card,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container-list {
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;

  gap: 2rem;
  margin-top: -8rem;

  .container-item {
    width: 100%;
    list-style: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    .container-item {
      width: 33%;
    }
  }
}
</style>
