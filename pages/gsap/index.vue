<template>
  <div id="animated-number-demo">
    <input v-model.number="number" type="number" step="20" />
    <p>{{ animatedNumber }}</p>
  </div>
</template>
<script>
export default {
  head: {
    script: [
      {
        hid: "stripe",
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.4/gsap.min.js",
        defer: true,
      },
    ],
  },
  data() {
    return {
      number: 0,
      tweenedNumber: 0,
    };
  },

  computed: {
    animatedNumber: function () {
      return this.tweenedNumber.toFixed(0);
    },
  },
  watch: {
    number: function (newValue) {
      gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue });
      console.log("[data-number]", this.$data, this.animatedNumber);
    },
  },
};
</script>
<style>
</style>