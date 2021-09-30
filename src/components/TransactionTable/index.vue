<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Preço</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        <TableRow
          v-for="transaction in transactions"
          :transaction="transaction"
          :key="transaction.id"
        />
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import TableRow, { Transaction } from "./TableRow.vue";

export default defineComponent({
  name: "TransactionTable",
  components: {
    TableRow,
  },
  props: {
    // transactions: {
    //   type: Array as PropType<Transaction[]>,
    //   required: true,
    // },
  },
  setup(props) {
    const transactions: Transaction[] = Object.keys(Array.from(Array(10))).map(
      (key: string) => ({
        id: String(key),
        title: `Lorem ipsum dolor sit amet consectetur`,
        amount: Math.floor(Math.random() * 100),
        category: `Lorem ipsum dolor`,
        createdAt: String(new Date()),
        type: Math.floor(Math.random() * 2) === 0 ? "income" : "outcome",
      })
    );

    return { transactions };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
