<template>
  <div id="app">
<transition name="el-zoom-in-center">
    <router-view ></router-view>
</transition>
  </div>
</template>

<script>
export default {
  name: 'app'

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

height:100%;
width:100%;

}
router-view{height:100%;width:100%;}
</style>
