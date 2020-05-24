<template>
  <div class="test">
    <button @click="add">click me!</button>
    {{num}}
  </div>
</template>

<script>
export default {
  name: "mTest",
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
.test {
  color: red;
}
</style>