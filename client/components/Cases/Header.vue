<template>
  <section class="case_header">
    <video class="case_main-video" loop="true" muted="true" autoplay="true">
      <source src="../../assets/img/Cases/nambafood/video/main.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="case_logotype nambafood"></div>
    <h1 class="case_title">Namba Food <br> Top Delivery Service <br class="case_text-break"> in <br class="case_text-break-mobile"> Central Asia</h1>
    <button type="button" class="case_more__button">Read our case studies ↓</button>
  </section>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped lang="scss">
@import "../../assets/styles/cases/header";
@import "../../assets/styles/cases/mixins";

.case {
  &_main-video {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    object-fit: cover;

    &::-webkit-media-controls-panel {
      display: none!important;
      -webkit-appearance: none;
    }

    &::-webkit-media-controls-play-button {
      display: none!important;
      -webkit-appearance: none;
    }


    &::-webkit-media-controls-start-playback-button {
      display: none!important;
      -webkit-appearance: none;
    }
  }

  &_header {
    height: 100vh;
    min-height: 568px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    &:before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-image: url("../../assets/img/Cases/nambafood/jpg/blank.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      z-index: -1;
    }

    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, .2);
    }
  }

  &_logotype {
    @include nambafood-header;
    width: 127px;
    height: 114px;
    margin-bottom: 54px;
    z-index: 1;
  }

  &_title {
    @include title($text-color--white, 51.88px, -2px);
    text-align: center;
    z-index: 1;
  }

  &_more__button {
    position: absolute;
    bottom: 0;
    max-width: 1104px;
    height: 55px;
    width: 100%;
    background-color: $bgcolor--pink;
    border: 0;
    z-index: 1;
    cursor: pointer;

    @include default_text($text-color--white, 18px, 30px, -0.035em, normal);
  }

  &_text-break-mobile {
    display: none;
  }

  @media screen and (max-width: 768px) {
    &_title {
      @include title($text-color--white, 35px, -1px);
    }

    &_more__button {
      @include default_text($text-color--white, 16px, 150%, -0.02em, normal);
    }

    &_logotype {
      width: 103.51px;
      height: 92.75px;
      margin-bottom: 46px;
    }
  }

  @media screen and (max-width: 440px) {
    &_title {
      max-width: 290px;
    }

    &_text-break {
      display: none;
    }

    &_text-break-mobile {
      display: block;
    }
  }
}
</style>
