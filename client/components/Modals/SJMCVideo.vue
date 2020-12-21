<template>
  <modal :classes="['video_container']" name="SJMCVideo">
    <video class="main-video" loop="true" autoplay="true">
      <source src="../../assets/video/sjmc/sjmc-modal-video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
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
    }
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
    width: 35px;
    height: 35px;
    border: 0;
    position: absolute;
    top: 52px;
    right: 52px;
    background-color: transparent;
    cursor: pointer;
    @include close-icon;
  }
</style>
