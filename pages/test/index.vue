<template>
  <div class="pl-2">
    <SelectBracket v-model="setting_bracket_type" placeholder="Chọn Bracket" />
    <Title :level="3" size="lg" color="red" shape="square"> Title </Title>
    <ul class="skip-links">
      <li>
        <a href="#main" ref="skipLink">Skip to main content</a>
      </li>
    </ul>
    <Gsap :number="number"></Gsap>
    <SelectColor> </SelectColor>

    <Slider></Slider>
  </div>
</template>
<script>
import Title from "~/components/title";
import SelectBracket from "~/pages/components/multiSellect";
import Gsap from "~/components/Gsap";
import SelectColor from "~/components/SlectColor";
import Slider from "~/components/Slider";
export default {
  head: {
    script: [
      {
        hid: "stripe",
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.4/gsap.min.js",
        defer: true,
      },
       {
        hid: "stripe",
        src: "https://cdn.jsdelivr.net/npm/color-js@1.0.3",
        defer: true,
      },
      {
        hid: "stripe",
        src: "https://cdn.jsdelivr.net/npm/tween.js@16.3.4",
        defer: true,
      },
    ],
  },
  components: {
    SelectBracket,
    Title,
    Gsap,
    SelectColor,
    Slider
  },
  data() {
    return {
      number: 0,
      setting_bracket_type: [],
    };
  },

  watch: {
    $route() {
      this.$refs.skipLink.focus();
    },
  },
};
</script>

<style>
.skipLink {
  white-space: nowrap;
  margin: 1em auto;
  top: 0;
  position: fixed;
  left: 50%;
  margin-left: -72px;
  opacity: 0;
}
.skipLink:focus {
  opacity: 1;
  background-color: white;
  padding: 0.5em;
  border: 1px solid black;
}
</style>