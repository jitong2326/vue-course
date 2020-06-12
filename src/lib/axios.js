import axios from 'axios'
import baseURL from '@/config'

class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }

  getInsidConfig () {
    const config = {
      baseUrl: this.baseUrl,
      header: {
        //
      }
    }
    return config
  }

  interceptors (instance, url) {
    instance.interceptors.request.use(config => {
      if (!Object.keys(this.queue).length) {
        // 全局loading
      }
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })

    instance.interceptors.response.use(res => {
      delete this.queue[url]
      const { data, status } = res
      return { data, status }
    }, error => {
      delete this.queue[url]
      return Promise.reject(error)
    })
  }

  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsidConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
