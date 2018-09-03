const _ = require('lodash')
const $fs = require('fs')
const $path = require('path')
const express = require('express')
const router = express.Router()

$fs.readdir(__dirname, (err, files) => {
  if (err) {
    return
  }

  files.forEach((file) => {
    if (!_.startsWith(file, '.') && file !== 'index.js') {
      try {
        router.use('/' + file.replace('.js', ''), require('./' + file).router)
      } catch (ex) {
        if (ex) {
          console.error('路由加载错误[' + $path.join(__dirname, file) + ']:' + ex.stack)
        }
      }
    }
  })
})

module.exports = {router: router}
