<template>
  <div class="header-container">
   <div class="header">
    <span>简书</span>
    <el-dropdown @command="toggleLanguage">
      <div class="userInfo"><span>{{languageCodeToText(language)}}</span></div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="cn">中文</el-dropdown-item>
        <el-dropdown-item command="en">English</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown @command="handleCommand">
      <div class="userInfo"><span>admin</span></div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="modifyInfo">编辑资料</el-dropdown-item>
        <el-dropdown-item command="resetPwd">修改密码</el-dropdown-item>
        <el-dropdown-item command="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
   </div>
   <!-- <dialog-component :title="title" :dialogVisible="dialogVisible">
     <div slot="template">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="form.sex" placeholder="请选择性别">
            <el-option label="男" value="man"></el-option>
            <el-option label="女" value="woman"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
   </dialog-component>
   <dialog-component :title="titleP" :dialogVisible="dialogVisibleP">
     <div slot="template">
      <el-form ref="formPassword" :model="formPassword" label-width="80px">
        <el-form-item label="原始密码">
          <el-input v-model="formPassword.old"></el-input>
        </el-form-item>
        <el-form-item label="新密码">
          <el-input v-model="formPassword.new"></el-input>
        </el-form-item>
      </el-form>
    </div>
   </dialog-component> -->
  </div>
</template>
<script>
import DialogComponent from '@/components/plugins/dialog'
export default{
  components: { DialogComponent },
  data () {
    return {
      input: '',
      dialogVisible: false,
      title: '修改个人信息',
      dialogVisibleP: false,
      titleP: '修改密码',
      form: {
        name: '',
        sex: ''
      },
      formPassword: {
        old: '',
        new: ''
      }
    }
  },
  created () {

  },
  methods: {
    handleCommand (command) {
      if (command === 'modifyInfo') {
        this.$store.commit('DIALOG_TYPE', 'headPassword')
      } else if (command === 'resetPwd') {
        this.$store.commit('DIALOG_TYPE', 'headerUser')
      } else {
        this.loginOut()
      }
    },
    // 退出
    loginOut () {
      this.$confirm('确定退出吗?', '提示', {
        type: 'warning'
      }).then(() => {

      })
    },
    languageCodeToText (code) {
      let language = '中文'
      switch (code) {
        case 'en':
          language = 'English'
          break
        default:
          break
      }
      return language
    },
    toggleLanguage (command) {

    },
    searchSubmit () {

    },
    modifyUser () {

    },
    modifyPassword () {

    }
  }
}
</script>
<style lang="stylus" scoped>
  .header-container{
    background-color: #ebebeb;
    color: #ea6f5a;
    font-size: 24px;
    font-weight: bolder;
    height: 60px !important;
    line-height: 60px;
    display: flex;
    display: -webkit-flex;
    span{
      width: 210px;
    }
    .el-input{
      width: 300px;
    }
    .header{
      line-height: 44px;
    }
    .userInfo{
      margin-right: 20px;
    }
  }
</style>
