<template>
  <div class="index">
    <router-view></router-view>
    <AppTabbar />
  </div>
</template>
<script>
import AppTabbar from '@/components/AppTabbar'
export default {
  components: {
    AppTabbar
  }
}
</script>
