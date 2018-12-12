import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import note from './modules/note/index.js';

export default new Vuex.Store({
  // state,
  // actions,
  // mutations,
  // getters
  modules: {
    note
  }
});