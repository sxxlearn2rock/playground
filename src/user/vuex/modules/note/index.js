import actions from './actions.js';
import mutations from './mutations.js';

const state =  {
  notes: [],
  activeNote: {}
};

const getters = {
  notes: state => state.notes,
  favoNotes: state => {
    const favoNotes = state.notes.filter((item) => {
      return item.favorite;
    });
    return favoNotes;
  },
  activeNote: state => state.activeNote,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};