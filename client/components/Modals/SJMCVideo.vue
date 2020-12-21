<template>
  <modal :classes="['video_container']" name="SJMCVideo" ref="videoWrap">
    <div class="video-wrapper" @click="videoSetState">
      <div class="pause-icon" v-if="showIcon"></div>
      <video class="main-video" loop="true" ref="video" autoplay="true">
        <source src="../../assets/video/sjmc/sjmc-modal-video.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <button @click="closeModal" class="close-modal"></button>
  </modal>
</template>

<script>
export default {
  name: 'SJMCVideo',
  methods: {
    closeModal() {
      this.$modal.hide('SJMCVideo');
      document.body.style.overflowY = 'scroll';
      this.showIcon = false;
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
      showIcon: false
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/cases/_icons';

  /deep/ .video_container {
    width: 100% !important;
    height: 100vh !important;
    position: unset;
    border-radius: 0;
  }

  .main-video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
 
  .close-modal {
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
