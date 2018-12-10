import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import App from './app.vue';

import {store} from './store/index.js'

import Home from './pages/home/index.vue';
import Note from './pages/Note/index.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/note',
      name: 'note',
      component: Note
    }
  ]
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
