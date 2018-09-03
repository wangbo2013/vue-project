/**
 *  用户相关API
 */
import http from './http'

export default {
  // 登陆
  login: (url, params) => {
    return http.post(url, params)
  },
  // 登出
  loginOut: (url, params) => {
    http.get(url, params)
  }
}
