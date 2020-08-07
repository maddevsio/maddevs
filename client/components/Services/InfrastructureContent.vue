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
  @import '../../assets/styles/get-vw';

  .infrastructure-optimisation {
    &__content-item {
      max-width: get-vw(640px);

      &:first-child {
        padding-right: get-vw(25px);
      }
    }

    &__sub-title,
    &__title {
      padding-bottom: get-vw(5px);
    }

    &__title {
      line-height: 110%;
      letter-spacing: get-vw(-2px);
      padding-bottom: get-vw(16px);
    }

    &__sub-title {
      line-height: 110%;
      letter-spacing: -1px;
    }

    &__paragraph {
      padding-bottom: get-vw(46px);
    }
  }

  @media only screen and (max-width: 1024px) {
    .infrastructure-optimisation {
      &__content-item  {
        max-width: initial;
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
        font-size: 7vw;
        line-height: 124%;
        letter-spacing: -0.4px;
      }

      &__sub-title {
        padding-bottom: get-vw(16px, 768);
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

  @media only screen and (max-width: 520px) {
    .infrastructure-optimisation {
      &__title {
        font-size: 11vw;
        line-height: 99%;
        letter-spacing: -1px;
        padding-bottom: 13px;
      }

      &__sub-title {
        font-size: 7vw;
        line-height: 124%;
        letter-spacing: -0.4px;
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
