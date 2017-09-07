import {cloneDeep} from 'lodash'

const defaultState = {
  profile: {
    name: '',
    age: 1
  },
  info: {
    graduated: '',
    phoneNum: ''
  },
  disabled: false
}

// getters
const getters = {
  form2: state => state,
}

// 情報の更新
const INPUT_UPDATE = 'INPUT_UPDATE'
const RESET_INPUT_DATA = 'RESET_INPUT_DATA'

// actions
const actions = {

}

// mutations
const mutations = {
  [INPUT_UPDATE] (state, payload) {
    const segments = payload.path.split('.')
    state[segments[0]][segments[1]] = payload.value
  },
  [RESET_INPUT_DATA] (state) {
    Object.assign(state, defaultState)
  }
}

export default {
  state: JSON.parse(JSON.stringify(defaultState)),
  getters,
  actions,
  mutations,
  namespaced: true
}
