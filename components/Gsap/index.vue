<template>
  <div id="animated-number-demo">
    <input v-model="number2" type="number" step="20" />
    <p>{{ animatedNumber }}</p>
  </div>
</template>
<script>
export default {
  // head: {
  //   script: [
  //     {
  //       hid: "stripe",
  //       src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.4/gsap.min.js",
  //       defer: true,
  //     },
  //   ],
  // },
  data() {
    return {
      tweenedNumber: 0,
      number2: 0
    };
  },

  created() {
    this.number2 = this.number
  },
  props: {
    number:Number
  },
  computed: {
    animatedNumber: function () {
      return this.tweenedNumber.toFixed(0);
    },
  },
  watch: {
    number2: {
      handler(newValue) {
        gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue });
      },
      deep: true
    }
  },
};
</script>
<style>
</style>