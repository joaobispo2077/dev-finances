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
    transactions: [
      {
        id: "String(key)",
        title: `Lorem ipsum dolor sit amet consectetur`,
        amount: Math.floor(Math.random() * 100),
        createdAt: String(new Date()),
        type: Math.floor(Math.random() * 2) === 0 ? "income" : "outcome",
      },
    ],
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
    async createTransaction({ state }, transaction: Transaction) {
      state.transactions.push(transaction);
    },
    async removeTransaction({ state }, id: string) {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== id
      );
    },
  },
  modules: {},
});
