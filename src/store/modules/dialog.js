import * as TYPES from '../mutations'

const state = {
  dialogStatus: false,
  dialogType: null,
  dialogTitle: ''
}

const getters = {
  dialogStatus: state => state.dialogStatus,
  dialogType: state => state.dialogType,
  dialogTitle: state => state.dialogTitle
}

const actions = {}

const mutations = {
  [TYPES.DIALOG_TYPE] (state, type) {
    state.dialogType = type
  },
  [TYPES.DIALOG_OPEN] (state, status) {
    state.dialogStatus = status
  },
  [TYPES.DIALOG_TITLE] (state, title) {
    state.dialogTitle = title
  }
}

export default {
  state, getters, actions, mutations
}
