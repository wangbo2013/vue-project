/**
 * Created by jerry on 2017/6/9.
 */
import axios from 'axios'

// 响应时间
axios.defaults.timeout = 3000
// 允许跨域携带cookie信息
axios.defaults.withCredentials = true
// 基础URL路径
axios.defaults.baseURL = ''
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';//配置请求头

// 请求拦截器
axios.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})

// 基地址
// 接口代理地址参见：config/index.js中的proxyTable配置
let base = ''

// 通用方法
export default {
  post (url, params) {
    return new Promise((resolve, reject) => {
      axios.post(`${base}${url}`, params).then((res) => {
        resolve(res.data)
      }).catch((error) => {
        reject(error)
      })
    })
  },
  get (url, params) {
    return new Promise((resolve, reject) => {
      axios.get(`${base}${url}`, {params: params}).then((res) => {
        resolve(res.data)
      }).catch((error) => {
        reject(error)
      })
    })
  },
  put (url, params) {
    return new Promise((resolve, reject) => {
      axios.put(`${base}${url}`, params).then((res) => {
        resolve(res.data)
      }).catch((error) => {
        reject(error)
      })
    })
  },
  delete (url, params) {
    return new Promise((resolve, reject) => {
      axios.delete(`${base}${url}`, {params: params}).then((res) => {
        resolve(res.data)
      }).catch((error) => {
        reject(error)
      })
    })
  },
  patch (url, params) {
    return new Promise((resolve, reject) => {
      axios.patch(`${base}${url}`, params).then((res) => {
        resolve(res.data)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}
