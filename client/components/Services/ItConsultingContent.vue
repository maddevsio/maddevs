<template>
  <div class="it-consulting__content-item">
    <div class="it-consulting__content-item_wrapper">
      <h3 class="it-consulting__title block-paragraph">{{ title }}</h3>
      <h4 class="it-consulting__sub-title sub-title">{{ subTitle }}</h4>
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
  @import '../../assets/styles/get-vw';

  .it-consulting {
		&__content-item_wrapper {
			color: $text-color--black;
    }

    &__content-item {
      max-width: get-vw(440px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-top: 6.17vw;
      padding-right: get-vw(30px);

      &:last-child {
        padding-right: 0;
      }
    }

    &__title {
      line-height: 3.5vw;
      letter-spacing: -0.2vw;
      padding-bottom: 2vw;
    }

    &__sub-title {
      padding-bottom: 10px;
      line-height: 110%;
      letter-spacing: -1px;
    }

    &__paragraph {
      padding-bottom: 43px;
    }
  }

  @media only screen and (max-width: 1280px) {
    .it-consulting {

      &__title {
        line-height: 110%;
        letter-spacing: -2px;
      }

      &__sub-title {
        line-height: 110%;
        letter-spacing: -1px;
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
