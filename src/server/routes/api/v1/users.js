/**
 * users相关路由
 */
const _ = require('lodash')
const express = require('express')
const router = express.Router()
const Users = require('../../../data/user')

// 登陆
router.post('/users/login', (req, res) => {
  let username = _.trim(req.query.username || req.body.username || '')
  let password = req.body.password

  if (!username || !password) {
    return res.json({'errcode': 40002, 'errmsg': '不合法的参数'})
  }

  // 通过用户名获取用户信息
  let user = _.find(Users, (user) => {
    return user.username === username
  })

  if (!user) {
    return res.json({'errcode': 40003, 'errmsg': '用户不存在'})
  }

  if (user.password === password) {
    // 设置session
    req.session.userId = user.id

    return res.json({
      id: user.id,
      username: user.username,
      nickname: user.nickname,
      name: user.name,
      email: user.email
    })
  } else {
    return res.json({'errcode': 40004, 'errmsg': '密码错误'})
  }
})

// 退出登陆
router.get('/users/loginOut', (req, res) => {
  req.session.destroy()
  res.json({'errcode': 0, 'errmsg': '退出完成'})
})

module.exports = {router: router}
