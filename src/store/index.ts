import { createStore, Store } from "vuex";

import { InjectionKey } from "vue";

interface Transaction {
  id: string;
  title: string;
  amount: number;
  createdAt: string;
  type: "income" | "outcome";
}
export interface State {
  isTransactionModalOpen: boolean;
  transactions: Transaction[];
}

export const keyStore: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    isTransactionModalOpen: false,
    transactions: [],
  },
  mutations: {
    showTransactionModal(state) {
      state.isTransactionModalOpen = true;
    },
    hideTransactionModal(state) {
      state.isTransactionModalOpen = false;
    },
  },
  actions: {
    showTransactionModal({ state }, transaction: Transaction) {
      state.transactions.push(transaction);
    },
    removeTransaction({ state }, id: string) {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== id
      );
    },
  },
  modules: {},
});
