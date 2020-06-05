<template>
  <div>
      <div class="row justify-content-md-center">
        <div class="col col-lg-9">
          <span v-if="!accessCamera" class="Toda-relacin-prspe bfg-text-small">ops! que pena, hay un problema con tu webcam <br> No importa, igual puedes disfrutar de nuestro video</span>
        </div>
      </div>
      <div class="row justify-content-md-center mt-5">
        <div class="col-lg-12 mt-4">
          <button v-if="!accessCamera" v-on:click="initVideo" class="btn btn-primary bfg-secundary">Ver video</button>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "errorCamara",
  props:["accessCamera"],
  methods: {
    initVideo() {
      this.$emit('initVideo')
    }
  },
}
</script>
<style lang="scss">
  .bfg-text-small{
    font-size: 1.4em !important;
  }
</style>