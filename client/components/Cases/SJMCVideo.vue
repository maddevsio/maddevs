<template>
  <div ref="videoContainer" v-show="fullscreenModIsActive">
    <div class="video-wrapper" @click="videoSetState">
      <div class="pause-icon" v-if="showIcon"></div>
      <video class="main-video" loop="true" ref="video">
        <source src="../../assets/video/sjmc/sjmc-modal-video.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <button @click="exitFullscreen" class="exit"></button>
  </div>
</template>

<script>
export default {
  name: 'SJMCVideo',
  mounted() {
    this.$refs.video.onended = () => {
      this.showIcon = true;
    };

    // header sjmc event bus handler 
    this.$nuxt.$on('open-fullscreen', () => {
      this.$refs.videoContainer.requestFullscreen();
      this.fullscreenModIsActive = true;
    });

    // exit fullscreen handler
    document.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement === null) {
        this.fullscreenModIsActive = false;
      }
    });
  },
  methods: {
    exitFullscreen() {
      document.exitFullscreen();
      this.fullscreenModIsActive = false;
    },
    videoSetState() {
      if (this.$refs.video.paused == true) {
        this.$refs.video.play();
        this.showIcon = false;
      } else {
        this.$refs.video.pause();
        this.showIcon = true;
      }
    }
  },
  data() {
    return {
      fullscreenModIsActive: false,
      showIcon: false
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/cases/_icons';

  .main-video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
 
  .exit {
    width: 24px;
    height: 24px;
    border: 0;
    position: absolute;
    top: 52px;
    right: 52px;
    background-color: transparent;
    cursor: pointer;
    @include close-icon;
  }

  .pause-icon {
    width: 120px;
    height: 120px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @include play-button-white;
    z-index: 1;
  }
</style>
