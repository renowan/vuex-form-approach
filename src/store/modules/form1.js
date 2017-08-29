const state = {
  profile: {
    name: '',
    age: 0,
    pet: []
  }
}

// getters
const getters = {
  form1: state => state,
}

// profileの更新
const FORM1_UPDATE_PROFILE = 'FORM1_UPDATE_PROFILE'

// actions
const actions = {

}

// mutations
const mutations = {
  [FORM1_UPDATE_PROFILE] (state, data) {
    state.profile = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
