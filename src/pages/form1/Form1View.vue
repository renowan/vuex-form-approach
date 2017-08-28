<template>
  <div class="container">

    <!-- <form-wrapper></form-wrapper> -->

    <div class="row">
      <div class="col-xs-4">

        <div class="row">
          <div class="col-xs-12">
            <div class="form-group">
              <label for="exampleInputEmail1">名前</label>
              <input type="text" class="form-control" placeholder="" v-model="profile.name">
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12">
            <div class="form-group">
              <label for="exampleInputEmail1">年齢</label>
              <input type="text" class="form-control" placeholder="" v-model="profile.age">
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import FormWrapper from './FormWrapper.vue'

export default {
  name: 'form1-view',
  data () {
    return {
      profile: {
        name: '',
        age: 0
      }
    }
  },
  watch: {
    'profile': {
      handler (val) {
        this.$store.commit('FORM1_UPDATE_PROFILE', val)
      },
      deep: true
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
