<template>
  <Fragment>
    <div class="bfg-wrapper">
      <NavHeader/>
      <landing/>
    </div>
    <bfgFooter/>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import bootrap from '../css/bootstrap.min.css';
import landing from '../components/landing.vue';
import NavHeader from '../components/header.vue';
import bfgFooter from '../components/footer.vue';
export default {
  name: "app",
  components:{
    landing,
    NavHeader,
    bfgFooter,
    Fragment
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;1,400&display=swap');
  .jeefacetransferCanvas{
    position: absolute;
    height: 0;
    overflow: hidden;
  }
  .bfg-wrapper {
    position: relative;
    width: 100%;
    height: auto;
  }
  @media (min-width: 968px){
    .bfg-container{
     min-height: 500px;
   }
  }
</style>