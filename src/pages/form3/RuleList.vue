<template>
  <div>
    <p>ルール</p>
    <ul class="rule-ul">
      <li v-for="item in rules">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'rule-list',
  props: {
    rules: {type: Array, default: []}
  },
  data () {
    return {
    }
  },
  watch: {

  },
  methods: {

  }
}
</script>

<style scoped>
.rule-ul {
  padding-left: 28px;
  margin-bottom: 24px;
}
</style>
