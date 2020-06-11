<template>
  <Fragment>
    <step2
      :isSmile="isSmile"
      :isDetected="faceDetected"
      :videoLoaded="videoLoaded"
      :alreadySmile="alreadySmile"
      v-if="step2Visible && withCamera && !videoLoaded"
    />
    <noStopSmile 
      v-if="step3"
    />
    <div v-bind:class="[{ active: isActive }, 'bfg-wait-load row justify-content-md-center mt-5 mb-5']">
      <div class="col col-md-12 col-lg-8 animate fadeIn">
        <span class="bfg-text-1">Estos son algunos de los <strong>agentes de cambio</strong> de la comunidad, sus sonrisas son de plenitud.</span>
      </div>
    </div>
    <div class="bfg-container-video">
      <div v-bind:class="[{ active: isActive }]">
        <youtube :video-id="videoId" @ready="ready" @playing="playing" :player-vars="{ autoplay:0,  rel: 0, playsinline: 1}"></youtube>
      </div>
    </div>
    <div v-bind:class="[{ active: isActive }, 'bfg-wait-load row justify-content-md-center mt-5']">
      <div class="col col-lg-6">
        <span class="bfg-text-1 bfg-text-light  animate fadeIn fast"> <b>¿Quieres que nos conozcamos más?</b> </span>
      </div>
    </div>
    <div v-bind:class="[{ active: isActive }, 'bfg-wait-load row justify-content-md-center mt-3']">
      <div class="col-10 col-md-10 col-lg-7">
        <span class="bfg-text-2  animate fadeIn fast">Ven a la próxima BeForGet Talk y preséntate a la Comunidad</span>
      </div>
    </div>
    <div v-bind:class="[{ active: isActive }, 'bfg-wait-load row justify-content-md-center mt-5']">
      <div class="col-lg-12">
        <a class="btn btn-primary bfg-primary  animate fadeIn fast" href="https://www.beforget.com/talks">Inscríbete y conócenos</a>
      </div>
    </div>
  </Fragment>
</template>
<script>
import { Fragment } from 'vue-fragment'
import step2 from './step2.vue'
import noStopSmile from './noStopSmile.vue'
export default {
  name: "videoCamp",
  components:{
    step2,
    noStopSmile,
    Fragment
  },
  props:["isPlay", "withCamera", "faceDetected"],
  data() {
    return {
      player: null,
      videoId: 'mutWIjpO23E',
      step2Visible: true,
      step3: false,
      isSmile: false,
      videoReady: false,
      videoLoaded: true,
      isActive: false,
      alreadySmile: false,
      videoDuration: null
    }
  },
  watch:{
    "isPlay"(newValue) {
      // if(this.videoReady){
        if(newValue) {
          this.showAndPlayVideo();        
        }else{
          // this.step3 = true;
          // this.isSmile = false;
          // this.isActive = false;
          // this.pause()
        } 
      // }
    }
  },
  methods: {
    playing(e) {
      this.videoDuration = e.target.getDuration();
      const timeVideo = setInterval(() => {
        if(e.target.getCurrentTime() >= this.videoDuration){
          window.scroll({ top: window.innerHeight, behavior: 'smooth' });
          clearInterval(timeVideo)
        }
      }, 1000);
    },
    ready(e) {
      this.player = e.target
      this.videoLoaded = false;
      this.videoReady = true;
    
    },
    play() {
      this.player.playVideo()
    },
    pause() {
      this.player.pauseVideo()
    },
    async showAndPlayVideo() {
      this.alreadySmile = true;
      const delayShowVideo = () => (new Promise((resolve) => setTimeout(() => {resolve()}, 2500)));
      await delayShowVideo();
      this.play();
      this.isActive = true;
      this.isSmile = true;
      this.step2Visible = false;
      this.step3 = false;
      JEEFACETRANSFERAPI.switch_sleep(true);
    }
  },
  async created() {
    if(!this.withCamera) {
      this.isActive = true
    }
    if(this.isPlay){
      this.videoLoaded = false;
      this.alreadySmile = true;
      await this.showAndPlayVideo(); 
      return
    }else{
      this.videoLoaded = false;
      this.alreadySmile = false;
    }
  },
}
</script>
<style lang="scss">
  .isNotActive{
    opacity: 0;
  }
  .bfg-wait-load{
    opacity: 0;
    &.active{
      opacity: 1;
    }
  }
  .bfg-text-1{
    font-size: 2em;
    font-weight: 100;
    line-height: 34px;
    b{
      font-size: 0.8em;
    }
  }
  .bfg-text-2{
    font-size: 2.3em;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 43px;
    letter-spacing: 0.4px;
    text-align: center;
    color: #5058c9;
  }
  strong{
    font-weight: 300;
  }
  .bfg-container-video{
    position: relative;
    max-width: 723px;
    height: auto;
    margin: 0 auto;
    width: 100%;
    > div{
      opacity: 0;
    }
    .active{
      opacity: 1;
    }
    iframe{
      width: 100%;
    }
  }
  .bfg-smile-modal {
    position: absolute;
    width: 723px;
    height: 360px;
    background: white;
    text-align: center;
    left: 0;
    padding-top: 55px;
    margin: 0 0 0 50%;
    left: -362px;
    z-index: 333;
    span{
      font-size: 2.8em;
    }
  }
  @media (max-width: 768px){
    .bfg-smile-modal{
      width: 100%;
      margin:0;
      left: 0;
      span{
        font-size: 1.8em;
      }
    }
    .bfg-container-video{
      width: 100%;
    }
    .bfg-text-1{
      font-size: 1.2em;
      font-weight: 100;
      line-height: 20px;
    }
    .bfg-text-2{
      font-size: 1.5em;
      line-height: 6px;
    }
    .justify-content-md-center{
      justify-content: center !important;
    }
  }

</style>