import Vue from 'vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faStickyNote, faUser, faCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons';
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome';
library.add(faBars, faStickyNote, faUser , faCircle, faUserCircle);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);

import App from './App.vue';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

router.beforeEach((to, from, next) => {
  console.log(`Router to`, to);
  console.log(`Router from`, from);
  next();
});

router.beforeResolve((to, from, next) => {
  console.log(`beforeResolve: Router to`, to);
  console.log(`beforeResolve: Router from`, from);
  next();
});
