<template>
  <section id="infrastructure-scheme" class="infrastructure-scheme">
    <div class="container-godee">
      <div class="infrastructure-scheme__head-text-content">
        <h2 class="infrastructure-scheme__main-title">Infrastructure scheme</h2>
        <p class="infrastructure-scheme__description">The infrastructure is hosted on the Digital Ocean developer cloud.</p>
        <img src="@/assets/img/GoDee/svg/digital-ocean-logo.svg" alt="Digital Ocean" class="infrastructure-scheme__digital-ocean-logo">
      </div> 
      <div class="infrastructure-scheme__infrastructure-preview">
        <h3 class="infrastructure-scheme__preview-title">What does it look like?</h3>
        <p class="infrastructure-scheme__description">Our applications send requests to an Nginx server, and then they are processed via the <br> gRPC framework and address to separate APIs for each application. APIs refer to Redis <br> quick-caching Streams and Georeferencing service, which allows the bus driver to be on <br> track along the way.</p>
        <img src="@/assets/img/GoDee/png/infrastructure-scheme.png" alt="Scheme" class="infrastructure-scheme__scheme-image">
      </div>
      <div class="infrastructure-scheme__technologies">
        <p class="infrastructure-scheme__description">Then all information, collected and processed by those services, is controlled via the Web <br> Admin panel, which is connected to the PostgreSQL database, OSRM, Firebase and push <br> notification services. We use Docker containers throughout the development process.</p>
        <img src="@/assets/img/GoDee/svg/technologies.svg" alt="Technologies" class="infrastructure-scheme__technologies-image">
      </div>
      <img src="@/assets/img/GoDee/svg/infrastructure-scheme-left-route-line.svg" alt="Route line" class="infrastructure-scheme__route-line infrastructure-scheme__left-route-line">
      <img src="@/assets/img/GoDee/svg/infrastructure-scheme-right-route-line.svg" alt="Route line" class="infrastructure-scheme__route-line infrastructure-scheme__right-route-line">
    </div>
  </section>
</template>

<script>
export default {
  name: 'InfrastructureScheme'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
  @import '../../assets/styles/get-vw';

  .infrastructure-scheme {
    position: relative;
    margin-top: get-vw(280px);

    &__head-text-content,
    &__infrastructure-preview,
    &__technologies {
      text-align: center;
    }
    
    &__main-title,
    &__preview-title {
      font-family: 'Hoves-Bold';
    }

    &__main-title {
      margin-bottom: get-vw(70px);
      font-size: get-vw(90px);
      letter-spacing: get-vw(-3px);
      color: $accent-orange-text-color;
    }

    &__description {
      font-size: get-vw(24px);
      font-family: 'Hoves-Regular';
      letter-spacing: get-vw(-1px);
      line-height: get-vw(33px);
      color: $text-color--grey;
    }

    &__preview-title {
      margin-top: get-vw(65px);
      margin-bottom: get-vw(20px);
      font-size: get-vw(50px);
      letter-spacing: get-vw(-2px);
    }

    &__digital-ocean-logo {
      width: get-vw(396px);
      height: get-vw(70px);
      margin-top: get-vw(20px);
    }

    &__scheme-image {
      width: get-vw(1370px);
      height: get-vw(400px);
      margin-top: get-vw(48px);
      margin-bottom: get-vw(69px);
    }

    &__technologies-image {
      width: get-vw(614px);
      height: get-vw(66px);
      margin: get-vw(40px) 0;
    }

    &__route-line {
      position: absolute;
      z-index: -1;
    }

    &__left-route-line {
      width: get-vw(149px);
      height: get-vw(279px);
      top: get-vw(-215px);
      left: get-vw(200px);
    }

    &__right-route-line {
      width: get-vw(1240px);
      height: get-vw(2857px);
      top: get-vw(53px);
      right: get-vw(215px);

    }
  }
</style>
