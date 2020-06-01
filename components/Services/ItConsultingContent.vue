<template>
  <div class="it-consulting__content-item">
    <div class="it-consulting__content-item_wrapper">
      <h3 class="it-consulting__title title">{{ title }}</h3>
      <h4 class="it-consulting__sub-title sub-title">{{ subTitle }}</h4>
      <p class="it-consulting__paragraph paragraph">{{ paragraph }}</p>
    </div>
    <buttonTrigger :buttonInnerText="buttonInnerText" :modalWindowName="modalWindowName"/>
  </div>
</template>

<script>
import buttonTrigger from '@/components/ui/button-trigger';

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
    },
    buttonInnerText: {
      type: String,
      default: 'Button Inner Text'
    },
    modalWindowName: {
      type: String,
      default: 'Modal Window Name'
    }
  },
  components: {
    buttonTrigger
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .it-consulting {
    button {
      width: 100%;
      color: $text-color--black;
      border-color: $border-color--black;
    }

		&__content-item_wrapper {
			color: $text-color--black;
    }

    &__content-item {
      max-width: 440px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-top: 120px;
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
</style>
