<template>
  <header>
    <div class="header-wrapper">
      <img
        src="@/assets/logo.svg"
        v-motion
        :initial="{
          opacity: 0,
          y: 100,
        }"
        :enter="{
          opacity: 1,
          y: 0,
        }"
      />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  background-color: var(--green);
  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 1140px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
  }
}
</style>
