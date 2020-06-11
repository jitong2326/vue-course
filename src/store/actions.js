import { getAppName } from '@/api/app'

const actions = {
  async updateAppName ({ commit }) {
    try {
      const { data: { appName } } = await getAppName()
      console.log(appName)
      commit('SET_APP_NAME', appName)
    } catch (err) {
      console.log(err)
    }
  }
}

export default actions
