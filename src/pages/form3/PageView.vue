<template>
  <div class="container">

    <div class="row">
      <div class="col-xs-12 mb24">
        複数のバリデーションありのフォームと戦う。入力中の状態、バリデーション設定はすべてStoreに置く方針で実装する。
      </div>
    </div>

    <div class="row">
      <div class="col-xs-6">



        <div class="row">
          <div class="col-xs-12">

            <h3>Profile</h3>

            <validation :order="myStore.profile.name">
              <label>名前（初回チェックしない - skipFirstTime）</label>
              <input
              type="text"
              class="form-control input-sm"
              placeholder=""
              :value="myStore.profile.name.value"
              @input="inputUpdate($event.target.value, 'profile.name')">
            </validation>

            <rule-list :rules="myStore.profile.name.validation.rules"></rule-list>

            <validation :order="myStore.profile.age">
              <label>年齢（数値150まで）</label>
              <input
              type="text"
              class="form-control input-sm"
              placeholder=""
              :value="myStore.profile.age.value"
              @input="inputUpdate($event.target.value, 'profile.age')">
            </validation>

            <rule-list :rules="myStore.profile.age.validation.rules"></rule-list>

          </div>
        </div>

        <div class="row">
          <div class="col-xs-12">
            <h3>Info</h3>

            <validation :order="myStore.info.graduated">
              <label>出身校</label>
              <input
              type="text"
              class="form-control input-sm"
              placeholder=""
              :value="myStore.info.graduated.value"
              @input="inputUpdate($event.target.value, 'info.graduated')">
            </validation>

            <rule-list :rules="myStore.info.graduated.validation.rules"></rule-list>

            <validation :order="myStore.info.phoneNum">
              <label>電話番号（ハイフン無し10~11桁）</label>
              <input
              type="text"
              class="form-control input-sm"
              placeholder=""
              :value="myStore.info.phoneNum.value"
              @input="inputUpdate($event.target.value, 'info.phoneNum')">
            </validation>

            <rule-list :rules="myStore.info.phoneNum.validation.rules"></rule-list>

          </div>
        </div>


        <div class="row">
          <div class="col-xs-12">
            <button type="button" class="btn btn-default btn-sm" @click="reset">
              リセット
            </button>
            <button type="button" class="btn btn-default btn-primary btn-sm" :disabled="myStore.disabled">
              保存
            </button>
          </div>
        </div>

      </div>

      <div class="col-xs-6">
        Store
        <pre>{{ this.myStore }}</pre>
      </div>

    </div>

  </div>
</template>

<script>
import {cloneDeep} from 'lodash'
import validation from './Validation.vue'
import ruleList from './RuleList.vue'

export default {
  name: 'form3-view',
  components: {
    validation,
    ruleList
  },
  computed: {
    myStore () {
      return this.$store.state.form3
    }
  },
  created () {
    this.$store.dispatch('form3/checkError')
  },
  methods: {
    inputUpdate (value, path) {
      this.$store.dispatch('form3/inputUpdate', {value, path})
    },
    reset () {
      this.$store.commit('form3/RESET_INPUT_DATA')
    }
  }
}
</script>

<style scoped>
.form-group label {
  font-size: 12px;
}
pre {
  font-size: 11px;
}


</style>
