<template>
  <div class="navbar">
    <img
      class="arrow-left-icon"
      src="~@/assets/index/arrow-left.png"
      @click="backLastPage"
    />
    <span class="title">{{ title }}</span>
  </div>
</template>
<script>
export default {
  props: ['title'],
  methods: {
    backLastPage () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
.navbar {
  height: 0.46rem;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  position: relative;
  .arrow-left-icon {
    width: 0.4rem;
    height: 0.44rem;
  }
  .title {
    height: 0.24rem;
    line-height: 0.24rem;
    color: rgba(0, 0, 0, 0.9);
    font-size: 0.17rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
