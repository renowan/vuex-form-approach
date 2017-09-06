import {cloneDeep} from 'lodash'
import validationCheck from './validationCheck.js'
const state = {
  profile: {
    name: {
      value: '',
      validation: {
        rules: [
          'required',
          {min: 2},
          {max: 6},
        ],
        isError: true, //バリデーション結果
        errors: [],
        formClass: ''
      },
      type: 'string',
      skipFirstTime: false,
      dirty: false, // 一度でも入力されたか
    },
    age: {
      value: 1,
      validation: {
        rulues: [

        ],
        isError: false, //バリデーション結果
        errors: [],
        formClass: ''
      },
      type: 'number',
      skipFirstTime: true,
      dirty: false, // 一度でも入力されたか
    },
  },
  disabled: false
}

// getters
const getters = {
  form2: state => state,
}

// 情報の更新
const FORM2_INPUT_UPDATE = 'FORM2_INPUT_UPDATE'
const FORM2_UPDATE_DISABLED = 'FORM2_UPDATE_DISABLED'

const checkError = state => {
  for (var variable in state) {
    if (state.hasOwnProperty(variable)) {
      let child = state[variable]
      for (var variable2 in child) {
        if (child.hasOwnProperty(variable2)) {
          console.log('child[variable2]',child[variable2])
          if (child[variable2].hasOwnProperty('validation') && child[variable2].validation.isError) {
            return true
          }
        }
      }
    }
  }
  return false
}

// actions
const actions = {
  inputUpdate ({commit, state}, data) {
    const path = data.path
    const segments = path.split('.')
    let localState = cloneDeep(state)
    let targetObj = localState[segments[0]][segments[1]]
    targetObj.value = data.value
    targetObj = validationCheck(targetObj)
    commit(FORM2_INPUT_UPDATE, {obj: targetObj, path})

    let disabled = checkError(localState)
    // check

    commit(FORM2_UPDATE_DISABLED, disabled)
  }
}

// mutations
const mutations = {
  [FORM2_INPUT_UPDATE] (state, data) {
    const segments = data.path.split('.')
    state[segments[0]][segments[1]] = data.obj
  },
  [FORM2_UPDATE_DISABLED] (state, disabled) {
    state.disabled = disabled
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
