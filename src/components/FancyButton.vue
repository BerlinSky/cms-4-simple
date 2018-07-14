<template>
  <div>
    <input type="text" v-model="messsage">
    <button @click.prevent="clicked">
      {{ buttonTitle }}
    </button>
</div>
</template>

<script>
export default {
  props: {
    buttonTitle: {
      type: String,
      default: "Little Fancy Button",
      required: true,
      validator: value => value.length > 3
    }
  },
  data() {
    return {
      buttonText: 'So called Fancy Button',
      messsage: ''
    }
  },
  methods: {
    clicked() {
      this.$emit('buttonClicked', this.messsage);
    }
  }
}
</script>

<style scoped>
  button {
    border: 1px solid red;
    padding: 10px;
  }
</style>
