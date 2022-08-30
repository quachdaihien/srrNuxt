<template>
  <div class="pl-2">
    <SelectBracket v-model="setting_bracket_type" placeholder="Chọn Bracket" />
    <Title :level="3" size="lg" color="red" shape="square"> Title </Title>
  </div>
</template>

<script>
import Title from "~/components/title";
import SelectBracket from "~/pages/components/multiSellect";
export default {
  components: {
    SelectBracket,
    Title,
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