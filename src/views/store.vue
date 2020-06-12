<template>
  <div>
    <a-input v-model="stateValue" />
    <p>{{ stateValue }} -> last letter is {{ inputValueLastLetter }}</p>
    <!-- <a-show :content="inputValue"/> -->
    <p>appName: {{ appName }} appNameWithVersion: {{ appNameWithVersion }}</p>
    <p>userName: {{ userName }} first letter is {{ firstLetter }}</p>
    <button @click="changeAppName">修改appName</button>
    <p>{{ appVersion }}</p>
    <button @click="changeUserName">修改userName</button>
    <button @click="registerModule">动态注册模块</button>
    <p v-for="(li, index) in todoList" :key="index">{{ li }}</p>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
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
      userName: state => state.user.userName,
      appVersion: state => state.appVersion,
      todoList: state => state.user.todo ? state.user.todo.todoList : []
    }),
    ...mapGetters([
      'appNameWithVersion',
      'firstLetter'
    ]),
    stateValue: {
      get () {
        return this.$store.state.stateValue
      },
      set (val) {
        this.SET_STATE_VALUE(val)
      }
    },
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
    ...mapMutations([
      'SET_APP_NAME',
      'SET_APP_VERSION',
      'SET_USER_NAME',
      'SET_STATE_VALUE'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    handleInput (val) {
      this.inputValue = val
    },
    changeAppName () {
      // this.SET_APP_NAME('newAppName')
      // this.SET_APP_VERSION()
      this.updateAppName()
    },
    changeUserName () {
      this.SET_USER_NAME('vent')
    },
    registerModule () {
      this.$store.registerModule(['user', 'todo'], {
        state: {
          todoList: [
            '学习mutations',
            '学习actions'
          ]
        }
      })
    }
  }
}

</script>
<style>
</style>
