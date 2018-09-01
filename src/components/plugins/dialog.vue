<template>
  <div class="dialog-container">
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      :dialogId="dialogId"
      :width="dialogWidth"
      :dialogTop="dialogTop"
      :class="dialogClass"
      v-draggable="draggable"
      @close="handleClose()">
      <slot name="template"></slot>
    </el-dialog>
  </div> 
</template>
<script>
export default {
  name: 'eDialog',
  props: {
    dialogId: {
      type: String
    },
    dialogWidth: {
      type: String,
      default: '30%'
    },
    dialogClass: {
      type: String,
      default: ''
    },
    dialogTop: {
      type: String
    },
    // 对话框是否可拖拽
    draggable: {
      type: Boolean,
      default: true
    }
  },
  /** 自定义指令 */
  directives: {
    draggable: {
      bind (el, binding, vnode, oldVnode) {
        if (binding.value === false) {
          return
        }

        const elHeader = el.querySelector('.el-dialog__header')
        const elDialog = el.querySelector('.el-dialog')

        // 对话框投标鼠标经过事件，设置鼠标形状
        elHeader.onmouseover = (e) => {
          if (elDialog.offsetWidth >= window.innerWidth || elDialog.offsetHeight >= window.innerHeight) {
            elHeader.style.cursor = 'default'
          }

          if (elDialog.offsetWidth < window.innerWidth || elDialog.offsetHeight < window.innerHeight) {
            elHeader.style.cursor = 'move'
          }
        }

        // 鼠标按下
        elHeader.onmousedown = (e) => {
          if (elDialog.offsetWidth >= window.innerWidth || elDialog.offsetHeight >= window.innerHeight) {
            return
          }

          // 获取鼠标点击位置相对于窗体left和top的位移
          const disX = e.clientX - elDialog.offsetLeft
          const disY = e.clientY - elDialog.offsetTop

          // 鼠标移动事件
          document.onmousemove = (e) => {
            let left = e.clientX - disX
            let top = e.clientY - disY

            // 设置窗体移动的位置不得超过浏览器的边缘
            if (left < 0) {
              left = 0
            } else if (left > window.innerWidth - elDialog.offsetWidth) {
              left = window.innerWidth - elDialog.offsetWidth
            }

            if (top < 0) {
              top = 0
            } else if (top > window.innerHeight - elDialog.offsetHeight) {
              top = window.innerHeight - elDialog.offsetHeight
            }

            // 移动当前元素
            elDialog.style.left = `${left}px`
            elDialog.style.top = `${top}px`
          }
        }

        // 鼠标放开事件
        document.onmouseup = (e) => {
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    }
  },
  mounted () {
    // 设置对话框top值
    if (this.dialogTop) {
      this.$el.querySelector('.el-dialog').style.top = this.dialogTop
    }
  },
  methods: {
    handleClose () {
      this.dialogVisible = false
    }
  },
  computed: {
    dialogVisible () {
      if (this.dialogId && this.dialogId === this.$store.getters.dialogType) {
        return this.$store.getters.dialogStatus
      } else {
        return false
      }
    },
    title () {
      return this.$store.getters.dialogTitle
    }
  }
}
</script>
<style lang="stylus">
/**将对话框改为绝对定位，否则限制拖拽区域有问题*/
.el-dialog__wrapper{
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  .el-dialog{
    position: absolute !important;
    margin-top: 0 !important;
    color: #fff;
  }
}
</style>