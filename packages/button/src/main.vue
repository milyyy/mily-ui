<template>
  <div>
    <button>o</button>
  </div>
</template>

<script>
export default {
  name: "MButton",
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String, // mini | small | medium
  },
  computed: {
    buttonSize(){
      return this.size;
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../theme-chalk/button.scss"
</style>