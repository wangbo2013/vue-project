<template>
   <div class="dialog-container">
       <el-dialog
          :title="title"
          :visible.sync="dialogVisible"
          :width="dialogWidth"
          :custom-class="dialogClass"
          @close="handleClose()"><slot name="template"></slot>
       </el-dialog>
   </div> 
</template>
<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    dialogWidth: {
      type: String,
      default: '40%'
    },
    dialogClass: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {

    }
  },
  methods: {
    handleClose () {
      this.dialogVisible = false
    }
  },
  computed: {}
}
</script>
<style scope>

</style>