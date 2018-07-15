<template>
  <div id="app">
    <img src="./assets/logo.png">

    <transition name="fadeIn"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut">

      <h1 v-if="toggle">I fade in and out!</h1>
    </transition>

    <button @click="toggle = !toggle">Toggle Heading</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      toggle: false
    }
  },
  methods: {
  },
  filters: {
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
