<template>
  <tr>
    <td>{{ transaction.title }}</td>
    <td :class="transaction.type">{{ amountPrefix }} {{ amountFormatted }}</td>
    <td>{{ transaction.category }}</td>
    <td>{{ transaction.createdAt }}</td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, computed, PropType, reactive } from "vue";

type Transaction = {
  id: string;
  title: string;
  amount: number;
  category: string;
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

    const amountFormatted = computed(() => amount);
    const createdAtFormatted = computed(() => createdAt);
    const amountPrefix = computed(() => (type === "income" ? "+" : "-"));

    return {
      amountPrefix,
      amountFormatted,
      createdAtFormatted,
    };
  },
});
</script>

<style scoped lang="scss">
.income {
}
.outcome {
}
</style>
