<template>
  <div class="container">

    <div class="row">
      <div class="col-xs-12 mb24">
        複数ののフォームと戦う。storeの中にネストされたデータを最小限のmutationsで更新する実装。
      </div>
    </div>

    <div class="row">
      <div class="col-xs-6">


        <div class="row">
          <div class="col-xs-12">

            <h3>Profile</h3>

            <div class="form-group">
              <label>名前</label>
              <input
              type="text"
              class="form-control input-sm"
              placeholder=""
              :value="myStore.profile.name"
              @input="inputUpdate($event.target.value, 'profile.name')">
            </div>

            <div class="form-group">
              <label>年齢</label>
              <input
              type="text"
              class="form-control input-sm"
              placeholder=""
              :value="myStore.profile.age"
              @input="inputUpdate($event.target.value, 'profile.age')">
            </div>

          </div>
        </div>

        <div class="row">
          <div class="col-xs-12">
            <h3>Info</h3>

            <div class="form-group">
              <label>出身校</label>
              <input
              type="text"
              class="form-control input-sm"
              placeholder=""
              :value="myStore.info.graduated"
              @input="inputUpdate($event.target.value, 'info.graduated')">
            </div>

            <div class="form-group">
              <label>電話番号</label>
              <input
              type="text"
              class="form-control input-sm"
              placeholder=""
              :value="myStore.info.phoneNum"
              @input="inputUpdate($event.target.value, 'info.phoneNum')">
            </div>

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

export default {
  name: 'form2-view',
  components: {
  },
  computed: {
    myStore () {
      return this.$store.state.form2
    }
  },
  created () {

  },
  methods: {
    inputUpdate (value, path) {
      this.$store.commit('form2/INPUT_UPDATE', {value, path})
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
