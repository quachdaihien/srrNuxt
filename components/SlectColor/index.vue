<template>
  <div id="example-7">
    <input
      v-model="colorQuery"
      v-on:keyup.enter="updateColor"
      placeholder="Enter a color"
    />
    <button v-on:click="updateColor">Update</button>
    <p>Preview:</p>
    <span
      v-bind:style="{ backgroundColor: tweenedCSSColor }"
      class="example-7-color-preview"
    ></span>
    <p>{{ tweenedCSSColor }}</p>
  </div>
</template>

<script>
// var Color = this.net.brehaut.Color;
export default {
  head: {
    script: [
    //   {
    //     hid: "stripe",
    //     src: "https://cdn.jsdelivr.net/npm/color-js@1.0.3",
    //     defer: true,
    //   },
    //   {
    //     hid: "stripe",
    //     src: "https://cdn.jsdelivr.net/npm/tween.js@16.3.4",
    //     defer: true,
    //   },
    ],
  },
  data() {
    return {
      colorQuery: "",
      color: {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 1,
      },
      tweenedColor: {},
      tweenedCSSColor: "dâdada",
      colorad: "",
    };
  },
  created: function () {
    this.tweenedColor = Object.assign({}, this.color);
    // this.colorad = this.net.brehaut.Color;
  },

  computed: {
    // tweenedCSSColor: function () {
    //   return new Color({
    //     red: this.tweenedColor.red,
    //     green: this.tweenedColor.green,
    //     blue: this.tweenedColor.blue,
    //     alpha: this.tweenedColor.alpha,
    //   }).toCSS();
    // },
  },

  methods: {
    updateColor: function () {
      this.color = new Color(this.colorQuery).toRGB();
      this.colorQuery = "";
    },
  },

  watch: {
    color: function () {
      function animate() {
        if (TWEEN.update()) {
          requestAnimationFrame(animate);
        }
      }

      new TWEEN.Tween(this.tweenedColor).to(this.color, 750).start();

      animate();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>