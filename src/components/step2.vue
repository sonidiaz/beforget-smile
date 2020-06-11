<template>
  <div class="bfg-smile-modal">
      <div class="row justify-content-md-center">
        <div class="col col-lg-12">
          <span v-if="!isSmile && isDetected && !videoLoaded && !alreadySmile" class="bfg-smile-title  animate fadeIn fast">¡Sonríe ahora!</span>
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
  },
  updated() {
    debugger
  },
}
</script>
