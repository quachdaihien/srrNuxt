<template>
  <SelectBracket v-model="setting_bracket_type" placeholder="Chọn Bracket" />
</template>

<script>
import SelectBracket from "/../Project/ssrNuxt/pages/components/multiSellect";
export default {
  components: {
    SelectBracket,
  },
  data() {
    return {
      setting_bracket_type: [],
    };
  },
};
</script>

<style>
</style>