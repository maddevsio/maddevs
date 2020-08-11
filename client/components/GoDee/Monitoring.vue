<template>
  <section id="monitoring" class="monitoring">
    <div class="container-godee">
      <div class="monitoring__text-content">
        <h2 class="monitoring__main-title">Monitoring</h2>
        <img src="@/assets/img/GoDee/svg/datadog-logo.svg" alt="Datadog logo" class="monitoring__datadog-logo">
        <p class="monitoring__description">We believe that every production system requires proper monitoring. For this purpose, we use <br> Datadog service, which allows us to discover possible issues before they affect our users.</p>
      </div>
      <div class="monitoring__monitoring-configuration">
        <h3 class="monitoring__sub-title">Here is an example of our monitoring <br> configuration for the GoDee project: </h3>
        <img src="@/assets/img/GoDee/png/monitoring-services.png" alt="Monitoring Services" class="monitoring__monitoring-services-image">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Result'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
  @import '../../assets/styles/get-vw';

  .monitoring {
    margin-top: get-vw(150px);

    &__text-content,
    &__monitoring-configuration {
      text-align: center;
    }

    &__main-title,
    &__sub-title {
      font-family: 'Hoves-Bold';
    }

    &__main-title {
      margin-bottom: get-vw(112px);
      font-size: get-vw(90px);
      letter-spacing: get-vw(-3px);
      color: $accent-orange-text-color;
    }

    &__sub-title {
      margin-bottom: get-vw(55px);
      font-size: get-vw(50px);
      line-height: get-vw(55px);
      letter-spacing: get-vw(-2px);
    }

    &__description {
      margin-top: get-vw(10px);
      margin-bottom: get-vw(113px);
      font-size: get-vw(24px);
      line-height: get-vw(33px);
      font-family: 'Hoves-Regular';
      letter-spacing: get-vw(-1px);
      color: $text-color--grey-dark;
    }

    &__datadog-logo {
      width: get-vw(303px);
      height: get-vw(67px);
    }

    &__monitoring-services-image {
      width: get-vw(1063px);
      height: get-vw(429px);
    }
  }
</style>
