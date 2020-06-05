<template>
  <footer class="container-fluid text-center mt-footer-bfg">
    <div class="text-center">
      <img :src="logoFooter" alt="">
    </div>
  </footer>
</template>
<script>
import logoFooter from '../images/logo-bfg-white.png'
export default {
  name: "bfgFooter",
  data() {
    return {
      logoFooter: logoFooter
    }
  }
}
</script>

<style lang="scss">
  footer{
    padding: 109px 0;
    background: #282828;
    &.mt-footer-bfg{
      margin-top: 156px;
    }
  }
</style>