<template>
  <Fragment>
      <div class="row justify-content-md-center">
        <div class="col col-md-12 col-lg-9">
          <span v-if="!loadinCamera" class="bfg-smile-title  animate fadeIn fast">Las relaciones sostenibles comienzan con una sonrisa :)</span>
          <span v-if="loadinCamera" class="bfg-smile-title  animate fadeIn fast">¿Sabías que la sonrisas se contagian?</span>
        </div>
      </div>
      <div v-if="isVisibleButton" class="row justify-content-md-center my-6 animate fadeIn fast">
        <div class="col col-sm-12">
          <span class="activa-tu-webcam-par">Activa tu webcam para capturar tu sonrisa y conoce más de BeForGet Community</span>
        </div>
      </div>
      <div v-if="isVisibleButton" class="row justify-content-md-center mt-lg-5">
        <div class="col-lg-12">
          <button class="btn btn-primary bfg-primary  animate fadeIn fast" v-on:click="activeCamara">Activa tu webcam</button>
        </div>
        <div class="col-lg-12 mt-4">
          <button  class="btn btn-primary bfg-secundary  animate fadeIn fast" v-on:click="goToVideo">Ups! No tengo cámara</button>
        </div>
      </div>
  </Fragment>
</template>
<script>
import { Fragment } from 'vue-fragment'
export default {
  name: "step1",
  props:["loadinCamera"],
  components:{
    Fragment
  },
  data() {
    return{
      isVisibleButton: true
    }
  },
  computed: {
    getLoading() {
      return this.loading
    }
  },
  methods: {
    activeCamara () {
      this.isVisibleButton = false;
      this.$emit('activeCamara')
    },
    goToVideo() {
      this.$emit('goToVideo')
    }
  }
}
</script>
<style lang="scss">
  .my-6{
    margin-bottom: 5rem !important;
    margin-top: 6rem !important;
  }
  @media (max-width: 768px) {
    .my-6{
      margin-bottom: 2rem !important;
      margin-top: 3rem !important;
    }
    
  }
</style>