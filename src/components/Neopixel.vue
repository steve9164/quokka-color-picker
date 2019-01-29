<template>
  <div
    v-bind:class="{neopixel: true, selected}"
    v-bind:style="{'background-color': color}"
    v-on:click="select"
  />
</template>

<script>
export default {
  name: "Neopixel",
  props: {
    color: String,
    select: Function,
    selected: Boolean
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

.neopixel {
  width: 16px;
  height: 16px;
  border-radius: 8px;
  margin: 4px;
  box-sizing: border-box;
}

.neopixel.selected {
  outline: 2px dashed red;
}

li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
