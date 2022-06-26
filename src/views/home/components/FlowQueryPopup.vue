<template>
  <div class="popup">
    <NavBar :title="'流向查询'" />
    <ScanSearchInput />
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import ScanSearchInput from '@/components/ScanSearchInput'
export default {
  components: { NavBar, ScanSearchInput }
}
</script>
<style lang="less" scoped>
.popup {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: absolute;
  top: 0;
  right: 0;
}
</style>
