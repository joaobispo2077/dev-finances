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
    transactions: JSON.parse(
      localStorage.getItem("devfinances@transactions") || "[]"
    ),
  },
  getters: {
    summary: (state) => {
      const { transactions } = state;

      const income = transactions.reduce((acc, transaction) => {
        if (transaction.type === "income") {
          return acc + transaction.amount;
        }
        return acc;
      }, 0);

      const outcome = transactions.reduce((acc, transaction) => {
        if (transaction.type === "outcome") {
          return acc + transaction.amount;
        }
        return acc;
      }, 0);

      return {
        income,
        outcome,
        balance: income + outcome,
      };
    },
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

      localStorage.setItem(
        "devfinances@transactions",
        JSON.stringify(state.transactions)
      );
    },
    async removeTransaction({ state }, id: string) {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== id
      );

      localStorage.setItem(
        "devfinances@transactions",
        JSON.stringify(state.transactions)
      );
    },
  },
  modules: {},
});
