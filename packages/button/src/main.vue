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
  <div>
    <button
      class="m-button"
      :disabled="ButtonDisabled || loading"
      :class="[
        type ? 'm-button--' + type: '',
        {
          'is-disabled': ButtonDisabled,
          'is-loading': loading
        }
      ]"
    >
      <!-- 有slot才显示 -->
      <span v-if="$slots.default">
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
      default: ""
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
    circle: Boolean
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
