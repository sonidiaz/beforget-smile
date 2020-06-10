<template>
  <div class="bfg-smile-modal">
      <div class="row justify-content-md-center">
        <div class="col col-lg-12">
          <span v-if="!isDetected && !videoLoaded && !alreadySmile" class="bfg-smile-title  animate fadeIn fast">Espera un momento por favor....</span>
          <!-- <span v-if="isSmile" class="bfg-smile-title ">wow, ¡bonita sonrisa! :)</span> -->
          <span v-if="!isSmile && isDetected && !videoLoaded && !alreadySmile" class="bfg-smile-title  animate fadeIn fast">Estamos enfocando...
¡sonríe ahora!</span>
          <span v-if="alreadySmile" class="bfg-smile-title animate fadeIn fast" >WOW, ¡bonita sonrisa!</span>
        </div>
      </div>
      <div v-if="isDetected" class="row justify-content-md-center mt-5">
        <img :src="icono" alt="">
      </div>
  </div>
</template>
<script>
import iconoBfg from '../images/Smile_bfg.png'
export default {
  name: "step2",
  props:["isSmile", "isDetected","videoLoaded","alreadySmile"],
  data () {
    return {
      icono: iconoBfg
    }
  }
}
</script>
