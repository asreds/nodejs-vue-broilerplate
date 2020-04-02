let state = {
  count: 0
};

let getters = {};

const actions = {
  increment({ commit, state }) {
    commit("increment");
  },
  decreiment({ commit, state }) {
    commit("decreiment");
  }
};

const mutations = {
  increment(state) {
    state.count = state.count + 1;
  },
  decreiment(state) {
    if (state.count > 0) {
        state.count = state.count - 1;
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
