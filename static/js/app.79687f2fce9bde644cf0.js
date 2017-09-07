webpackJsonp([1],{

/***/ "+pMh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("M4fF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'form2-view',
  components: {},
  computed: {
    myStore: function myStore() {
      return this.$store.state.form2;
    }
  },
  created: function created() {},

  methods: {
    inputUpdate: function inputUpdate(value, path) {
      this.$store.commit('form2/INPUT_UPDATE', { value: value, path: path });
    },
    reset: function reset() {
      this.$store.commit('form2/RESET_INPUT_DATA');
    }
  }
});

/***/ }),

/***/ "0KDz":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "1SwF":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "2Dp/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("M4fF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);


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
  form2: state => state
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

/* harmony default export */ __webpack_exports__["a"] = ({
  state: JSON.parse(JSON.stringify(defaultState)),
  getters,
  actions,
  mutations,
  namespaced: true
});


/***/ }),

/***/ "2z5g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PageView_vue__ = __webpack_require__("+pMh");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_62b363f4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_PageView_vue__ = __webpack_require__("9ftB");
function injectStyle (ssrContext) {
  __webpack_require__("Os36")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-62b363f4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PageView_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_62b363f4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_PageView_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "4a64":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('p', [_vm._v("ルール")]), _vm._v(" "), _c('ul', {
    staticClass: "rule-ul"
  }, _vm._l((_vm.rules), function(item) {
    return _c('li', [_vm._v(_vm._s(item))])
  }))])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "5qrN":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "6prT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('h3', [_vm._v("Profile")]), _vm._v(" "), _c('validation', {
    attrs: {
      "order": _vm.myStore.profile.name
    }
  }, [_c('label', [_vm._v("名前（初回チェックしない - skipFirstTime）")]), _vm._v(" "), _c('input', {
    staticClass: "form-control input-sm",
    attrs: {
      "type": "text",
      "placeholder": ""
    },
    domProps: {
      "value": _vm.myStore.profile.name.value
    },
    on: {
      "input": function($event) {
        _vm.inputUpdate($event.target.value, 'profile.name')
      }
    }
  })]), _vm._v(" "), _c('rule-list', {
    attrs: {
      "rules": _vm.myStore.profile.name.validation.rules
    }
  }), _vm._v(" "), _c('validation', {
    attrs: {
      "order": _vm.myStore.profile.age
    }
  }, [_c('label', [_vm._v("年齢（数値150まで）")]), _vm._v(" "), _c('input', {
    staticClass: "form-control input-sm",
    attrs: {
      "type": "text",
      "placeholder": ""
    },
    domProps: {
      "value": _vm.myStore.profile.age.value
    },
    on: {
      "input": function($event) {
        _vm.inputUpdate($event.target.value, 'profile.age')
      }
    }
  })]), _vm._v(" "), _c('rule-list', {
    attrs: {
      "rules": _vm.myStore.profile.age.validation.rules
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('h3', [_vm._v("Info")]), _vm._v(" "), _c('validation', {
    attrs: {
      "order": _vm.myStore.info.graduated
    }
  }, [_c('label', [_vm._v("出身校")]), _vm._v(" "), _c('input', {
    staticClass: "form-control input-sm",
    attrs: {
      "type": "text",
      "placeholder": ""
    },
    domProps: {
      "value": _vm.myStore.info.graduated.value
    },
    on: {
      "input": function($event) {
        _vm.inputUpdate($event.target.value, 'info.graduated')
      }
    }
  })]), _vm._v(" "), _c('rule-list', {
    attrs: {
      "rules": _vm.myStore.info.graduated.validation.rules
    }
  }), _vm._v(" "), _c('validation', {
    attrs: {
      "order": _vm.myStore.info.phoneNum
    }
  }, [_c('label', [_vm._v("電話番号（ハイフン無し10~11桁）")]), _vm._v(" "), _c('input', {
    staticClass: "form-control input-sm",
    attrs: {
      "type": "text",
      "placeholder": ""
    },
    domProps: {
      "value": _vm.myStore.info.phoneNum.value
    },
    on: {
      "input": function($event) {
        _vm.inputUpdate($event.target.value, 'info.phoneNum')
      }
    }
  })]), _vm._v(" "), _c('rule-list', {
    attrs: {
      "rules": _vm.myStore.info.phoneNum.validation.rules
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('button', {
    staticClass: "btn btn-default btn-sm",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.reset
    }
  }, [_vm._v("\n            リセット\n          ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default btn-primary btn-sm",
    attrs: {
      "type": "button",
      "disabled": _vm.myStore.disabled
    }
  }, [_vm._v("\n            保存\n          ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_vm._v("\n      Store\n      "), _c('pre', [_vm._v(_vm._s(this.myStore))])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 mb24"
  }, [_vm._v("\n      複数のバリデーションありのフォームと戦う。入力中の状態、バリデーション設定はすべてStoreに置く方針で実装する。\n    ")])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "7RSx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PetInput_vue__ = __webpack_require__("OBQv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_89b5fe04_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_PetInput_vue__ = __webpack_require__("YPqB");
function injectStyle (ssrContext) {
  __webpack_require__("5qrN")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-89b5fe04"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PetInput_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_89b5fe04_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_PetInput_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "9e/c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'rule-list',
  props: {
    rules: { type: Array, default: [] }
  },
  data: function data() {
    return {};
  },

  watch: {},
  methods: {}
});

/***/ }),

/***/ "9ftB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('h3', [_vm._v("Profile")]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("名前")]), _vm._v(" "), _c('input', {
    staticClass: "form-control input-sm",
    attrs: {
      "type": "text",
      "placeholder": ""
    },
    domProps: {
      "value": _vm.myStore.profile.name
    },
    on: {
      "input": function($event) {
        _vm.inputUpdate($event.target.value, 'profile.name')
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("年齢")]), _vm._v(" "), _c('input', {
    staticClass: "form-control input-sm",
    attrs: {
      "type": "text",
      "placeholder": ""
    },
    domProps: {
      "value": _vm.myStore.profile.age
    },
    on: {
      "input": function($event) {
        _vm.inputUpdate($event.target.value, 'profile.age')
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('h3', [_vm._v("Info")]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("出身校")]), _vm._v(" "), _c('input', {
    staticClass: "form-control input-sm",
    attrs: {
      "type": "text",
      "placeholder": ""
    },
    domProps: {
      "value": _vm.myStore.info.graduated
    },
    on: {
      "input": function($event) {
        _vm.inputUpdate($event.target.value, 'info.graduated')
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("電話番号")]), _vm._v(" "), _c('input', {
    staticClass: "form-control input-sm",
    attrs: {
      "type": "text",
      "placeholder": ""
    },
    domProps: {
      "value": _vm.myStore.info.phoneNum
    },
    on: {
      "input": function($event) {
        _vm.inputUpdate($event.target.value, 'info.phoneNum')
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('button', {
    staticClass: "btn btn-default btn-sm",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.reset
    }
  }, [_vm._v("\n            リセット\n          ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default btn-primary btn-sm",
    attrs: {
      "type": "button",
      "disabled": _vm.myStore.disabled
    }
  }, [_vm._v("\n            保存\n          ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_vm._v("\n      Store\n      "), _c('pre', [_vm._v(_vm._s(this.myStore))])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 mb24"
  }, [_vm._v("\n      複数のバリデーションありのフォームと戦う。入力中の状態、バリデーション設定はすべてStoreに置く方針で実装する。\n    ")])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "G2bb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("M4fF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validationCheck_js__ = __webpack_require__("OkR4");



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
  form3: state => state
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
    let localState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"])(state)
    let targetObj = localState[segments[0]][segments[1]]
    targetObj.value = data.value
    targetObj = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__validationCheck_js__["a" /* default */])(targetObj)
    commit(INPUT_UPDATE, {obj: targetObj, path})

    let disabled = checkError(localState)

    commit(UPDATE_DISABLED, disabled)
  },
  // 全体バリデーションエラーチェック
  checkError ({commit, state}) {
    let localState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"])(state)
    for (var variable in localState) {
      if (localState.hasOwnProperty(variable)) {
        let child = localState[variable]
        for (var variable2 in child) {

          if (child.hasOwnProperty(variable2)) {
            if (child[variable2].hasOwnProperty('validation')) {
              const targetObj = child[variable2]
              child[variable2] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__validationCheck_js__["a" /* default */])(targetObj)
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

/* harmony default export */ __webpack_exports__["a"] = ({
  state: JSON.parse(JSON.stringify(defaultState)),
  getters,
  actions,
  mutations,
  namespaced: true
});


/***/ }),

/***/ "IcnI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_form1__ = __webpack_require__("c4sR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_form2__ = __webpack_require__("2Dp/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_form3__ = __webpack_require__("G2bb");






__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */])

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  modules: {
    form1: __WEBPACK_IMPORTED_MODULE_2__modules_form1__["a" /* default */],
    form2: __WEBPACK_IMPORTED_MODULE_3__modules_form2__["a" /* default */],
    form3: __WEBPACK_IMPORTED_MODULE_4__modules_form3__["a" /* default */],
  },
  strict: true
}));


/***/ }),

/***/ "LFBp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PetInput_vue__ = __webpack_require__("7RSx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("M4fF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'form1-view',
  computed: {
    myStore: function myStore() {
      return this.$store.state.form1;
    }
  },
  components: {
    PetInput: __WEBPACK_IMPORTED_MODULE_1__PetInput_vue__["a" /* default */]
  },
  data: function data() {
    return {
      profile: {
        name: '',
        age: 0,
        pet: []
      }
    };
  },

  watch: {
    'profile': {
      handler: function handler(val) {
        this.$store.commit('FORM1_UPDATE_PROFILE', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_lodash__["cloneDeep"])(val));
      },

      deep: true
    }
  },
  filters: {
    pretty: function pretty(val) {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(JSON.parse(val), null, 2);
    }
  },
  methods: {
    addPet: function addPet() {
      this.profile.pet.push({
        name: 'no name',
        kind: 'no kind'
      });
    },
    onChangePet: function onChangePet(val, index) {
      this.profile.pet[index] = val;
      this.$store.commit('FORM1_UPDATE_PROFILE', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_lodash__["cloneDeep"])(this.profile));
    }
  }
});

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2294fb8b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("w5wi");
function injectStyle (ssrContext) {
  __webpack_require__("noq4")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2294fb8b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Mqv7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group",
    class: _vm.order.validation.formClass
  }, [(_vm.position === 'top') ? _c('div', {
    staticClass: "mt5 fs12"
  }, [_c('ul', _vm._l((_vm.order.validation.errors), function(item) {
    return _c('li', {
      staticClass: "text-danger"
    }, [_c('i', {
      class: item.icon
    }), _vm._v(" " + _vm._s(item.text))])
  }))]) : _vm._e(), _vm._v(" "), _vm._t("default"), _vm._v(" "), (_vm.position === 'bottom') ? _c('div', {
    staticClass: "mt5 fs12"
  }, [_c('ul', _vm._l((_vm.order.validation.errors), function(item) {
    return _c('li', {
      staticClass: "text-danger"
    }, [_c('i', {
      class: item.icon
    }), _vm._v(" "), _c('span', {
      domProps: {
        "innerHTML": _vm._s(item.text)
      }
    })])
  }))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "fs12"
  }, [_c('ul', [(_vm.textCount) ? _c('li', {
    class: {
      'text-danger': _vm.isOver
    }
  }, [_vm._v(_vm._s(_vm.textCountValue))]) : _vm._e()])])], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__("IcnI");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
})


/***/ }),

/***/ "OBQv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'pet-input',
  props: {
    value: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  data: function data() {
    var _value = this.value,
        name = _value.name,
        kind = _value.kind;

    return {
      name: name,
      kind: kind
    };
  },

  watch: {
    name: function name() {
      this.onChange();
    },
    kind: function kind() {
      this.onChange();
    }
  },
  methods: {
    onChange: function onChange() {
      var name = this.name,
          kind = this.kind,
          index = this.index;

      this.$emit('on-change', {
        name: name,
        kind: kind
      }, index);
    }
  }
});

/***/ }),

/***/ "OkR4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const rule = {
  required (data) {
    return data === null || data === undefined || data === ''
  },
  spaceOnly (data) {
    const result = String(data).replace(/\s|　/g, '')
    return String(data).length > 0 && result.length < 1
  },
  min (data, length) {
    return String(data).length < length
  },
  max (data, length) {
    return String(data).length > length
  },
  minValue (data, limit) {
    return data < limit
  },
  maxValue (data, limit) {
    return data > limit
  },
  isNumber (data) {
    return String(data).match(/[^0-9]/)
  }
}

const limitTempText = (dataType) => {
  let temp = '文字'
  switch (dataType) {
    case 'number':
      temp = '桁'
      break
    default:
      break
  }
  return temp
}

const errorMessage = {
  required: {
    icon: 'fa fa-exclamation-triangle',
    text: '入力必須項目'
  },
  spaceOnly: {
    icon: 'fa fa-exclamation-triangle',
    text: `改行、スペースのみ`
  },
  min (length, dataType) {
    const temp = limitTempText(dataType)
    return {
      icon: 'fa fa-exclamation-triangle',
      text: `文字数制限：${length}${temp}以上。`
    }
  },
  max (length, dataType) {
    const temp = limitTempText(dataType)
    return {
      icon: 'fa fa-exclamation-triangle',
      text: `文字数制限：${length}${temp}以内。`
    }
  },
  minValue (limit, dataType) {
    return {
      icon: 'fa fa-exclamation-triangle',
      text: `制限値：${limit}以上。`
    }
  },
  maxValue (limit, dataType) {
    return {
      icon: 'fa fa-exclamation-triangle',
      text: `制限値：${limit}以内。`
    }
  },
  isNumber: {
    icon: 'fa fa-exclamation-triangle',
    text: '半角数字のみ可'
  }
}

/*
  order フォーマット
  order = {
    value: '',
    validation: {
      rules: [],
      isError: true,
      formClass: '',
    },
    type: 'string',
    skipFirstTime: true,
    dirty: true,
  }
 */
/* harmony default export */ __webpack_exports__["a"] = ((order) => {

  order.validation.errors = []
  order.validation.isError = false
  order.validation.formClass = ''

  const value = order.value // バリデーションをかける対象
  const rules = order.validation.rules
  const type = order.type

  rules.forEach(elm => {
    const ruleName = (typeof elm === 'string') ? elm : Object.keys(elm)[0]
    const ruleFunc = rule[ruleName]
    const ruleValue = elm[ruleName] || null

    if (ruleFunc(value, ruleValue)) {
      order.validation.isError = true
      const errorsOjb = (typeof elm === 'string') ? errorMessage[ruleName] : errorMessage[ruleName](ruleValue, type)
      order.validation.errors.push(errorsOjb)
    }

  })

  // バリデーション結果によってcssクラスを付与する
  order.validation.formClass = order.validation.isError ? 'has-error' : ''

  if (order.skipFirstTime) {
    if (!order.dirty && value !== '') {
      // 初回入力、dirtyを変更
      order.dirty = true
    } else if (!order.dirty && value === '') {
      // 未入力、エラーを見えないように
      order.validation.formClass = ''
      order.validation.errors = []
    }
  }

  return order
});


/***/ }),

/***/ "Os36":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "RpAY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "YPqB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "exampleInputEmail1"
    }
  }, [_vm._v("ペット: 名前")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.name),
      expression: "name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ""
    },
    domProps: {
      "value": (_vm.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "exampleInputEmail1"
    }
  }, [_vm._v("ペット: 種類")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.kind),
      expression: "kind"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ""
    },
    domProps: {
      "value": (_vm.kind)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.kind = $event.target.value
      }
    }
  })])])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Hello__ = __webpack_require__("qSdX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_form1_PageView__ = __webpack_require__("mJui");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_form2_PageView__ = __webpack_require__("2z5g");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_form3_PageView__ = __webpack_require__("qlpp");







__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */])

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: __WEBPACK_IMPORTED_MODULE_2__components_Hello__["a" /* default */]
    },
    {
      path: '/form1',
      name: 'Form1View',
      component: __WEBPACK_IMPORTED_MODULE_3__pages_form1_PageView__["a" /* default */]
    },
    {
      path: '/form2',
      name: 'Form2View',
      component: __WEBPACK_IMPORTED_MODULE_4__pages_form2_PageView__["a" /* default */]
    },
    {
      path: '/form3',
      name: 'Form3View',
      component: __WEBPACK_IMPORTED_MODULE_5__pages_form3_PageView__["a" /* default */]
    }
  ]
}));


/***/ }),

/***/ "c4sR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = ({
  state,
  getters,
  actions,
  mutations
});


/***/ }),

/***/ "e6x0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("M4fF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Validation_vue__ = __webpack_require__("qjc8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RuleList_vue__ = __webpack_require__("pW5q");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'form3-view',
  components: {
    validation: __WEBPACK_IMPORTED_MODULE_1__Validation_vue__["a" /* default */],
    ruleList: __WEBPACK_IMPORTED_MODULE_2__RuleList_vue__["a" /* default */]
  },
  computed: {
    myStore: function myStore() {
      return this.$store.state.form3;
    }
  },
  created: function created() {
    this.$store.dispatch('form3/checkError');
  },

  methods: {
    inputUpdate: function inputUpdate(value, path) {
      this.$store.dispatch('form3/inputUpdate', { value: value, path: path });
    },
    reset: function reset() {
      this.$store.commit('form3/RESET_INPUT_DATA');
    }
  }
});

/***/ }),

/***/ "gwv5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "exampleInputEmail1"
    }
  }, [_vm._v("名前")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.profile.name),
      expression: "profile.name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ""
    },
    domProps: {
      "value": (_vm.profile.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.profile.name = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 mb24"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "exampleInputEmail1"
    }
  }, [_vm._v("年齢")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.profile.age),
      expression: "profile.age"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ""
    },
    domProps: {
      "value": (_vm.profile.age)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.profile.age = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "row mb16"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.addPet
    }
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-plus"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, _vm._l((_vm.profile.pet), function(item, index) {
    return _c('PetInput', {
      key: index,
      attrs: {
        "value": item,
        "index": index
      },
      on: {
        "on-change": _vm.onChangePet
      }
    })
  }))])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_vm._v("\n      Store\n      "), _c('pre', [_vm._v(_vm._s(this.myStore))])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 mb24"
  }, [_vm._v("\n      複数のフォームのmodelをlocal stateに詰め込んで、発火するたびにstoreへどん\n    ")])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "kcwr":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "mJui":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PageView_vue__ = __webpack_require__("LFBp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_266ef732_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_PageView_vue__ = __webpack_require__("gwv5");
function injectStyle (ssrContext) {
  __webpack_require__("oz+U")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-266ef732"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PageView_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_266ef732_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_PageView_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "noq4":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "oz+U":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "pMZz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'hello',
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "pW5q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RuleList_vue__ = __webpack_require__("9e/c");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3022608b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_RuleList_vue__ = __webpack_require__("4a64");
function injectStyle (ssrContext) {
  __webpack_require__("0KDz")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3022608b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RuleList_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3022608b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_RuleList_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "qSdX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hello_vue__ = __webpack_require__("pMZz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0dad105f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Hello_vue__ = __webpack_require__("zGJj");
function injectStyle (ssrContext) {
  __webpack_require__("RpAY")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0dad105f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hello_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0dad105f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Hello_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "qjc8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Validation_vue__ = __webpack_require__("x3ga");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_82202cec_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Validation_vue__ = __webpack_require__("Mqv7");
function injectStyle (ssrContext) {
  __webpack_require__("kcwr")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-82202cec"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Validation_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_82202cec_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Validation_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "qlpp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PageView_vue__ = __webpack_require__("e6x0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9ef7d0b6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_PageView_vue__ = __webpack_require__("6prT");
function injectStyle (ssrContext) {
  __webpack_require__("1SwF")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9ef7d0b6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PageView_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9ef7d0b6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_PageView_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "w5wi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('div', {
    staticClass: "container mb24"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [_vm._v("\n        Navi: "), _c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Top")]), _vm._v(" | "), _c('router-link', {
    attrs: {
      "to": "/form1"
    }
  }, [_vm._v("form1")]), _vm._v(" | "), _c('router-link', {
    attrs: {
      "to": "/form2"
    }
  }, [_vm._v("form2")]), _vm._v(" | "), _c('router-link', {
    attrs: {
      "to": "/form3"
    }
  }, [_vm._v("form3")])], 1)])]), _vm._v(" "), _c('router-view')], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('h1', [_vm._v("Vuex Form")])])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "x3ga":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__("fZjL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'validation',
  components: {},
  props: {
    position: { type: String, default: 'bottom' },
    order: { type: Object, required: true },
    textCount: { type: Boolean, default: false }
  },
  computed: {
    textCountValue: function textCountValue() {
      return this.order.value.length + '/' + this.max + '\u6587\u5B57';
    },
    isOver: function isOver() {
      return this.order.value.length > this.max || this.order.validation.isError;
    }
  },
  data: function data() {
    var rules = this.order.validation.rules;
    var max = 0;
    rules.forEach(function (elm) {
      if (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(elm)[0] === 'max') {
        max = elm.max;
      }
    });
    return {
      max: max
    };
  },

  methods: {}
});

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app'
});

/***/ }),

/***/ "zGJj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 mb16"
  }, [_vm._v("\n      Top page.\n    ")])])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.79687f2fce9bde644cf0.js.map