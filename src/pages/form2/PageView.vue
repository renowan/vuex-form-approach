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
              <label>名前</label>
              <input
              type="text"
              class="form-control input-sm"
              placeholder=""
              :value="myStore.profile.name.value"
              @input="inputUpdate($event.target.value, 'profile.name')">
            </validation>

            <validation :order="myStore.profile.age">
              <label>年齢</label>
              <input
              type="text"
              class="form-control input-sm"
              placeholder=""
              :value="myStore.profile.age.value"
              @input="inputUpdate($event.target.value, 'profile.age')">
            </validation>

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

            <validation :order="myStore.info.phoneNum">
              <label>電話番号（ハイフン無し）</label>
              <input
              type="text"
              class="form-control input-sm"
              placeholder=""
              :value="myStore.info.phoneNum.value"
              @input="inputUpdate($event.target.value, 'info.phoneNum')">
            </validation>

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

export default {
  name: 'form2-view',
  components: {
    validation
  },
  computed: {
    myStore () {
      return this.$store.state.form2
    }
  },
  created () {
    this.$store.dispatch('form2/checkError')
  },
  methods: {
    inputUpdate (value, path) {
      this.$store.dispatch('form2/inputUpdate', {value, path})
    },
    reset () {
      this.$store.commit('form2/RESET_INPUT_DATA')
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
