<template>
  <div class="course-list">
    <h1>Courses</h1>
    <div v-for="course in courses" :key="course.id">
      <p>
        {{ course.name }}
      </p>
    </div>
    <div>
      <input type="text" v-model="courseName" placeholder="Course name">
      <button @click="addCourse(courseName)">Add</button>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      ROOT_URL: 'http://localhost:3000/courses',
      courses: [],
      courseName: ''
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
    },
    addCourse(name) {
      axios
        .post(this.ROOT_URL, { name })
        .then(response => {
          this.courses.push(response.data);
          this.courseName = '';
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
