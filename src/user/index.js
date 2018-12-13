import Vue from 'vue';
import Router from 'vue-router';

import routes from './route/index.js';
import store from './vuex/store.js'
import App from './app.vue';

Vue.use(Router);

const router = new Router({
  routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
