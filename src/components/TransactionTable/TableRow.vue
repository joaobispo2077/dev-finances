<template>
  <tr class="container-row">
    <td class="table-cell">{{ transaction.title }}</td>
    <td class="table-cell" :class="transaction.type">
      {{ amountPrefix }}{{ amountFormatted }}
    </td>
    <td class="table-cell">{{ createdAtFormatted }}</td>
    <td class="table-cell">
      <button class="btn-remove"><img src="@/assets/minus.svg" /></button>
    </td>
  </tr>
</template>

<script lang="ts">
import { formatCurrency, formatDate } from "@/utils/parser";
import { defineComponent, computed, PropType, reactive } from "vue";

export type Transaction = {
  id: string;
  title: string;
  amount: number;
  createdAt: string;
  type: "income" | "outcome";
};

export default defineComponent({
  name: "TableRow",
  props: {
    transaction: { type: Object as PropType<Transaction>, required: true },
  },
  setup(props) {
    const { amount, createdAt, type } = reactive<Transaction>(
      props.transaction
    );

    const amountPrefix = computed(() => (type === "income" ? "+" : ""));
    const amountFormatted = computed(() => formatCurrency(amount));

    const createdAtFormatted = computed(() => formatDate(createdAt));

    return {
      amountPrefix,
      amountFormatted,
      createdAtFormatted,
    };
  },
});
</script>

<style scoped lang="scss">
.table-cell {
  padding: 1rem 2rem;
  border: 0;
  background: var(--shape);
  border-radius: 0.25rem;
  color: var(--text-body);

  &:first-child {
    color: var(--text-title);
  }
  &.income {
    color: var(--green-light);
  }
  &.outcome {
    color: var(--red);
  }
}

.btn-remove {
  background: transparent;
  border: 0;
}
</style>
