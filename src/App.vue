<script>
import ListItem from "./components/ListItem.vue";

export default {
  data() {
    return {
      names: ['New Day', 'New Week', 'New Month', 'New Year']
    }
  },
  render(h) {
    return h('div', [
      h('ul', { style: { color: 'tomato' }}, [
        this.names.map(name =>
          h (ListItem, {
            props: { name: name }
          }))
      ])
    ])
  }
}
</script>

<style>

</style>
