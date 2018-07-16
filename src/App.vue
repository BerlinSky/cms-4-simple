<template>
  <div id="app">
    <form class="form" @submit.prevent="onSumit">
      <div class="input">
        <label for="email">Email</label>
        <input :class="{ error: $v.email.$error }" type="email" id="email" v-model.trim="email" @input="$v.email.$touch()">
        <!-- <div v-if="$v.email.$dirty">
          <p class="error-message" v-if="!$v.email.email">Please enter a
          valid email address.</p>
          <p class="error-message" v-if="!$v.email.required">Email must not
          be empty.</p>
        </div> -->
      </div>

      <div class="input">
        <label for="firstName">First Name</label>
        <input :class="{ error: $v.firstName.$error }" type="text" id="firstName" v-model.trim="firstName">
      </div>
      <div class="input">
        <label for="lastName">Last Name</label>
        <input :class="{ error: $v.lastName.$error}" type="text" id="lastName" v-model.trim="lastName">
      </div>
      <div class="input">
        <label for="password">Password</label>
        <input :class="{ error: $v.password.$error }" type="password" id="password" v-model.trim="password">
      </div>
      <button type="submit">Submit</button>
    </form>

    <div class="validator">
      <pre>{{ $v }}</pre>
    </div>

  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';

export default {
  name: 'app',
  data () {
    return {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    }
  },
  validations: {
    email: {
      required,
      email,
    }
  },
  methods: {
    onSumit() {

    }
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
.form {
  display: inline-block;
  text-align: center;
  width: 49%;
}

.error-message {
 color: red;
}

input:focus {
  outline: none;
}

.error {
  border: 1px solid red;
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
