<template>
  <div class="single-project">
    <div class="single-project__content-wrap">
      <img :src="require(`../../assets/img/Home/svg/clients/${logoImg}.svg`)" class="single-project__logo" alt="Namba Food" />
      <h4 class="single-project__sub-title sub-title">Contactless delivery service</h4>
      <p class="single-project__paragraph paragraph">
        Mad Devs created the Namba Food delivery service from scratch. The
        apps for couriers, end users placing orders and business owners
        work as a seamless system, ensuring a smooth delivery process for
        food and other goods.
      </p> 
      <div class="contribution-vidget">
        <img :src="require(`../../assets/img/Home/svg/${contributionVidgetImg}.svg`)" alt="Mad Devs">
        <span class="contribution-vidget__content">contribution: backend, infrastructure, frontend</span>
      </div>
    </div>
    <div class="single-project__background"></div>
  </div>
</template>

<script>

export default {
  name: 'SingleProject',
  props: {
    logoImg: {
      type: String,
      required: true
    },
    contributionVidgetImg: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

@mixin responsive-bg-image($image-width, $image-height) {
  background-size: 100%;
  height: 0;
  padding-bottom: percentage($image-height / $image-width);
  display: block;
}

.single-project {
  width: 50%;
  background: $bgcolor--project-white;

  &__content-wrap {
    margin:  74px 70px 0;
  }

  &__sub-title {
    margin-top: 22.5px;
  }

  &__paragraph {
    margin-top: 33px;
  }

  .contribution-vidget {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
    color: $text-color--grey;
    font-family: 'Hoves-Regular';
    margin-top: 36px;
    font-size: 16px;
    line-height: 23px;

    img {
      margin-right: 6px;
    }

    &__content {
      margin-left: 6px;
    }

    @media only screen and (max-width: 576px) {
        &__content {
          color: $text-color--black;
        }
    }
  }

  &__background {
    background: url('../../assets/img/Studies/png/nambafoodBackground.png') no-repeat;
    @include responsive-bg-image(394, 232); // sass-lint:disable-line mixins-before-declarations
    position: relative;
    bottom: 79px;
    margin-bottom: -80px;
  }

  @media only screen and (max-width: 768px) {
    .single-project {
      width: 100%;

      &__content-wrap {
        margin:  68px 30px 0;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .single-project {
      width: 100%;

      &__content-wrap {
        margin:  40px 34px 0;
      }

      &__background {
        bottom: 104px;
        margin-bottom: -105px;
      }
    }
  }
}

</style>
