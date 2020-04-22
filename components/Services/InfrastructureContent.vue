<template>
  <div class="infrastructure-optimisation__content-item">
    <h3 class="infrastructure-optimisation__title title" v-if="title === 'Up to savings on infrastructure'">
      <span class="infrastructure-optimisation__title-image-wrapp">
        Up to
        <img 
          src="../../assets/img/Services/svg/percent-icon.svg" 
          alt="fifty percent icon" 
          class="infrastructure-optimisation__fifty-percent-icon"
        >
      </span>
      <br> savings on <br> infrastructure
    </h3>
    <h3 class="infrastructure-optimisation__title title" v-else>{{ title }}</h3>
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

    &__paragraph {
      padding-bottom: 46px;
    }

    &__title-image-wrapp {
      position: relative;
    }

    &__fifty-percent-icon {
      position: absolute;
      top: -34px;
      left: 205px;
    }
  }

  @media only screen and (max-width: 1560px) {
    .infrastructure-optimisation {
      &__content-item {
        max-width: 575px;
      }

      &__fifty-percent-icon {
        height: 187px;
        left: 182px;
      }
    }
  }

  @media only screen and (max-width: 1390px) {
    .infrastructure-optimisation {
      &__content-item {
        max-width: 535px;
      }

      &__fifty-percent-icon {
        height: 179px;
        left: 171px;
      }
    }
  }

  @media only screen and (max-width: 1270px) {
    .infrastructure-optimisation {
      &__content-item {
        max-width: 500px;
      }

      &__fifty-percent-icon {
        height: 168px;
        left: 159px;
      }
    }
  }

  @media only screen and (max-width: 1180px) {
    .infrastructure-optimisation {
      &__content-item {
        max-width: 460px;
      }

      &__fifty-percent-icon {
        height: 158px;
        left: 146px;
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

      &__fifty-percent-icon {
        height: 185px;
        left: 185px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .infrastructure-optimisation {
      &__title {
        max-width: 460px;
      }

      &__fifty-percent-icon {
        height: 156px;
        left: 148px;
      }
    }
  }

  @media only screen and (max-width: 640px) {
    .infrastructure-optimisation {
      &__title {
        max-width: 420px;
      }

      &__fifty-percent-icon {
        height: 150px;
        left: 135px;
      }
    }
  }

  @media only screen and (max-width: 520px) {
    .infrastructure-optimisation {
      &__title {
        max-width: 290px;
      }

      &__fifty-percent-icon {
        height: 110px;
        left: 88px;
      }
    }
  }
</style>
