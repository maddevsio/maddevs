<template>
  <div class="it-consulting__content-item">
    <div class="it-consulting__content-item_wrapper">
      <h3 class="it-consulting__title title">{{ title }}</h3>
      <h4 class="it-consulting__sub-title title-md">{{ subTitle }}</h4>
      <p class="it-consulting__paragraph paragraph">{{ paragraph }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItConsultingContent',
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

  .it-consulting {
		&__content-item_wrapper {
			color: $text-color--black;
    }

    &__content-item {
      max-width: 440px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-top: 87px;
      padding-right: 30px;

      &:last-child {
        padding-right: 0;
      }
    }

    &__title {
      font-size: 70px;
    }

    &__sub-title {
      padding-bottom: 10px;
      font-size: 32px;
      line-height: 110%;
      letter-spacing: -1px;
    }

    &__paragraph {
      padding-bottom: 43px;
    }
  }

  @media only screen and (max-width: 1560px) {
    .it-consulting {
      &__content-item {
        max-width: 390px;
      }
    }
  }

  @media only screen and (max-width: 1390px) {
    .it-consulting {
      &__content-item {
        max-width: 355px;
      }

      &__title {
        font-size: 67px;
      }
    }
  }

  @media only screen and (max-width: 1280px) {
    .it-consulting {
      padding-top: 83px;

      &__content-item {
        max-width: 310px;
      }

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

  @media only screen and (max-width: 1180px) {
    .it-consulting {
      &__content-item {
        max-width: 270px;
      }

      &__title {
        font-size: 56px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .it-consulting {
      &__content-item {
        max-width: initial;
        padding-right: 0;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .it-consulting {
      &__title {
        font-size: 50px;
        padding-bottom: 14px;
      }

      &__sub-title {
        padding-bottom: 14px;
      }

      &__content-item {
        padding-top: 47px;

        &:first-child {
          padding-top: 78px;
        }
      }
    }
  }

  @media only screen and (max-width: 520px) {
    .it-consulting {
      &__title {
        font-size: 41px;
      }

      &__content-item {
        padding-top: 88px;
      }
    }
  }

  @media only screen and (max-width: 375px) {
    .it-consulting {
      &__title {
        font-size: 41px;
        line-height: 99%;
        letter-spacing: -1px;
        padding-bottom: 13px;
        max-width: 77%;
      }

      &__sub-title {
        font-size: 27px;
        line-height: 124%;
        letter-spacing: -1px;
        padding-bottom: 10px;
      }

      &__paragraph {
        padding-bottom: 30px;
      }

      &__content-item {
        padding-top: 75px;
      }
    }
  }
</style>
