<template>
  <div id="app">

    <div class="container mb24">
      <div class="row">
        <div class="col-xs-12">
          <h1>Vuex Form</h1>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  /*margin: 20px 0;*/
}

.mb8 {
  margin-bottom: 8px;
}

.mb16 {
  margin-bottom: 16px;
}

.mb24 {
  margin-bottom: 24px;
}

</style>
