import Vue from 'vue';
import Vuex from 'vuex';

// 引入各个modules
import note from './modules/note/index.js';

Vue.use(Vuex);

// 引入全局范围的actions和mutations
import actions from './actions.js';
import mutations from './mutations.js';


// 全局state
const state = {
  // 用于指示当前的顶级菜单
  activeNavMenu: ''
};

// 全局getters
const getters = {
  activeNavMenu: state => state.activeNavMenu
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
    note
  }
});