import Vue from 'vue';
import VueYouTubeEmbed from 'vue-youtube-embed'
import App from './App.vue'

Vue.use(VueYouTubeEmbed, { global: true, componentId: "youtube" })

const smile = Vue.observable({ smile: false });
const faceDetected = Vue.observable({ faceDetected: false });
const videoInit = Vue.observable({ videoInit: false });
const isAccessCamera = Vue.observable({ isAccessCamera: true });
const mobileDetected = Vue.observable({ mobileDetected: false });

Object.defineProperty(Vue.prototype, '$smile', {
  get() { return smile.smile; },
  set(value) { smile.smile = value; }
});
Object.defineProperty(Vue.prototype, '$faceDetected', {
  get() { return faceDetected.faceDetected; },
  set(value) { faceDetected.faceDetected = value; }
});
Object.defineProperty(Vue.prototype, '$videoInit', {
  get() { return videoInit.videoInit; },
  set(value) { videoInit.videoInit = value; }
});
Object.defineProperty(Vue.prototype, '$isAccessCamera', {
  get() { return isAccessCamera.isAccessCamera; },
  set(value) { isAccessCamera.isAccessCamera = value; }
});
Object.defineProperty(Vue.prototype, '$mobileDetected', {
  get() { return mobileDetected.mobileDetected; },
  set(value) { mobileDetected.mobileDetected = value; }
});



new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.config.devtools = false