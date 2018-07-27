import Vue from 'vue';
import Router from 'vue-router';

import Login from '../components/login/Login';
import Landing from '../components/landing/Landing';
import Grid from '../components/grid/GridLayout.vue';

Vue.use(Router)

const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/landing', component: Landing },
  { path: '/grid', component: Grid },
  // { path: '/four/:name', component: appFour, props: true },
]

export default new Router({
  routes
})
