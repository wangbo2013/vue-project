<template>
  <el-form ref="loginForm" :model="account" :rules="rules" label-position="left" label-width="0px"
           class="demo-ruleForm login-container">
    <h3 class="title">登录</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="account.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="account.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleLogin" :loading="loading">登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import API from '@/server/api_user'
import {USER} from '@/server/url'

export default {
  name: 'login',
  data () {
    return {
      loading: false,
      account: {
        username: 'admin',
        password: 'admin'
      },
      rules: {
        username: [{required: true, message: '请输入账号', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      }
    }
  },
  methods: {
    handleLogin () {
      this.$refs['loginForm'].validate((validator) => {
        if (validator) {
          this.loading = true
          const loginParams = {username: this.account.username, password: this.account.password}
          API.login(`${USER.login}`, loginParams).then((result) => {
            this.loading = false
            if (result && result.id) {
              localStorage.setItem('access-user', JSON.stringify(result))
              this.$router.push({path: '/'})
            } else {
              this.$message.error({showClose: true, message: result.errmsg || '登陆失败', duration: 2000})
            }
          }, (err) => {
            this.loading = false
            this.$message.error({showClose: true, message: err.toString(), duration: 2000})
          }).catch((err) => {
            if (err) {
              this.loading = false
              this.$message.error({showClose: true, message: '请求出现异常', duration: 2000})
            }
          })
        }
      })
    }
  }
}
</script>
<style lang="stylus">
body {
  background: #1D2024;
}
.login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 160px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;

    background: -ms-linear-gradient(top, #ace, #00C1DE); /* IE 10 */
    background: -moz-linear-gradient(top, #ace, #00C1DE); /*火狐*/
    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#ace), to(#00C1DE)); /*谷歌*/
    background: -webkit-linear-gradient(top, #ace, #00C1DE); /*Safari5.1 Chrome 10+*/
    background: -o-linear-gradient(top,#ace, #00C1DE); /*Opera 11.10+*/

    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>


