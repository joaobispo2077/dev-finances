<template>
  <transition name="modal">
    <Modal v-if="showModal" @close="closeModal">
      <template v-slot:header>
        <button @click="closeModal" class="btn-modal-close">×</button>
      </template>
      <template v-slot:body>
        <h3>custom header</h3>
      </template>
      <template v-slot:footer>
        <h3>custom header</h3>
      </template>
    </Modal>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Modal from "../Modal/index.vue";

export default defineComponent({
  name: "NewTransactionModal",
  components: {
    Modal,
  },
  setup() {
    const showModal = ref(true);

    function closeModal() {
      showModal.value = false;
    }

    function openModal() {
      showModal.value = true;
    }

    return {
      showModal,
      closeModal,
      openModal,
    };
  },
});
</script>

<style lang="scss">
.btn-modal-close {
  position: absolute;

  top: 1rem;
  right: 1.5rem;

  border: none;
  background: transparent;

  transition: filter 0.2s ease-in-out;

  font-size: 1.5rem;

  &:hover {
    filter: brightness(80%);
  }
}
</style>
