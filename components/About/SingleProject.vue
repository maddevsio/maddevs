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
      <div class="single-project__contribution-vidget">
        <img :src="require(`../../assets/img/Home/svg/${contributionVidgetImg}.svg`)" alt="Mad Devs">
        <span>contribution: backend, infrastructure, frontend</span>
      </div>
    </div>
    <div class="single-project__background-wrap">
      <div class="single-project__background"></div>
    </div>
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

.single-project {
  width: 50%;
  background: $bgcolor--project-white;
  padding-top: 74px;

  &__content-wrap {
    margin: 0 70px;
  }

  &__sub-title {
    margin-top: 22.5px;
  }

  &__paragraph {
    margin-top: 33px;
  }

  &__contribution-vidget {
    display: flex;
    align-items: center;
    color: $text-color--grey;
    font-family: 'Hoves-Regular';
    margin-top: 36px;
    font-size: 16px;
    line-height: 23px

    img {
      margin-right: 6px;
    }
  }

  &__background-wrap {
    width: 100%;
    height: 227px;
    padding: 0;
    margin: 0;
  }

  &__background {
    height: 100%;
    background-image: url('../../assets/img/Studies/svg/nambafoodBackground.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }
}

@media only screen and (max-width: 768px) {
    .single-project {
      width: 100%;
    }
}
</style>
