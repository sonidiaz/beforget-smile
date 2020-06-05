<template>
  <div class="bfg-smile-modal">
      <div class="row justify-content-md-center">
        <div class="col col-lg-12">
          <span class="Toda-relacin-prspe ">No dejes de Sonreir!</span>
        </div>
      </div>
      <div class="row justify-content-md-center mt-5">
        <img :src="iconoSaid" alt="">
      </div>
  </div>
</template>
<script>
import iconoBfgsaid from '../images/Sad_bfg.png'
export default {
  name: "noStopSmile",
  data () {
    return {
      iconoSaid: iconoBfgsaid
    }
  }
}
</script>