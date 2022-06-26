<template>
  <div class="contact-container">
    <NavBar title="联系我们" />
    <div class="contactDesc">
      <span class="contact-head">联系我们</span>
      <div class="contact-body">
        <div class="contact-body-item contact-item-border">
          <span class="contact-body-title">合作热线</span>
          <span class="contact-body-phone">400-689-2896</span>
        </div>
        <div class="contact-body-item">
          <span class="contact-body-title">质量热线</span>
          <span class="contact-body-phone">400-689-2896</span>
        </div>
      </div>
    </div>
    <div class="brands">
      <span class="brand-head">旗下品牌</span>
      <div class="brand-body">
        <span class="brand-body-title">稳健医疗：Winner</span>
        <img class="brand-img" src="~@/assets/contact/w-logo.png" />
      </div>
      <div class="brand-body">
        <span class="brand-body-title">全棉时代：Purcotton</span>
        <img class="brand-img" src="~@/assets/contact/q-logo.png" />
      </div>
      <div class="brand-body">
        <span class="brand-body-title">津梁生活：PureH2B</span>
        <img class="brand-img" src="~@/assets/contact/j-logo.png" />
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
export default {
  components: { NavBar }
}
</script>
<style lang="less" scoped>
.contactDesc {
  margin: 0.2rem 0.2rem 0;
  .contact-head {
    display: block;
    height: 0.28rem;
    line-height: 0.28rem;
    font-size: 0.2rem;
    margin-bottom: 0.19rem;
  }
  .contact-body {
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 1);
    .contact-body-item {
      height: 0.6rem;
      margin: 0 0.16rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .contact-item-border {
      border-bottom: 1px solid #ccc;
    }
    .contact-body-title {
      color: rgba(153, 153, 153, 1);
      font-size: 0.12rem;
    }
    .contact-body-phone {
      font-size: 0.14rem;
    }
  }
}
.brands {
  margin: 0.2rem 0.2rem 0;
  .brand-head {
    display: block;
    height: 0.28rem;
    line-height: 0.28rem;
    font-size: 0.2rem;
    margin-bottom: 0.19rem;
  }
  .brand-body {
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 1);
    height: 0.72rem;
    padding: 0 0.16rem;
    margin-bottom: 0.08rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.brand-body-title {
  font-size: 0.14rem;
}

.brand-img {
  width: 0.9rem;
  height: 0.35rem;
}
</style>
