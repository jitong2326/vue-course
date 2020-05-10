<template>
  <div>
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'jitong'
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to.name, from.name)
  }
}
</script>
