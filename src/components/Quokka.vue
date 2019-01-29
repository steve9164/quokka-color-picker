<template>
  <div class="content">
    <h2>Quokka</h2>
    <p>Click a neopixel then the colour swatch to change it's colour</p>
    <div class="quokka">
      <div class="neopixels">
        <Neopixel
          v-for="(color, index) in neopixels.slice(0,4)"
          :key="index"
          v-bind:color="color"
          v-bind:select="() => selectNeopixel(index)"
          v-bind:selected="index === currentNeopixel"
        />
      </div>
      <div class="screen"/>
      <div class="neopixels">
        <Neopixel
          v-for="(color,  index) in neopixels.slice(4,8)"
          :key="index+4"
          v-bind:color="color"
          v-bind:select="() => selectNeopixel(index+4)"
          v-bind:selected="index+4 === currentNeopixel"
        />
      </div>
    </div>
    <br>
    <swatches
      v-if="currentNeopixel != null"
      colors="text-advanced"
      v-model="neopixels[currentNeopixel]"
      v-on:input="updateQuokka"
    />
    <div
      v-if="quokkaUpdated || error != null"
      v-bind:class="{feedback: true, error: error != null}"
    >{{feedback}}</div>
  </div>
</template>

<script>
import Neopixel from "./Neopixel.vue";
const Swatches = window.VueSwatches.default;
import sendToQuokka from "../models/sendToQuokka";

export default {
  name: "Quokka",
  components: {
    Neopixel,
    Swatches
  },
  data: function() {
    const neopixels = [];
    for (let i = 0; i < 8; i++) {
      neopixels.push("#000000");
    }
    return {
      quokkaUpdated: false,
      neopixels,
      currentNeopixel: 0,
      error: null
    };
  },
  computed: {
    feedback: function() {
      if (this.error != null) {
        return `Updating quokka failed (${this.error})`;
      } else if (this.quokkaUpdated) {
        return "Updated quokka successfully";
      } else {
        return "";
      }
    }
  },
  methods: {
    selectNeopixel(index) {
      this.currentNeopixel = index;
    },
    updateQuokka() {
      this.err = null;
      this.quokkaUpdated = false;
      sendToQuokka(this.neopixels).then(res => {
        this.quokkaUpdated = true;
        return res;
      }, err => {
        this.error = err;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

.quokka {
  display: flex;
  flex-direction: row;
}

.screen {
  width: 128px;
  height: 64px;
  border: 1px solid black;
  margin: 4px 8px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
