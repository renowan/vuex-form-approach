<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <div class="form-group">
        <label for="exampleInputEmail1">ペット: 名前</label>
        <input type="text" class="form-control" placeholder="" v-model="name">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">ペット: 種類</label>
        <input type="text" class="form-control" placeholder="" v-model="kind">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pet-input',
  props: {
    value: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  data () {
    const {name, kind} = this.value
    return {
      name,
      kind,
    }
  },
  watch: {
    name () {
      this.onChange()
    },
    kind () {
      this.onChange()
    }
  },
  methods: {
    onChange () {
      const { name, kind, index } = this
      this.$emit('on-change', {
        name,
        kind
      }, index)
    }
  }
}
</script>

<style scoped>

</style>
