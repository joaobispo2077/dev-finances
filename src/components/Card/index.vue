<template>
  <article :class="`card ${highlighted && 'highlight-background'}`">
    <header class="card-header">
      <h2 class="card-title">{{ title }}</h2>
      <img :src="chargedLogo" class="card-logo" />
    </header>
    <strong class="card-amount">{{ amountFormatted }}</strong>
  </article>
</template>

<script lang="ts">
import { formatCurrency } from "@/utils/parser";
import { defineComponent, computed, toRefs } from "vue";

export default defineComponent({
  name: "CardList",
  props: {
    title: {
      required: true,
      type: String,
    },
    logo: {
      required: true,
      type: String,
    },
    amount: {
      required: true,
      type: Number,
    },
    highlighted: {
      default: false,
      type: Boolean,
    },
  },
  setup(props) {
    const { amount, logo } = toRefs(props);

    const amountFormatted = computed(() => formatCurrency(amount.value));
    const chargedLogo = computed(() => require(`../../assets/${logo.value}`));

    return { amountFormatted, chargedLogo };
  },
});
</script>

<style scoped lang="scss">
.card {
  background: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: var(--text-title);
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .card-amount {
    display: block;

    margin-top: 1rem;

    font-size: 2rem;
    font-weight: 500;
  }

  &.highlight-background {
    background: var(--green-light);
    color: #fff;
  }
}
</style>
