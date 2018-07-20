import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';

Vue.use(VueRouter);

const appOne = { template: `<h1>Eins</h1>`};
const appTwo = { template: `<h1>Zwei</h1>`};
const appThree = { template: `<h1>Hello, {{ $route.params.name }}</h1>`};

const routes = [
  { path: '/one', component: appOne },
  { path: '/two', component: appTwo },
  { path: '/three/:name', component: appThree },
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
