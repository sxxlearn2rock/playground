import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

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
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});