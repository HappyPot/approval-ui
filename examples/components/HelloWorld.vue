<template>
  <div class="app">
    <ARemark v-model="text" ref="aremark" @on-blur="handelBlur"></ARemark>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      text: ""
    };
  },
  methods: {
    handelBlur(obj) {
      !obj.val
        ? (this.$refs.aremark.isError = true)
        : (this.$refs.aremark.isError = false);
      console.log(this.text);
    }
  }
};
</script>
<style>
</style>

