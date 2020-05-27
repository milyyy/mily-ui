<!--
 * @Author: milyyy
 * @Description: button设计
 * 通用样式
 * 条件样式组合[type,size,{disabled,isloading,plain,round,circle}]
 * 事件 $emit,传递事件源
 * 是否禁用
 * 是否获取焦点，focus提示用户
 * 类型 button,submit,reset
 * loading以及图标
 * 插槽
--> 
<template>
  <button
    class="m-button"
    :disabled="ButtonDisabled || loading"
    :type="nativeType"
    :autofocus="autofocus"
    @click="handleClick"
    :class="[
      type ? 'm-button--' + type: '',
      size ? 'm-button--' + size: '',
      {
        'is-disabled': ButtonDisabled,
        'is-loading': loading,
        'is-round': round,
        'is-circle': circle
      }
    ]"
  >
    <!-- 有slot才显示 loading暂未设计 -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "MButton",
  props: {
    type: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "small"
    },
    nativeType: { // 原生button的type属性，值为button, submit或rest
      type: String,
      default: 'button'
    },
    disabled: {  // 为true时，既可以设置disabled为true，又可以加载禁用时的样式
      type: Boolean,
      default: false
    },
    loading: {  // loading为true时，既可以设置disabled为true，又可以加载loading图标
      type: Boolean,
      default: false
    }, 
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    autofocus: Boolean
  },
  computed: {
    ButtonDisabled() {
      return this.disabled
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
