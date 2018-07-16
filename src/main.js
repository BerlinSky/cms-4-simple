import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate';
// import FancyButton from './components/FancyButton'

// Vue.component('fancy-button', FancyButton)
Vue.use(Vuelidate);

new Vue({
  el: '#app',
  validations: {},
  render: h => h(App)
});
