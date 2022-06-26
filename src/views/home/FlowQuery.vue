<template>
  <div>
    <NavBar :title="'流向查询'" />
    <img class="logoImg" src="~@/assets/contact/w-logo.png" />
    <ScanCodeInput />
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import ScanCodeInput from '@/components/ScanCodeInput'
export default {
  components: { NavBar, ScanCodeInput },
  methods: {}
}
</script>
<style lang="less" scoped>
.logoImg {
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 1.31rem;
  width: 1.2rem;
  height: 0.46rem;
}
.slide-enter {
  right: -100%;
}
.slide-enter-active {
  transition: all 0.2s;
}
.slide-enter-to {
  right: 0;
}
</style>
