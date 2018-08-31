import * as types from './../mutations'

const state = {
  appTheme: localStorage.APP_THEME || 'default',
  appLanguage: localStorage.APP_LANGUAGE || 'cn'
}

const getters = {
  appTheme: state => state.appTheme,
  appLanguage: state => state.appLanguage
}

const actions = {
  setTheme ({commit}, theme) {
    commit(types.APP_THEME, theme)
  },
  setLanguage ({commit}, language) {
    commit(types.APP_LANGUAGE, language)
  }
}

const mutations = {
  [types.APP_THEME] (state, data) {
    state.appTheme = data
  },
  [types.APP_LANGUAGE] (state, data) {
    state.appLanguage = data
  }
}

export default {
  state, getters, actions, mutations
}
