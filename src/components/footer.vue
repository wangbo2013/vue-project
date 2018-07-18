<template>
  <el-footer>
    Copyright © 2013-2018 {{name}}  runoob.com All Rights Reserved. 备案号：闽ICP备15012807号-1
  </el-footer>
</template>
<script>
    export default{
        data(){
            return {
                name: '菜鸟教程'
            }
        }
    }
</script>
<style lang="stylus" scoped>
  .el-footer{
    background-color: #ebebeb;
    color: #444;
    text-align: center;
    height: 40px !important;
    line-height: 40px;
  }
</style>
