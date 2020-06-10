<template>
  <div>
    <a-input v-model="inputValue" />
    <p>{{ inputValue }} -> last letter is {{ inputValueLastLetter }}</p>
    <!-- <a-show :content="inputValue"/> -->
    <p>appName: {{ appName }} appNameWithVersion: {{ appNameWithVersion }}</p>
    <p>userName: {{ userName }} first letter is {{ firstLetter }}</p>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState, mapGetters } from 'vuex'
// import { createNamespacedHelpers } from 'vuex'
// const { mapState } = createNamespacedHelpers('user')
export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    AInput,
    AShow
  },
  computed: {
    // ...mapState({
    //   appName: state => state.appName,
    //   userName: state => state.user.userName
    // }),
    ...mapState({
      userName: state => state.user.userName
    }),
    ...mapGetters([
      'appNameWithVersion',
      'firstLetter'
    ]),
    // ...mapState([
    //   'appName'
    // ])
    // appNameWithVersion () {
    //   return this.$store.getters.appNameWithVersion
    // },
    appName () {
      return this.$store.state.appName
    },
    // userName () {
    //   return this.$store.state.user.userName
    // }
    inputValueLastLetter () {
      return this.inputValue.substr(-1, 1)
    }
    
  },
  methods: {
    handleInput (val) {
      this.inputValue = val
    }
  }
}

</script>
<style>
</style>
