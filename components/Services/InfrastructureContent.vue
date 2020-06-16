<template>
  <div class="infrastructure-optimisation__content-item">
    <h3 class="infrastructure-optimisation__title title">{{ title }}</h3>
    <h4 class="infrastructure-optimisation__sub-title sub-title">{{ subTitle }}</h4>
    <p class="infrastructure-optimisation__paragraph paragraph">{{ paragraph }}</p>
  </div>
</template>

<script>
export default {
  name: 'InfrastructureContent',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    subTitle: {
      type: String,
      default: 'Sub Title'
    },
    paragraph: {
      type: String,
      default: 'Paragraph'
    }
  }
};

</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .infrastructure-optimisation {
    &__content-item {
      max-width: 640px;

      &:first-child {
        padding-right: 25px;
      }
    }

    &__sub-title,
    &__title {
      padding-bottom: 5px;
    }

    &__title {
      font-size: 70px;
      line-height: 110%;
      letter-spacing: -2px;
      padding-bottom: 16px;
    }

    &__sub-title {
      font-size: 32px;
      line-height: 110%;
      letter-spacing: -1px;
    }

    &__paragraph {
      padding-bottom: 46px;
    }
  }

  @media only screen and (max-width: 1560px) {
    .infrastructure-optimisation {
      &__content-item {
        max-width: 575px;
      }
    }
  }

  @media only screen and (max-width: 1390px) {
    .infrastructure-optimisation {
      &__content-item {
        max-width: 535px;
      }
    }
  }

  @media only screen and (max-width: 1280px) {
    .infrastructure-optimisation {
      padding-top: 83px;

      &__main-title {
        padding-bottom: 0;
      }

      &__title {
        font-size: 50px;
        line-height: 110%;
        letter-spacing: -2px;
        padding-bottom: 25px;
      }

      &__sub-title {
        font-size: 32px;
        line-height: 110%;
        letter-spacing: -1px;
      }
    }
  }

  @media only screen and (max-width: 1270px) {
    .infrastructure-optimisation {
      &__content-item {
        max-width: 500px;
      }
    }
  }

  @media only screen and (max-width: 1180px) {
    .infrastructure-optimisation {
      &__content-item {
        max-width: 460px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .infrastructure-optimisation {
      &__content-item  {
        max-width: initial;
      }

      &__title {
        max-width: 550px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .infrastructure-optimisation {
      &__title {
        max-width: 460px;
      }
    }
  }

  @media only screen and (max-width: 640px) {
    .infrastructure-optimisation {
      &__title {
        max-width: 420px;
      }
    }
  }

  @media only screen and (max-width: 520px) {
    .infrastructure-optimisation {
      &__title {
        max-width: 290px;
      }
    }
  }
</style>
