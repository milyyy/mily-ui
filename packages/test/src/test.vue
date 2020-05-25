<template>
  <div class="test">
    <button @click="add">click me!</button>
    {{num}}
  </div>
</template>

<script>
export default {
  name: "MTest",
  data() {
    return {
      num: 0
    }
  },
  methods: {
    add() {
      this.num++;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../theme-chalk/src/test"
</style>