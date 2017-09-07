<template>
  <div class="form-group" :class="order.validation.formClass">
    <div class="mt5 fs12" v-if="position === 'top'">
      <ul>
        <li class="text-danger" v-for="item in order.validation.errors"><i :class="item.icon"></i> {{item.text}}</li>
      </ul>
    </div>
    <slot></slot>
    <div class="mt5 fs12" v-if="position === 'bottom'">
      <ul>
        <li class="text-danger" v-for="item in order.validation.errors"><i :class="item.icon"></i> <span v-html="item.text"></span></li>
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
    position: {type: String, default: 'bottom'},
    order: {type: Object, required: true},
    textCount: {type: Boolean, default: false}
  },
  computed: {
    textCountValue() {
      return `${this.order.value.length}/${this.max}文字`
    },
    isOver () {
      return this.order.value.length > this.max || this.order.validation.isError
    }
  },
  data () {
    const rules = this.order.validation.rules
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
.mt5 {
  margin-top: 5px;
}
.fs12 {
  font-size: 12px;
}
ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}
</style>
