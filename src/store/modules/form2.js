import {cloneDeep} from 'lodash'
import validationCheck from './validationCheck.js'

/*
  [データフォーマット]
  {
    value: '',           // [String] 値
    validation: {        // [Object] バリデーション情報
      rules: [],               // [Array]   バリデーションrule設定
      isError: true,           // [Boolean] バリデーション結果
      errors: [],              // [Array]   バリデーションエラーのメッセージ（複数）
    },
    type: '',            // [String]  型
    skipFirstTime: true, // [Boolean] 初回バリデーションチェックするか
    dirty: true,         // [Boolean] 情報は一同入力されたか
  }

  [rules]
  required : 入力必須
  spaceOnly: スペース、改行のみは不可
  min      : 最小文字数（numberの場合は桁）
  max      : 最大文字数（numberの場合は桁）
  minValue : 最小値（numberで評価）
  maxValue : 最大値（numberで評価）
  isNumber : 半角数字のみ
 */
const defaultState = {
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
      skipFirstTime: true,
      dirty: false, // 一度でも入力されたか
    },
    age: {
      value: 200,
      validation: {
        rules: [
          'required',
          'isNumber',
          {max: 3},
          {minValue: 1},
          {maxValue: 150}
        ],
        isError: false, //バリデーション結果
        errors: [],
        formClass: ''
      },
      type: 'number',
      skipFirstTime: false,
      dirty: false, // 一度でも入力されたか
    },
  },
  info: {
    graduated: {
      value: '',
      validation: {
        rules: [
          'spaceOnly',
          {max: 10},
        ],
        isError: false, //バリデーション結果
        errors: [],
        formClass: ''
      },
      type: 'string',
      skipFirstTime: false,
      dirty: false, // 一度でも入力されたか
    },
    phoneNum: {
      value: '',
      validation: {
        rules: [
          'spaceOnly',
          'isNumber',
          {min: 10},
          {max: 11},
        ],
        isError: false, //バリデーション結果
        errors: [],
        formClass: ''
      },
      type: 'number',
      skipFirstTime: false,
      dirty: false, // 一度でも入力されたか
    }
  },
  disabled: false
}

// getters
const getters = {
  form2: state => state,
}

// 情報の更新
const INPUT_UPDATE = 'INPUT_UPDATE'
const UPDATE_DISABLED = 'UPDATE_DISABLED'
const RESET_INPUT_DATA = 'RESET_INPUT_DATA'

const checkError = state => {
  for (var variable in state) {
    if (state.hasOwnProperty(variable)) {
      let child = state[variable]
      for (var variable2 in child) {
        if (child.hasOwnProperty(variable2)) {
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
    commit(INPUT_UPDATE, {obj: targetObj, path})

    let disabled = checkError(localState)

    commit(UPDATE_DISABLED, disabled)
  },
  // 全体バリデーションエラーチェック
  checkError ({commit, state}) {
    let localState = cloneDeep(state)
    for (var variable in localState) {
      if (localState.hasOwnProperty(variable)) {
        let child = localState[variable]
        for (var variable2 in child) {

          if (child.hasOwnProperty(variable2)) {
            if (child[variable2].hasOwnProperty('validation')) {
              const targetObj = child[variable2]
              child[variable2] = validationCheck(targetObj)
              commit(INPUT_UPDATE, {obj: targetObj, path: `${variable}.${variable2}`})
            }
          }
        }
      }
    }
    commit(UPDATE_DISABLED, checkError(localState))
  }
}

// mutations
const mutations = {
  [INPUT_UPDATE] (state, payload) {
    const segments = payload.path.split('.')
    state[segments[0]][segments[1]] = payload.obj
  },
  [UPDATE_DISABLED] (state, payload) {
    state.disabled = payload
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
