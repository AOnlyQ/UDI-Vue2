<template>
  <div class="user">
    <NavBar title="我的" />

    <!-- <van-nav-bar title="我的" left-arrow /> -->
    <div class="avatar"></div>
    <div class="username">Kristen</div>
    <div class="m-uMenu">
      <div class="m-uMenu-item item-border">
        <!-- <div class="mod1 flex-row"> -->
        <img class="item-icon" src="~@/assets/user/lock.png" />
        <span class="item-desc">修改密码</span>
        <img class="icon-r" src="~@/assets/user/right.png" />
        <!-- </div> -->
      </div>
      <div class="m-uMenu-item item-border">
        <img class="item-icon" src="~@/assets/user/add-user.png" />
        <span class="item-desc">添加客户</span>
        <img class="icon-r" src="~@/assets/user/right.png" />
      </div>
      <div class="m-uMenu-item">
        <img class="item-icon" src="~@/assets/user/exit.png" />
        <span class="item-desc">退出登录</span>
        <img class="icon-r" src="~@/assets/user/right.png" />
      </div>
    </div>
    <div class="tabbar">
      <div class="tabbar-item" @click="handleTabClick">
        <img class="tabbar-item-icon" src="~@/assets/index/home-inactive.png" />
        <span class="tabbar-item-title">首页</span>
      </div>
      <div class="tabbar-item">
        <img class="tabbar-item-icon" src="~@/assets/index/my-active.png" />
        <span class="tabbar-item-title tabbar-item-title-active">我的</span>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
export default {
  components: { NavBar },
  methods: {
    handleTabClick () {
      this.$router.push('/home')
    }
  }
}
</script>
<style lang="less" scoped>
.van-nav-bar {
  height: 0.44rem;
  font-weight: 600;
}

.avatar {
  width: 0.64rem;
  height: 0.64rem;
  border: 2px solid rgba(255, 255, 255, 1);
  border-radius: 50%;
  background: url('~@/assets/user/avatar.png') -0.01rem -0.01rem no-repeat;
  margin: 0.29rem 0 0 1.55rem;
}
.username {
  height: 0.22rem;
  line-height: 0.22rem;
  text-align: center;
  font-size: 0.16rem;
  margin-top: 0.1rem;
  //  0 0 159px;
}
.m-uMenu {
  height: 2.16rem;
  border-radius: 0.15rem;
  margin: 0.24rem 0.2rem;
  background-color: rgba(255, 255, 255, 1);
  overflow: hidden;
  .m-uMenu-item {
    height: 72px;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .item-icon {
      width: 0.36rem;
      height: 0.36rem;
    }
    .item-desc {
      width: 0.56rem;
      height: 0.2rem;
      display: block;
      overflow-wrap: break-word;
      color: rgba(51, 51, 51, 1);
      font-size: 0.14rem;
      font-family: PingFangSC-Medium;
      white-space: nowrap;
      line-height: 0.2rem;
      text-align: left;
      margin: 0.08rem 0 0 0.12rem;
    }
    .icon-r {
      width: 0.16rem;
      height: 0.16rem;
      margin: 0.1rem 0 0 1.75rem;
    }
  }
  .item-border {
    border-bottom: 1px solid #ccc;
  }
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
