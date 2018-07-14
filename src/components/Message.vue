<template>
  <div>
    <h1>Message Board</h1>
    <slot name="date">
      <h2>{{ messageText }}</h2>
    </slot>
  </div>
</template>

<script>
export default {
  props: ['messageText']
}
</script>

<style>

</style>
