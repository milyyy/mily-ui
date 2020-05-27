<template>
  <div class="button">
    按钮<br>
    <m-button type="primary">主要</m-button> 
    <m-button type="success">成功</m-button>
    <m-button type="warning">警告</m-button>
    <m-button type="danger">危险</m-button>
    <m-button type="info">信息</m-button> <br>
    <m-button type="primary" disabled>主要</m-button>
    <m-button type="success" disabled>成功</m-button>
    <m-button type="warning" disabled>警告</m-button>
    <m-button type="danger" disabled>危险</m-button>
    <m-button type="info" disabled>信息</m-button> <br>
    圆角<br>
    <m-button type="info" size="small" circle>圆</m-button>
    <m-button type="info" size="small" disabled circle>圆</m-button>
    <m-button type="info" round>圆角</m-button>
    <m-button type="info" disabled round>圆角</m-button> <br>
    尺寸<br>
    <m-button @click="handleClick">默认</m-button>  -- | -- 
    <m-button type="primary" size="mini">迷你</m-button>
    <m-button type="success" size="small">小型</m-button>
    <m-button type="warning" size="medium">中等</m-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    handleClick() {
      alert('this is a test')
    }
  }
}
</script>

<style lang="scss" scoped>
  .button {
    padding: 20px;
  }
</style>
