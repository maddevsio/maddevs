<template>
  <section id="collaboration" class="collaboration">
    <div class="container-godee">
      <div class="collaboration__title-wrapper">
        <h2 class="collaboration__main-title">Mad Devs & GoDee <br> collaboration</h2>
        <p class="collaboration__description">Mad Devs started to consult GoDee at the early stage of this project assisting with the choice <br> of the technology stack and step-by-step planning. Then a number of our positively mad <br> developers started to work on the GoDee’s smart urban bus management system as an <br> extended part of the team.</p>
      </div>
    </div>
    <div class="collaboration__company-logo-wrapper">
      <img class="collaboration__company-logo collaboration__company-logo--godee" src="@/assets/img/GoDee/svg/godee-logo-gray.svg" alt="GoDee">
      <img class="collaboration__company-logo collaboration__company-logo--maddevs" src="@/assets/img/GoDee/svg/maddevs-logo-gray.svg" alt="Mad Devs">
    </div>
  </section>
</template>

<script>
export default {
  name: 'Collaboration'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
  @import '../../assets/styles/get-vw';

  .collaboration {
    &__main-title,
    &__description {
      text-align: center;
    }

    &__main-title {
      font-size: get-vw(90px);
      font-family: 'Hoves-Bold', sans-serif;
      letter-spacing: get-vw(-3px);
      color: $accent-orange-text-color;
    }

    &__description {
      margin-top: get-vw(38px);
      font-size: get-vw(24px);
      font-family: 'Hoves-Regular', sans-serif;
      letter-spacing: get-vw(-1px);
      color: $text-color--grey-dark;
    }

    &__company-logo-wrapper {
      display: flex;
      justify-content: center;
      align-items: baseline;
    }

    &__company-logo {
      margin-top: get-vw(-8px);
      margin-bottom: get-vw(40px);

      &--godee {
        width: get-vw(746px);
        height: get-vw(161px);
      }

      &--maddevs {
        width: get-vw(590px);
        height: get-vw(219px);
        margin-left: get-vw(60px);
      }
    }
  }
</style>
