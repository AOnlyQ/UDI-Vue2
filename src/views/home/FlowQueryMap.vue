<template>
  <div class="map-container">
    <div class="map-wrap">
      <MapContainer></MapContainer>
    </div>
  </div>
</template>
<script>
import MapContainer from '@/components/MapContainer'
export default {
  components: { MapContainer }
}
</script>
<style lang="less" scoped>
.map-container {
  height: 100vh;
  width: 100%;
  position: relative;
  .map-wrap {
    height: 80%;
    width: 100%;
  }
}
</style>
