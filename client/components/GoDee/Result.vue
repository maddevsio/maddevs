<template>
  <section id="result" class="result">
    <div class="container-godee">
      <div class="result__container">
        <div class="result__head-text">
          <h3 class="result__main-title">Result</h3>
          <p class="result__description">Exciting project to improve people’s daily life and reduce environmental pollution. <br> Regular commutes with affordable and stress-free service.</p>
        </div>
        <div class="result__video-frame-wrapper">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_XCRbXmTUwI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <img src="@/assets/img/GoDee/svg/result-route-line.svg" class="result__route-line" alt="Result route line">
    </div>
  </section>
</template>

<script>
export default {
  name: 'Result'
};
</script>

<style lang="scss">
  @import '../../assets/styles/vars';
  @import '../../assets/styles/get-vw';

  .result {
    position: relative;
    margin-top: get-vw(325px);
    margin-bottom: get-vw(460px);

    &__container {
      position: relative;
      padding: 0 get-vw(110px);
      z-index: 1;
    }

    &__main-title,
    &__description {
      text-align: center;
    } 

    &__main-title {
      font-size: get-vw(70px);
      font-family: 'Hoves-Bold';
      letter-spacing: get-vw(-2px);
      color: $accent-orange-text-color;
    }

    &__description {
      margin-top: get-vw(39px);
      margin-bottom: get-vw(65px);
      font-size: get-vw(24px);
      font-family: 'Hoves-Regular';
      letter-spacing: get-vw(-1px);
    }

    &__video-frame-wrapper {
      width: 100%;
      height: get-vw(598px);
    }

    &__route-line {
      width: get-vw(685px);
      height: get-vw(1252px);
      position: absolute;
      top: get-vw(40px);
      right: get-vw(170px);
    }
  }
</style>
