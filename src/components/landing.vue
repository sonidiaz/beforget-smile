<template>
  <div class="container text-center bfg-container">
    <step1 
      v-on:activeCamara="activeCamaraEvent"
      v-on:goToVideo="displayVideoInit"
      :loadinCamera="loading"
      v-if="step1"
    />
    <div v-if="loading" class="container mt-5">
      <div class="justify-content-md-cente">
        <PulseLoader
        :color="colorLoaer"
        />
      </div>
    </div>
    <errorCamara
      :accessCamera="isAccessCameraToProps"
      v-on:initVideo="displayVideoInit"
      v-if="isRemember"
     />
    <canvas class='jeefacetransferCanvas' id='jeefacetransferCanvas'></canvas>
    <videoCamp
      v-if="displayVideo"
      :withCamera="isWithCamera"
      :isPlay="isPlaying"
      :faceDetected="isFaceDetected"
    />
  </div>
</template>

<script>

import {isMobile} from '../helpers/mobileDetect.js'
import JEEFACETRANSFERAPI from '../jeeliz/jeelizFaceTransferES6';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import bfgJeelizHelper from '../jeeliz/bfgJeelizHelper';
import videoCamp from './videoCamp.vue';
import step1 from './step1.vue'
import errorCamara from './errorCamara.vue'

export default {
  name: "landing",
  components:{
    step1,
    errorCamara,
    videoCamp,
    PulseLoader
  },
  props:["dataSlime"],
  data() {
    return {
      smile: false,
      step1: true,
      isRemember: false,
      displayVideo: false,
      isFaceDetected: false,
      isAccessCameraToProps: true,
      isPlaying: false,
      isWithCamera: false,
      colorLoaer: '#676edd',
      loading: false
    }
  },
  watch: {
    '$smile'(newValue) {
      if(newValue){
        this.isPlaying = true;
      }else{
        this.isPlaying = false;
        this.isSmile = false;
      }
    },
    '$faceDetected'(newValue) {
      this.isFaceDetected = true;
      this.step1 = false;
      this.isRemember = false;
      this.isWithCamera = true;
      this.loading = false;
      this.displayVideoInit()
    },
    '$videoInit'(newValue) {
      // react to Change in width
      // this.step1 = false;
      // this.isRemember = false;
      // this.displayVideoInit()
      // this.isWithCamera = true;
      // console.log('Video iniciado....', newValue)
    },
    '$isAccessCamera'(newValue) {
      if(!newValue){
        this.loading = false;
        this.isAccessCameraToProps = false
        this.step1 = false;
        this.isRemember = true;
      }
      
    }
  },
  methods:{
    activeCamaraEvent() {
      this.initVideoSmile()
    },
    displayVideoInit() {
      this.displayVideo = true;
      this.step1 = false;
      this.isRemember = false;
    },
    initVideoSmile() {

      this.loading = true;
      JEEFACETRANSFERAPI.onWebcamGet((e) => {
        console.log('Damos permiso a la camara')
        
      })
      JEEFACETRANSFERAPI.onWebcamAsk((e) => {
          // this.step1 = false;
          // this.isRemember = true;
          console.log('Preguntamos por la camara')
      })
      bfgJeelizHelper.init({
        canvasId: 'jeefacetransferCanvas',
        NNCpath: './',
        hysteresis: 0.1, //bonus score for already selected expression. Against flickering
        isMirror: true,

        expressions: [ //list of uncorrelated expressions (for example the mouth is uncorrelated with the right eye)
          { 
            svgSmile: function (ks) {
              return (ks.smileRight + ks.smileLeft);
            }
          }
        ]

      });
    }
  },
  mounted() {
    if(isMobile.any()) {
      Vue.set(Vue.prototype, '$mobileDetected', true);
    }
    // const pregutanVideo = setInterval(() => {
    //   if(bfgJeelizHelper.smileShow){
    //     console.log('activaVideo');
    //     // this.play()
    //     clearInterval(pregutanVIdeo)
    //   };
    // }, 1000);

  }
}
</script>


<style lang="scss">
 
  .bfg-smile-title {
      font-family: "Roboto";
      font-size: 2.8em;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.31;
      letter-spacing: 0.88px;
      text-align: center;
      color: #000000;
    }
    .activa-tu-webcam-par{
        position: relative;
        display: inline-block;
        max-width: 565px;
        font-family:'Roboto';
        font-size: 1.6em;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: 0.51px;
        text-align: center;
        color: #000000;
    }
    .bfg-primary{
      position: relative;
      background: #676edd;
      border: #676edd;
      font-weight: 500;
      line-height: 1.08;
      width: 310px;
      padding: 17px 0;
      font-size: 1.2em;
      &:after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 54px;
        background: #454cbc42;
        transition: all 500ms ease;
      }
      &:hover{
        background: #676edd;
        border: #676edd;
        &:after{
          width: 100%;
          transition: all 500ms ease;
        }
      }
    }
    .bfg-secundary{
      position: relative;
      color: #676edd;
      background-color: #fff;
      border:solid 1px #676edd;
      font-weight: 500;
      line-height: 1.08;
      width: 310px;
      padding: 17px 0;
      font-size: 1.2em;
      &:after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 54px;
        background: #454cbc42;
        transition: all 500ms ease;
      }
      &:hover{
        color: #676edd;
        background-color: #fff;
        border:solid 1px #676edd;
        border: solid 1px #676edd;
        &:after{
          width: 100%;
          transition: all 500ms ease;
        }
      }
    }
    @media (max-width: 768px) { 
      .bfg-smile-title {
        font-size: 1.8em;
      }
      .activa-tu-webcam-par{
        font-size: 1.2em;
      }
    }
</style>