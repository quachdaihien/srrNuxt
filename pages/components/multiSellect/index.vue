<template>
  <multiselect
    v-bind="$attrs"
    v-on="$listeners"
    :value="value"
    track-by="value"
    label="text"
    :options="backetOpts"
    @input="(value, id) => $emit('input', value, id)"
  >
  </multiselect>
</template>

<script>
import Multiselect from "vue-multiselect";
import {
  BRACKET_TEXT,
  BRACKET_TYPES,
} from "/../Project/ssrNuxt/utils/contants";

export default {
  components: {
    Multiselect,
  },

  model: {
    event: "input",
    props: "value",
  },

  props: {
    value: {
      type: [Object, Array, String, Number],
    },
  },

  created() {
    this.backetOpts = Object.values(BRACKET_TYPES).map((value) => ({
      value,
      text: BRACKET_TEXT[value],
    }));

    console.log("backetOpts", this.backetOpts);
  },

  mounted() {
    console.log("attrs", this.$attrs);
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
