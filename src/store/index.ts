import { createStore, Store } from "vuex";

import { InjectionKey } from "vue";

export interface State {
  isTransactionModalOpen: boolean;
}

export const keyStore: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    isTransactionModalOpen: false,
  },
  mutations: {
    showTransactionModal(state) {
      state.isTransactionModalOpen = true;
    },
    hideTransactionModal(state) {
      state.isTransactionModalOpen = false;
    },
  },
  actions: {},
  modules: {},
});
