import * as TYPES from '@/mutations';

const state = {
    status: false,
    type: null,
    title: ''
}

const getters = {
    status: state => state.status,
    type: state => state.type,
    title: state => state.title
}

const actions = {}

const mutations = {
    [TYPES.DIALOG_TYPE] (state, type) {
        state.type = type;
    },
    [TYPES.DIALOG_OPEN] (state, status) {
        state.status = status;
    },
    [TYPES.DIALOG_TITLE] (state, title) {
        state.title = title;
    }
}

export default {
    state, getters, actions, mutations
}