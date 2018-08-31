import Vue from 'vue'
import Vuex from 'vuex'
import dialog from './modules/dialog'
import app from './modules/app'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dialog, app
  },
  strict: false
})
