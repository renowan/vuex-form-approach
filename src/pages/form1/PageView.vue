<template>
  <div class="container">

    <div class="row">
      <div class="col-xs-12 mb24">
        複数のフォームのmodelをlocal stateに詰め込んで、発火するたびにstoreへどん
      </div>
    </div>

    <div class="row">
      <div class="col-xs-6">

        <div class="row">
          <div class="col-xs-12">
            <div class="form-group">
              <label for="exampleInputEmail1">名前</label>
              <input type="text" class="form-control" placeholder="" v-model="profile.name">
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12 mb24">
            <div class="form-group">
              <label for="exampleInputEmail1">年齢</label>
              <input type="text" class="form-control" placeholder="" v-model="profile.age">
            </div>
          </div>
        </div>

        <div class="row mb16">
          <div class="col-xs-12">
            <button type="button" class="btn btn-default" @click="addPet">
              <i class="glyphicon glyphicon-plus"></i>
            </button>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12">
            <PetInput v-for="(item, index) in profile.pet"
            :value="item"
            :index="index"
            :key="index"
            @on-change="onChangePet">
            </PetInput>
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
import PetInput from './PetInput.vue'
import {cloneDeep} from 'lodash'

export default {
  name: 'form1-view',
  computed: {
    myStore () {
      return this.$store.state.form1
    }
  },
  components: {
    PetInput
  },
  data () {
    return {
      profile: {
        name: '',
        age: 0,
        pet: []
      }
    }
  },
  watch: {
    'profile': {
      handler (val) {
        this.$store.commit('FORM1_UPDATE_PROFILE', cloneDeep(val))
      },
      deep: true
    }
  },
  filters: {
    pretty (val) {
      return JSON.stringify(JSON.parse(val), null, 2)
    }
  },
  methods: {
    addPet () {
      this.profile.pet.push({
        name: 'no name',
        kind: 'no kind'
      })
    },
    onChangePet (val, index) {
      this.profile.pet[index] = val
      this.$store.commit('FORM1_UPDATE_PROFILE', cloneDeep(this.profile))
    }
  }
}
</script>

<style scoped>

</style>
