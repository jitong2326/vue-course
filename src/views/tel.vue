<template>
  <div>
    tel: 17857589203
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'tel',
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    this.$bus.$on('on-click', mes => {
      this.message = mes
    })
  }
}

</script>
<style>
</style>
