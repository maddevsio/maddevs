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
        font-size: 47px;
      }
    }
  }

  @media only screen and (max-width: 870px) {
    .infrastructure-optimisation {
      &__title {
        max-width: 100%;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .infrastructure-optimisation {
      &__title {
        font-size: 42px;
        line-height: 110%;
        letter-spacing: -2px;
        padding-bottom: 20px;
        max-width: 460px;
      }

      &__sub-title {
        padding-bottom: 16px;
      }

      &__paragraph {
        padding-bottom: 24px;
      }

      &__flex-wrapper {
        margin-top: 38px;
      }
    }
  }

  @media only screen and (max-width: 656px) {
    .infrastructure-optimisation {
      &__title {
        max-width: 100%;
        margin-right: 0;
      }
    }
  }

  @media only screen and (max-width: 640px) {
    .infrastructure-optimisation {
      &__title {
        max-width: 420px;
      }

      &__content-item {
        &:first-child {
          padding-right: 0;
        }
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

  @media only screen and (max-width: 375px) {
    .infrastructure-optimisation {
      &__title {
        font-size: 41px;
        line-height: 99%;
        letter-spacing: -1px;
        padding-bottom: 13px;
      }

      &__sub-title {
        font-size: 27px;
        line-height: 124%;
        letter-spacing: -1px;
      }

      &__paragraph {
        padding-bottom: 70px;
      }

      &__content-item {
        &:last-child {
          .infrastructure-optimisation__paragraph {
            padding-bottom: 30px;
          }
        }
      }
    }
  }
</style>
