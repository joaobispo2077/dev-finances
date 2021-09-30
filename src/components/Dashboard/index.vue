<template>
  <main class="container">
    <CardList />
    <TransactionTable />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardList from "../CardList/index.vue";
import TransactionTable from "../TransactionTable/index.vue";

export default defineComponent({
  name: "Dashboard",
  components: {
    CardList,
    TransactionTable,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
}
</style>
