<template>
  <el-container>
    <v-header></v-header>
    <v-content></v-content>
    <v-footer></v-footer>
  </el-container>
</template>
<script>
  import header from './components/header';
  import content from './components/content';
  import footer from './components/footer';
export default {
  name: 'app',
  data(){
      return {};
  },
  components: {
      'v-header': header,
      'v-content': content,
      'v-footer': footer,
  }
};
</script>
<style lang="stylus" scoped>
  .el-container{
    width: 100%;
    height: 100%;
    border: 1px solid #808080;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
  }
</style>
