<template>
  <div class="home">
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到parent</button>
    <b>{{ food }}</b>
    <!-- <button @click="getInfo">请求数据</button> -->
    <button @click="getInfo" :style="{ background: bgColor }">请求数据</button>
    <img :src="url">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getUserInfo } from '@/api/user'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      url: '',
      bgColor: ''
    }
  },
  props: {
    food: {
      type: String,
      default: 'orange'
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log(vm)
    })
  },
  beforeRouteLeave (to, from, next) {
    const leave = confirm('您确定要离开吗？')
    if (leave) next()
    else next(false)
  },
  methods: {
    handleClick (type) {
      if (type === 'back') this.$router.back()
      else if (type === 'push') {
        this.$router.push({
          // name: 'argu',
          // params: {
          //   name: 'jitong'
          // }
          name: 'parent',
          query: {
            name: 'jitong'
          }
        })
      }
      else if (type === 'replace') {
        this.$router.replace('/parent')
      }
    },
    async getInfo () {
      const res = await getUserInfo()
      console.log('res: ', res.data)
      this.url = res.data.img
      this.bgColor = res.data.color
    }
    // getInfo () {
    //   getUserInfo().then(res => {
    //     console.log('res:' + res)
    //   })
    // }
  }
}
</script>
