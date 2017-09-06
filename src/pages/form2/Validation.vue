<template>
  <div class="form-group" :class="validation.formClass">
    <div class="mt5 fs12" v-if="position === 'top'">
      <ul>
        <li class="text-danger" v-for="item in validation.errors"><i :class="item.icon"></i> {{item.text}}</li>
      </ul>
    </div>
    <slot></slot>
    <div class="mt5 fs12" v-if="position === 'bottom'">
      <ul>
        <li class="text-danger" v-for="item in validation.errors"><i :class="item.icon"></i> <span v-html="item.text"></span></li>
      </ul>
    </div>
    <div class="fs12">
      <ul>
        <li v-if="textCount" :class="{'text-danger': isOver}">{{textCountValue}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'validation',
  components: {

  },
  props: {
    value: {},
    position: {type: String, default: 'bottom'},
    validation: {type: Object, required: true},
    textCount: {type: Boolean, default: false}
  },
  computed: {
    textCountValue() {
      return `${this.value.length}/${this.max}文字`
    },
    isOver () {
      return this.value.length > this.max || this.validation.isError
    }
  },
  data () {
    const rules = this.validation.rules
    let max = 0
    rules.forEach( elm => {
      if (Object.keys(elm)[0] === 'max') {
        max = elm.max
      }
    })
    return {
      max
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
