<template>
  <Header />
  <Dashboard />
  <div id="app">
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <!-- use the modal component, pass in the prop -->
    <transition name="modal">
      <Modal v-if="showModal" @close="showModal = false">
        <template v-slot:header>
          <h3>custom header</h3>
        </template>
      </Modal>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Dashboard from "./components/Dashboard/index.vue";
import Header from "./components/Header/index.vue";
import Modal from "./components/Modal/index.vue";

export default defineComponent({
  name: "App",
  components: {
    Dashboard,
    Header,
    Modal,
  },
  setup() {
    const showModal = ref(false);

    return {
      showModal,
    };
  },
});
</script>

<style lang="scss">
:root {
  --green: #2d4a22;
  --red: #e52e4d;
  --green-light: #49aa26;
  --text-title: #363f5f;
  --text-body: #969cb3;
  --input-background: #e7e9ee;
  --input-border: #d7d7d7;
  --background: #f0f2f5;
  --shape: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%; // 15px
  }

  @media (max-width: 720px) {
    font-size: 87.5%; // 14px
  }
}

body,
#app {
  height: 100%;
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

body,
input,
textarea,
button {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
}

h1,
h2,
h3,
h4,
h5,
h6,
strong {
  font-weight: 600;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
