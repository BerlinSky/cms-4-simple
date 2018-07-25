import Vue from 'vue';
import VueRouter from 'vue-router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faStickyNote} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faBars, faStickyNote);
Vue.component('font-awesome-icon', FontAwesomeIcon);

import App from './App.vue';
import Login from './components/Login/Login';
import Landing from './components/Landing/Landing';

Vue.use(VueRouter);

const appOne = { template: `<h1>Eins</h1>`};
const appThree = { template: `<h1>Hello, {{ $route.params.name }}</h1>`};
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
  { path: '/three/:name', component: appThree },
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
