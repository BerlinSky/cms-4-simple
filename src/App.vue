<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Fancy Button</h2>

    <fancy-button @buttonClicked="eventListenner($event)" button-title="Not so fancy Button"></fancy-button>

    <shopping-input></shopping-input>
    <shopping-list :shoppingList="shoppingList"></shopping-list>

    <button>Static Button</button>

    <message></message>
    <message>
      <h2>This is the first message</h2>
    </message>
    <message>
      <h2>This is the second message</h2>
    </message>
  </div>
</template>

<script>
import FancyButton from './components/FancyButton';

import EventBus from './EventBus';
import ShoppingInput from './components/ShoppingInput';
import ShoppingList from './components/ShoppingList'

import Message from './components/Message';

export default {
  name: 'app',
  components: {
    FancyButton,
    ShoppingInput,
    ShoppingList,
    Message
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      shoppingList: []
    }
  },
  created() {
    EventBus.$on('addShoppingItem', (itemName) => {
      this.shoppingList.push(itemName);
    })
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
