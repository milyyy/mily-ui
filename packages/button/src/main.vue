<template>
  <div>
    <button
      class="m-button"
      :class="[
        type ? 'm-button--' + type : '',
        buttonSize ? 'm-button--' + buttonSize : '',
      ]"
      @click="handleClick">
      <span>
        <slot></slot>
      </span>
    </button>
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
.mc-button {
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
</style>