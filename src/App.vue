<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style>
  .course-list {
    background-color: tomato;
    padding: 10px;
    width: 50%;
    text-align: center;
    margin: 0 auto;
    color: white;
  }
</style>
