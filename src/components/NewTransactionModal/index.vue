<template>
  <transition name="modal">
    <Modal v-if="showModal" @close="closeModal">
      <template v-slot:header>
        <button @click="closeModal" class="btn-modal-close">×</button>
      </template>
      <template v-slot:body>
        <form
          class="form-new-transaction"
          @submit.prevent="createNewTransaction"
        >
          <h2>Nova transação</h2>

          <input
            class="input-new-transaction"
            type="text"
            placeholder="Título"
            v-model="title"
            autofocus
          />

          <div>
            <input
              class="input-new-transaction"
              type="number"
              placeholder="0,00"
              v-model="amount"
            />
            <span class="amount-info"
              >Use o sinal - (negativo) para despesas e (vírgula para casas
              decimais)</span
            >
          </div>

          <input class="input-new-transaction" type="date" v-model="date" />

          <div class="buttons-container">
            <button class="btn-new-transaction cancel" @click="closeModal">
              Cancelar
            </button>
            <button
              type="submit"
              class="btn-new-transaction save"
              :disabled="!hasValidTransaction"
            >
              Adicionar
            </button>
          </div>
        </form>
      </template>
      <template v-slot:footer>
        <div></div>
      </template>
    </Modal>
  </transition>
</template>

<script lang="ts">
import { keyStore } from "@/store";
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
import { v4 as uuid } from "uuid";

import Modal from "../Modal/index.vue";

export default defineComponent({
  name: "NewTransactionModal",
  components: {
    Modal,
  },
  setup() {
    const { state, commit, dispatch } = useStore(keyStore);

    const showModal = computed(() => state.isTransactionModalOpen);
    const closeModal = () => commit("hideTransactionModal");

    const title = ref("");
    const amount = ref(0);
    const date = ref("");

    const hasValidTransaction = computed(
      () => !!title.value && !!amount.value && !!date.value
    );

    async function cleanForm() {
      title.value = "";
      amount.value = 0;
      date.value = "";
    }

    async function createNewTransaction() {
      if (!hasValidTransaction.value) {
        return;
      }

      const type = amount.value < 0 ? "outcome" : "income";

      const newTransaction = {
        id: uuid(),
        title: title.value,
        amount: Number(amount.value),
        createdAt: new Date(date.value).toISOString(),
        type,
      };

      await dispatch("createTransaction", newTransaction);
      cleanForm();
      closeModal();
    }

    return {
      showModal,
      closeModal,
      date,
      title,
      amount,
      createNewTransaction,
      hasValidTransaction,
    };
  },
});
</script>

<style scoped lang="scss">
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
.form-new-transaction {
  display: flex;
  flex-direction: column;

  gap: 1rem;
}

.input-new-transaction {
  width: 100%;

  padding: 0.5rem;

  border-radius: 0.25rem;
  border: 1px solid var(--input-border);
  background: var(--shape);
}
.amount-info {
  font-size: 0.75rem;
  color: var(--text-body);
}

.buttons-container {
  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;

  gap: 1rem;
}
.btn-new-transaction {
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 0.15rem solid;
  &.cancel {
    border-color: var(--red);
    color: var(--red);
  }

  &.save {
    border-color: var(--green-light);
    background: var(--green-light);
    color: var(--shape);
  }

  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(80%);
  }
}
</style>
