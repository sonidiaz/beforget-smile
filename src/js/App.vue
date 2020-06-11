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
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
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
  .btn-primary:not(:disabled):not(.disabled):active,
  .btn-primary.focus, .btn-primary:focus{
    background-color: #5158be;
  }
  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .fast {
    -webkit-animation-duration: 0.4s;
    animation-duration: 0.4s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .fadeIn {
    animation-name: fadeIn;
  }
  @media (min-width: 968px){
    .bfg-container{
     min-height: 500px;
   }
  }
</style>