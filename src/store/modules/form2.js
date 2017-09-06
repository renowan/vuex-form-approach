const state = {
  profile: {
    name: {
      value: '',
      validation: {
        rules: [

        ]
      },
      dataType: 'string',
      skipFirstTime: false,
      isError: true, //バリデーション結果
      dirty: false, // 一同でも入力されたか
      formClass: '',
      errors: []
    },
    age: {
      value: 1,
      validation: {
        rulue: [

        ]
      },
      dataType: 'number',
      skipFirstTime: true,
      isError: false, //バリデーション結果
      dirty: false, // 一同でも入力されたか
      formClass: '',
      errors: []
    },
    pet: []
  }
}

// getters
const getters = {
  form2: state => state,
}

// profileの更新
const FORM2_UPDATE_PROFILE = 'FORM1_UPDATE_PROFILE'

// actions
const actions = {

}

// mutations
const mutations = {
  [FORM2_UPDATE_PROFILE] (state, data) {
    state.profile = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
