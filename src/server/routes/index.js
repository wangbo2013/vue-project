const express = require('express')
const router = express.Router()

// 接口访问
router.use('/api/v1', require('./api/v1/index').router)

module.exports = {router: router}
