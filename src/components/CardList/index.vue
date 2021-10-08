<template>
  <ul class="container-list">
    <li class="container-item">
      <Card title="Entradas" logo="income.svg" :amount="summary.income" />
    </li>
    <li class="container-item">
      <Card title="Saídas" logo="outcome.svg" :amount="summary.outcome" />
    </li>
    <li class="container-item">
      <Card
        title="Total"
        logo="total.svg"
        :amount="summary.balance"
        highlighted
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { keyStore } from "@/store";
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import Card from "../Card/index.vue";

export default defineComponent({
  name: "CardList",
  components: {
    Card,
  },
  setup() {
    const { getters, commit } = useStore(keyStore);

    const summary = computed(() => getters.summary);

    return { summary };
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
