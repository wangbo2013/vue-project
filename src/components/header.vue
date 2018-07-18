<template>
  <el-header>
    <span>简书</span>
    <el-input v-model="input" placeholder="请输入搜索内容"></el-input>
    <el-button icon="el-icon-search" circle @click="searchSubmit"></el-button>
  </el-header>
</template>
<script>
    export default{
        data(){
            return {
                input: ""
            }
        },
      methods: {
            searchSubmit: function(){

            }
      }
    }
</script>
<style lang="stylus" scoped>
  .el-header{
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
    .el-button{
      width: 40px;
      height: 40px;
      margin-top: 10px;
    }
  }
</style>
