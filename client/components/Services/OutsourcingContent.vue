<template>
  <div class="it-outsourcing__outsourcing-content">
    <div class="it-outsourcing__content_wrapper">
      <div class="it-outsourcing__content-wrap">
        <div class="it-outsourcing__title-wrap">
          <h3 class="it-outsourcing__title title default-title">{{ title }}</h3>
          <h4 class="it-outsourcing__sub-title sub-title">{{ subTitle }}</h4>
        </div>
        <img 
          class="it-outsourcing__content-icon" 
          src="@/assets/img/Services/svg/individuals-symbol.svg" 
          alt="individuals-title-symbol"
          v-if="title === 'Individuals'"
        />
        <img 
          class="it-outsourcing__content-icon" 
          src="@/assets/img/Services/svg/teams-symbol.svg" 
          alt="teams-title-symbol"
          v-if="title === 'Teams'"
        />
      </div>
      <p class="it-outsourcing__paragraph paragraph">{{ paragraph }}</p>
    </div>
    <UIButtonModalTrigger 
      :buttonInnerText="buttonInnerText"
      :isRed="isRed"
      :isBlack="isBlack"
      :isGrey="isGrey"
      :modalWindowName="modalWindowName" 
      class="it-outsourcing__ui-button-modal-trigger"
    />
  </div>
</template>

<script>
import UIButtonModalTrigger from '@/components/ui/UIButtonModalTrigger';

export default {
  name: 'OutsourcingContent',
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
    UIButtonModalTrigger
  },
  data() {
    return {
      isRed: false,
      isBlack: false,
      isGrey: false
    };
  }
};

</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .it-outsourcing {
    &__ui-button-modal-trigger {
      width: 100%;

      // Кнопка имеет уникальное поведение, cначала она имеет серый цвет, затем белый, такого поведения больше нигде не замечено, поэтому стили пишуться в этом компоненте
      // Important используется чтобы перебить те стили которые выставляются на hover у родительского блока
      &:hover {
        background-color: $bgcolor--grey-light;
        color: $text-color--black !important;
      }

      &:active {
        background-color: $button-active--red !important;
        border-color: $button-active-border--red !important;
      }
    }

    &__content-icon {
      margin-bottom: 15px;
      position: relative;
      top: -35px;
      opacity: 40%;
    }

    &__outsourcing-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 47%;
    }

    &__content-wrap {
      display: flex;
    }

    &__title,
    &__sub-title,
    &__paragraph,
    &__ui-button-modal-trigger {
      color: $text-color--grey;
    }

    &__title {
      padding-bottom: 17px;
      font-size: 70px;
      line-height: 92%;
      letter-spacing: -2px;
    }

    &__sub-title {
      font-size: 32px;
      line-height: 110%;
      letter-spacing: -2px;
      margin-bottom: 15px;
    }

    &__paragraph {
      padding-bottom: 46px;
    }
  }

  .individuals {
    .it-outsourcing__content-icon {
      padding-right: 14px;
    }
  }

  .teams,
  .individuals {
    &:hover {
      .it-outsourcing__title,
      .it-outsourcing__paragraph,
      .it-outsourcing__sub-title,
      .it-outsourcing__ui-button-modal-trigger {
        color: $text-color--grey-light;
        transition: 0.2s;
      }

      .it-outsourcing__ui-button-modal-trigger {
        border-color: $border-color--grey-light;
      }

      .it-outsourcing__content-icon {
        opacity: 1;
        transition: 0.2s;
      }
    }
  }

  @media only screen and (min-width: 1600px) {
    .it-outsourcing {
      &__sub-title {
        max-width: 85%;
      }
    }
  }

  @media only screen and (max-width: 1280px) {
    .it-outsourcing {
      padding: 170px 0;

      &__main-title {
        padding-bottom: 52px;
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

      &__content-icon {
        height: 180px;
      }
    }
  }

  @media only screen and (max-width: 1180px) {
    .it-outsourcing {
      &__title {
        font-size: 50px;
        line-height: 110%;
        letter-spacing: -2px;
      }

      &__content-icon {
        height: 160px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .it-outsourcing {
      button {
        width: initial;
      }

      &__title {
        font-size: 48px;
        padding-bottom: 25px;
      }

      &__sub-title {
        width: initial;
        font-size: 33px;
        line-height: 110%;
        letter-spacing: -1px;
      }

      &__content-icon {
        height: 130px;
        padding-left: 10px;
      }
    }

    .teams,
    .individuals * {
      .it-outsourcing__paragraph {
        width: initial;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .it-outsourcing {
      &__content-icon {
        height: 115px;
        top: -25px;
      }

      &__title {
        padding-bottom: 20px;
      }
    }
  }

  @media only screen and (max-width: 878px) {
    .it-outsourcing {
      &__content-icon {
        height: 145px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .it-outsourcing {
      &__title {
        font-size: 47px;
        padding-bottom: 10px;
      }

      &__sub-title {
        font-size: 32px;
      }

      &__paragraph {
        line-height: 119%;
      }
    }
  }

  @media only screen and (max-width: 580px) {
    .it-outsourcing {
      &__content-icon {
        height: 125px;
        top: -13px;
      }
    }
  }

  @media only screen and (max-width: 520px) {
    .it-outsourcing {
      &__last-character {
        margin-left: -21px;
      }

      &__content-icon {
        height: 115px;
      }
    }
  }

  @media only screen and (max-width: 375px) {
    .it-outsourcing {
      &__main-title {
        padding-bottom: 25px;
      }

      &__content-icon {
        height: 100px;
      }

      &__title {
        font-size: 41px;
        line-height: 99%;
        letter-spacing: -1px;
      }

      &__sub-title {
        font-size: 27px;
        line-height: 124%;
        letter-spacing: -1px;
        margin-bottom: 10px;
      }

      &__paragraph {
        padding-bottom: 34px;
      }
    }
  }

  @media only screen and (max-width: 345px) {
    .it-outsourcing {
      &__content-icon {
        height: 75px;
      }
    }
  }
</style>
