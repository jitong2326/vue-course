<template>
  <div class="email">
    email: jitong2326@163.com
    <button @click="handleClick">点我</button>
  </div>
</template>

<script>
export default {
  name: 'email',
  methods: {
    handleClick () {
      this.$bus.$emit('on-click', 'hello')
    }
  }
}
</script>

<style>
.email{
  border: 1px solid green;
}
</style>
