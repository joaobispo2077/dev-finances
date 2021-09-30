<template>
  <ul class="container-list">
    <li class="container-item">
      <Card title="Entradas" logo="income.svg" :amount="17000" />
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
  .container-item {
    list-style: none;
  }
}
</style>
