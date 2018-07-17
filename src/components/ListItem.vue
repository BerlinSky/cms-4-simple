<script>
export default {
  props: ['name'],
  functional: true,
  render(h, context) {
    return h('li', context.props.name)
  }
}
</script>

<style>

</style>
