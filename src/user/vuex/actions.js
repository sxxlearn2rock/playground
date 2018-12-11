export default {
  addNote({ commit }) {
    commit('ADD_NOTE');
  },

  editNote({ commit }) {
    commit('EDIT_NOTE');
  },

  toggleFavorite({ commit}) {
    commit('TOGGLE_FAVORITE');
  },

  setActiveNode({ commit }, note) {
    commit('SET_ACTIVE_NOTE', note);
  }
}