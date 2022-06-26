<template>
  <div class="field">
    <input placeholder="请扫描或输入UDI" @click="handleClick" />
    <img src="~@/assets/Icon/bell.png" alt="" class="right-icon" />
  </div>
</template>
<script>
export default {
  methods: {
    handleClick () {
      console.log('Test')
      this.$router.push('/flowquery/flowqueryPopup')
    }
  }
}
</script>
<style lang="less" scoped>
.field {
  margin-top: 0.4rem;
  display: flex;
  align-items: center;
  input {
    height: 0.5rem;
    border-radius: 0.15rem;
    border: 1px solid rgba(223, 223, 223, 1);
    background-color: rgba(235, 238, 242, 1);
    width: 3.15rem;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 0 0.2rem;
    box-sizing: border-box;
  }
  .right-icon {
    position: relative;
    right: 0.1rem;
  }
}
</style>
