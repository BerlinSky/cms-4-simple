<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Fancy Button</h2>

    <fancy-button @buttonClicked="eventListenner($event)" button-title="Not so fancy Button"></fancy-button>

    <button>Static Button</button>
  </div>
</template>

<script>
import FancyButton from './components/FancyButton';

export default {
  name: 'app',
  components: {
    FancyButton
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    eventListenner(message) {
      console.log("The button was clicked from the child component with this message: " + message);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
