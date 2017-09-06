<template>
  <div class="container">

    <div class="row">
      <div class="col-xs-12 mb24">
        複数のフォームのmodelをlocal stateに詰め込んで、発火するたびにstoreへどん
      </div>
    </div>

    <div class="row">
      <div class="col-xs-6">

        <h3>Profile</h3>

        <div class="row">
          <div class="col-xs-12">

            <div class="form-group">
              <validation :validation="myStore.profile.name.validation">
                <label>名前</label>
                <input type="text" class="form-control input-sm" placeholder="" :value="myStore.profile.name.value">
              </validation>
            </div>
          </div>
        </div>


        <div class="row">
          <div class="col-xs-12">

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
  data () {
    return {
    }
  },
  watch: {
    // 'profile': {
    //   handler (val) {
    //     this.$store.commit('FORM1_UPDATE_PROFILE', cloneDeep(val))
    //   },
    //   deep: true
    // }
  },
  filters: {
    pretty (val) {
      return JSON.stringify(JSON.parse(val), null, 2)
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.form-group label {
  font-size: 12px;
}
</style>
