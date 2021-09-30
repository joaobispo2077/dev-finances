<template>
  <article class="card">
    <header class="card-header">
      <h2 class="card-title">{{ title }}</h2>
      <img :src="chargedLogo" class="card-logo" />
    </header>
    <strong class="card-amount">{{ amountFormatted }}</strong>
  </article>
</template>

<script lang="ts">
import { defineComponent, computed, toRefs } from "vue";

function formatAmount(amount: string | number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(amount));
}

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
  },
  setup(props) {
    const { amount, logo } = toRefs(props);

    const amountFormatted = computed(() => formatAmount(amount.value));
    const chargedLogo = computed(() => require(`../../assets/${logo.value}`));

    return { amountFormatted, chargedLogo };
  },
});
</script>

<style scoped lang="scss">
.card {
  .card-header {
    .card-title {
    }
    .card-logo {
    }
  }
  .card-amount {
  }
}
</style>
