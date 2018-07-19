<template>
  <div class="course-list">
    <h1>Courses</h1>
    <div v-for="course in courses" :key="course.id">
      <p>
        {{ course.name }}
      </p>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      ROOT_URL: 'http://localhost:3000/courses',
      courses: []
    }
  },
  created() {
    this.getCourseList();
  },
  methods: {
    getCourseList() {
      axios
        .get(this.ROOT_URL)
        .then(response => {
          this.courses = response.data;
        })
        .catch(error => console.log(error))
    }
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
