<template>
  <div
    class="homeItem"
    ref="homtItemRef"
    @click="handleClick"
    :style="setBgColor(homeItemData.background)"
  >
    <div class="title">{{ homeItemData.title }}</div>
    <div class="description">{{ homeItemData.description }}</div>
    <div class="btnIcon">
      <img class="leftIcon" :src="homeItemData.leftIcon" />
      <img class="rightIcon" :src="homeItemData.rightIcon" />
    </div>
  </div>
</template>
<script>
export default {
  props: ['homeItemData'],
  data () {
    return {}
  },
  methods: {
    setBgColor (bg) {
      return {
        background: 'url(' + bg + ')  100% no-repeat '
      }
    },
    handleClick () {
      console.log(this.homeItemData)
      this.$router.push(this.homeItemData.path)
    }
  },
  mounted () {}
}
</script>
<style lang="less" scoped>
.homeItem {
  height: 2.21rem;
  width: 1.62rem;
  margin: 0 0.11rem 0.12rem 0;
  .title {
    width: 0.48rem;
    height: 0.18rem;
    line-height: 0.18rem;
    margin: 0.23rem 0 0 0.2rem;
    color: #999;
    font-size: 0.12rem;
  }
  .description {
    width: 1.08rem;
    height: 0.48rem;
    margin: 0.08rem 0 0 0.2rem;
    font-size: 0.18rem;
    line-height: 0.24rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .btnIcon {
    display: flex;
    justify-content: space-between;
    width: 1.28rem;
    height: 0.52rem;
    margin: 0.42rem 0 0.3rem 0.2rem;
    .leftIcon {
      width: 0.52rem;
      height: 0.52rem;
    }

    .rightIcon {
      width: 0.15rem;
      height: 0.15rem;
      margin-top: 0.33rem;
    }
  }
}
</style>
