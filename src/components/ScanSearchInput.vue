<template>
  <div class="field">
    <img src="~@/assets/Icon/search.png" alt="" class="left-icon" />
    <input placeholder="| 请扫描或输入UDI" />
    <img src="~@/assets/Icon/bell.png" alt="" class="right-icon" />
    <button class="search-btn" @click="$router.push('/flowquerymap')">
      搜索
    </button>
  </div>
</template>
<script>
export default {
  methods: {}
}
</script>
<style lang="less" scoped>
.field {
  margin-top: 0.4rem;
  display: flex;
  align-items: center;
  position: relative;
  input {
    border: 1px solid rgba(223, 223, 223, 1);
    width: 3.35rem;
    height: 0.4rem;
    background: rgba(249, 250, 251, 1);
    border-radius: 0.2rem;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 0 0.4rem;
    box-sizing: border-box;
  }
  .left-icon {
    z-index: 999;
    position: absolute;
    left: 0.35rem;
  }
  .right-icon {
    z-index: 999;
    position: absolute;
    right: 0.85rem;
  }
  .search-btn {
    z-index: 999;
    position: absolute;
    color: white;
    background-color: #0fbda6;
    right: 0.35rem;
    border-radius: 1rem;
  }
}
</style>
