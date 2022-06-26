<template>
  <div>
    <NavBar title="真伪鉴别" />
    <img class="logoImg" src="~@/assets/contact/w-logo.png" />
    <ScanCodeInput />
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import ScanCodeInput from '@/components/ScanCodeInput'
export default {
  name: 'Judge',
  components: { NavBar, ScanCodeInput },
  data () {
    return {}
  }
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
</style>
