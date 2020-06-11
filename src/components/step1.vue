<template>
  <Fragment>
      <div class="row justify-content-md-center">
        <div class="col col-md-12 col-lg-8">
          <span v-if="!loadinCamera" class="bfg-smile-title  animate fadeIn fast">Las relaciones sostenibles
empiezan con una sonrisa :)</span>
          <p v-if="loadinCamera" class="bfg-smile-title text-activate-camara animate fadeIn fast ">  <b> Activando cámara…</b></p>
          <span v-if="loadinCamera" class="bfg-smile-title  animate fadeIn fast ">Prepara tu mejor sonrisa</span>
        </div>
      </div>
      <div v-if="isVisibleButton" class="row justify-content-md-center my-6 animate fadeIn fast">
        <div class="col col-sm-12">
          <span class="activa-tu-webcam-par">Activa tu cámara, <b>sonríe</b>  y recibe la bienvenida de la Comunidad </span>
        </div>
      </div>
      <div v-if="isVisibleButton" class="row justify-content-md-center mt-lg-5">
        <div class="col-lg-12">
          <button class="btn btn-primary bfg-primary  animate fadeIn fast" v-on:click="activeCamara">Activa tu cámara</button>
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
    margin-top: 4rem !important;
    margin-bottom: 4rem !important;
  }
  .text-activate-camara{
    font-size: 1.6em !important;
  }
  @media (max-width: 768px) {
    .my-6{
      margin-bottom: 2rem !important;
      margin-top: 3rem !important;
    }
    
  }
</style>