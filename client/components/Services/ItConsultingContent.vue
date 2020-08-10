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
      padding-bottom: get-vw(10px);
      line-height: 110%;
      letter-spacing: get-vw(-1px);
    }

    &__paragraph {
      padding-bottom: 43px;
    }
  }

  @media only screen and (max-width: 1280px) {
    .it-consulting {

      &__title {
        line-height: 110%;
        letter-spacing: -1px;
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
        padding-bottom: get-vw(14px, 768);
        padding-right: 11vw;
      }

      &__sub-title {
        padding-bottom: get-vw(14px, 768);
      }

      &__content-item {
        padding-top: get-vw(47px, 768);

        &:first-child {
          padding-top: get-vw(78px, 768);
        }
      }
    }
  }

  @media only screen and (max-width: 520px) {
    .it-consulting {

      &__content-item {
        padding-top: 88px;
      }

      &__sub-title {
        font-size: 7vw;
        line-height: 124%;
        letter-spacing: -1px;
        padding-bottom: 10px;
      }
    }
  }
</style>
