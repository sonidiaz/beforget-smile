<template>
  <header class="container text-center bfg-my-5">
    <a href="https://www.beforget.com/talks">
      <img :src="this.urlLogo" alt="">
    </a>
  </header>
</template>

<script>
import logo from '../images/logo-bfgcommunity-lila.png'
export default {
  name: "headerApp",
  data() {
    return {
      urlLogo: logo
    }
  }
}
</script>
<style lang="scss">
  .bfg-my-5{
    margin-top: 60px;
    margin-bottom: 80px;
  }
  header {
    a{
      img{
        position: relative;
        left: 15px;
        width: 31%;
      }
    }
  }
  @media (max-width: 768px) {
    header {
      a{
        img{
          position: relative;
          left: 15px;
          width: 79%;
        }
      }
    }
    .bfg-my-5{
      margin-top: 60px;
      margin-bottom: 60px;
    }
  }
</style>
