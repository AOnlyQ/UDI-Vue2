<template>
  <div class="home">
    <NavBar :title="'首页'" />
    <div class="welcome">
      <div class="welcome-detail">
        <span class="descrip">欢迎使用稳健医疗产品</span>
        <span class="time">{{ currentDate | dateFormat }}</span>
      </div>
      <img
        class="welcomeImg"
        referrerpolicy="no-referrer"
        src="@/assets/home/logo.png"
      />
    </div>
    <div class="homeItems">
      <HomeItem v-for="item in homeItems" :key="item.id" :homeItemData="item" />
    </div>
    <span class="copyright">由Win+Platform提供技术支持</span>
    <div class="tabbar">
      <div class="tabbar-item">
        <img class="tabbar-item-icon" src="~@/assets/index/home-active.png" />
        <span class="tabbar-item-title tabbar-item-title-active">首页</span>
      </div>
      <div class="tabbar-item" @click="handleTabClick">
        <img class="tabbar-item-icon" src="~@/assets/index/my.png" />
        <span class="tabbar-item-title">我的</span>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import HomeItem from '@/components/HomeItem'
export default {
  name: 'Home',
  components: { NavBar, HomeItem },
  data () {
    return {
      currentDate: new Date(),
      homeItems: [
        {
          id: 0,
          title: '真伪鉴别',
          path: '/judge',
          description: '方便查询稳健产品',
          background: require('@/assets/home/bg-g.png'),
          leftIcon: require('@/assets/home/judge.png'),
          rightIcon: require('@/assets/home/doubleright-g.png')
        },
        {
          id: 1,
          title: '流向查询',
          path: '/flowquery',
          description: '实时查询商品流向',
          background: require('@/assets/home/bg-p.png'),
          leftIcon: require('@/assets/home/location.png'),
          rightIcon: require('@/assets/home/doubleright-p.png')
        },
        {
          id: 2,
          title: '商品入口',
          path: '/category',
          description: '一键直达稳健官方商城',
          background: require('@/assets/home/bg-y.png'),
          leftIcon: require('@/assets/home/category.png'),
          rightIcon: require('@/assets/home/doubleright-y.png')
        },
        {
          id: 3,
          title: '联系我们',
          path: 'contact',
          description: '合作热线、质量热线',
          background: require('@/assets/home/bg-b.png'),
          leftIcon: require('@/assets/home/phone.png'),
          rightIcon: require('@/assets/home/doubleright-b.png')
        }
      ]
    }
  },
  mounted () {
    const _this = this
    this.timer = setInterval(() => {
      _this.currentDate = new Date()
    }, 1000)
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  methods: {
    handleTabClick () {
      this.$router.push('/user')
    }
  }
}
</script>
<style lang="less" scoped>
.van-nav-bar {
  height: 0.44rem;
  font-weight: 600;
}
.welcome {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  height: 0.72rem;
  width: 3.35rem;
  border-radius: 0.15rem;
  background-color: rgba(255, 255, 255, 1);
  width: 3.35rem;
  margin: 0.11rem 0.2rem;
  padding: 0.14rem 0.2rem;
  .welcome-detail {
    width: 1.4rem;
    height: 0.44rem;
    .descrip {
      width: 1.4rem;
      height: 0.24rem;
      color: rgba(51, 51, 51, 1);
      font-size: 0.14rem;
      line-height: 0.24rem;
    }

    .time {
      width: 0.7rem;
      height: 0.2rem;
      color: rgba(102, 102, 102, 1);
      font-size: 0.12rem;
    }
  }
  .welcomeImg {
    width: 0.9rem;
    height: 0.35rem;
    margin-top: 0.03rem;
  }
}
.homeItems {
  width: 3.46rem;
  height: 4.54rem;
  display: flex;
  flex-wrap: wrap;
  margin: 0.12rem 0 0 0.2rem;
}
.copyright {
  width: 1.34rem;
  height: 0.14rem;
  display: block;
  color: rgba(191, 191, 191, 1);
  font-size: 0.1rem;
  white-space: nowrap;
  line-height: 0.14rem;
  text-align: center;
  margin: 0.24rem 0 0 1.21rem;
}
.tabbar {
  position: fixed;
  bottom: 0;
  height: 0.52rem;
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: inset 0px 1px 0px 0px rgba(245, 245, 245, 1);
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 0 0.95rem;
  .tabbar-item {
    width: 0.28rem;
    .tabbar-item-icon {
      height: 0.28rem;
      margin-top: 0.05rem;
    }
    .tabbar-item-title {
      width: 0.28rem;
      height: 0.14rem;
      display: block;

      font-size: 0.1rem;
      white-space: nowrap;
      line-height: 0.14rem;
      text-align: center;
    }
    .tabbar-item-title-active {
      color: rgba(15, 189, 166, 1);
    }
  }
}
</style>
