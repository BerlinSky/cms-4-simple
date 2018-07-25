import Vue from 'vue';
import VueRouter from 'vue-router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faStickyNote, faUser, faCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons';
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome';

library.add(faBars, faStickyNote, faUser , faCircle, faUserCircle);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);

import App from './App.vue';
import Login from './components/Login/Login';
import Landing from './components/Landing/Landing';
import Grid from './components/Grid/GridLayout';

Vue.use(VueRouter);

const appOne = { template: `<h1>Eins</h1>`};
const appFour = {
  template: `<h1>Yo, {{ $route.params.name }}</h1>`,
  beforeRouteUpdate(to, from, next) {
    console.log(to),
    console.log(from),
    console.log(`Yo ${to.params.name}`),
    next();
  }
};

const routes = [
  { path: '/login', component: Login },
  { path: '/landing', component: Landing },
  { path: '/grid', component: Grid },
  { path: '/four/:name', component: appFour, props: true },
]

const router = new VueRouter({
  routes
})

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

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
