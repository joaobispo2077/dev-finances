<template>
  <div class="table-container">
    <button class="btn-new-transaction" type="button">+ Nova transação</button>

    <table class="transaction-table">
      <thead>
        <tr>
          <th class="table-head">Título</th>
          <th class="table-head">Preço</th>
          <th class="table-head">Data</th>
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
        createdAt: String(new Date()),
        type: Math.floor(Math.random() * 2) === 0 ? "income" : "outcome",
      })
    );

    return { transactions };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.table-container {
  margin-top: 4rem;

  overflow: scroll;
  overflow-y: hidden;

  .btn-new-transaction {
    font-size: 1rem;

    color: var(--green-light);
    background: transparent;
    border: 0;
  }

  .transaction-table {
    width: 100%;
    border-spacing: 0 0.5rem;

    .table-head {
      color: var(--text-body);

      padding: 1rem 2rem;

      text-align: left;
      font-weight: 400;
      line-height: 1.5rem;
    }
  }
}
</style>
