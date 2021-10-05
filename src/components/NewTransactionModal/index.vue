<template>
  <transition name="modal">
    <Modal v-if="showModal" @close="closeModal">
      <template v-slot:header>
        <button @click="closeModal" class="btn-modal-close">×</button>
      </template>
      <template v-slot:body>
        <form @submit.prevent="addTransaction">
          <h2>Nova transação</h2>

          <input
            class="input-new-transaction"
            type="text"
            placeholder="Título"
            v-model="title"
          />

          <input
            class="input-new-transaction"
            type="number"
            placeholder="Título"
            v-model="amount"
          />

          <input
            class="input-new-transaction"
            type="date"
            placeholder="Título"
            v-model="title"
          />

          <div class="buttons-container">
            <button class="btn-new-transaction" @click="closeModal">
              Cancelar
            </button>
            <button type="submit" class="btn-new-transaction">Adicionar</button>
          </div>
        </form>
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
    const title = ref("");
    const amount = ref(0);

    function closeModal() {
      showModal.value = false;
    }

    function openModal() {
      showModal.value = true;
    }

    function addTransaction() {
      console.log("add transaction");
    }

    return {
      showModal,
      closeModal,
      openModal,
      addTransaction,
      title,
      amount,
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

.input-new-transaction {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
}
</style>
