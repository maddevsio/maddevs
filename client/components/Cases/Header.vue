<template>
  <section class="case_header">
    <video class="case_main-video" loop="true" muted="true" autoplay>
      <source src="../../assets/img/Cases/nambafood/video/main.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="case_logotype nambafood"></div>
    <h1 class="case_title">Namba Food <br> Top 1 Delivery Service <br> in Central Asia</h1>
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
  }

  &_header {
    height: 100vh;
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
}
</style>
