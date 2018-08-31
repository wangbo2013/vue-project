<template>
  <div class="header-container">
   <div class="header">
     <span>简书</span>
     <el-input v-model="input" placeholder="请输入搜索内容"></el-input>
     <el-button type="primary" size="small" @click="modifyUser">修改个人信息</el-button>
     <el-button type="primary" size="small" @click="modifyPassword">修改密码</el-button>
   </div>
   <dialog-component :title="title" :dialogVisible="dialogVisible">
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
   </dialog-component>
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
  methods: {
    searchSubmit () {

    },
    modifyUser () {
      this.dialogVisible = true
    },
    modifyPassword () {
      this.dialogVisibleP = true
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
  }
</style>
