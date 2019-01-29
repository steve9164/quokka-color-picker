<template>
  <div id="app">
    <Quokka/>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js" integrity="sha256-7/yoZS3548fXSRXqc/xYzjsmuW3sFKzuvOCHd06Pmps=" crossorigin="anonymous"></script>

<script>
import Quokka from './components/Quokka.vue'

export default {
  name: 'app',
  components: {
    Quokka
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
