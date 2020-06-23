<template>
  <div class="it-outsourcing__outsourcing-content">
    <div class="it-outsourcing__content_wrapper">
      <h3 class="it-outsourcing__title title teams-hover-title" v-if="title === 'Teams'">
        <span>Tea</span>
        <img 
          class="it-outsourcing__title-icon title-icon" 
          src="@/assets/img/Services/svg/teams-sub-title-symbol.svg" 
          alt="teams-sub-title-symbol"
        />
        <span class="it-outsourcing__last-character last-character">s</span>
      </h3>
      <h3 class="it-outsourcing__title title individuals-hover-title" v-if="title === 'Individuals'">
        <span>Individ</span>
        <img 
          class="it-outsourcing__title-icon title-icon" 
          src="@/assets/img/Services/svg/individuals-diamond.svg" 
          alt="individuals-sub-title-symbol"
        />
        <span class="it-outsourcing__last-character last-character">als</span>
      </h3>
      <h3 class="it-outsourcing__title title default-title">{{ title }}</h3>
      <h4 class="it-outsourcing__sub-title sub-title">{{ subTitle }}</h4>
      <p class="it-outsourcing__paragraph paragraph">{{ paragraph }}</p>
    </div>
    <buttonTrigger :buttonInnerText="buttonInnerText" :modalWindowName="modalWindowName" class="it-outsourcing__button-trigger"/>
  </div>
</template>

<script>
import buttonTrigger from '@/components/ui/button-trigger';

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
    buttonTrigger
  }
};

</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .it-outsourcing {
    &__button-trigger {
      width: 100%;
    }

    &__sub-title {
      margin-bottom: 15px;
    }

    &__outsourcing-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 47%;
    }

    &__title,
    &__sub-title,
    &__paragraph,
    &__button-trigger {
      color: $text-color--grey;
    }

    &__title {
      height: 100px;
      padding-bottom: 33px;
      font-size: 90px;
      line-height: 104%;
      letter-spacing: -3px;
    }

    &__paragraph {
      width: 535px;
      padding-bottom: 46px;
    }

    &__title-icon {
      margin-top: -15px;
      margin-left: -24px;
    }
  }

  .teams {
    .it-outsourcing__paragraph {
      width: 535px;
    }

    .teams-hover-title {
      display: none;
    }

    &:hover {
      .teams-hover-title  {
        display: block;
      }
    }
  }

  .individuals {
    .it-outsourcing__title-icon {
      padding-right: 14px;
    }

    .it-outsourcing__paragraph {
      width: 575px;
    }

    .individuals-hover-title {
      display: none;
    }

    &:hover {
      .individuals-hover-title {
        display: block;
      }
    }
  }

  .teams,
  .individuals {
    &:hover {
      .it-outsourcing__title,
      .it-outsourcing__paragraph,
      .it-outsourcing__sub-title,
      .it-outsourcing__button-trigger {
        color: $text-color--grey-light;
        transition: 0.3s;
      }

      .default-title {
        display: none;
      }

      .it-outsourcing__button-trigger {
        border-color: $border-color--grey-light-outsourcing-section;
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
        padding-bottom: 0;
      }

      &__sub-title {
        font-size: 32px;
        line-height: 110%;
        letter-spacing: -1px;
      }
    }

    .teams,
    .individuals * {

      .it-outsourcing__paragraph {
        width: 435px;
      }
    }
  }

  @media only screen and (max-width: 1270px) {
    .it-outsourcing {
      button {
        width: 360px;
      }

      &__title {
        padding-bottom: 0;
      }
    }

    .teams,
    .individuals * {

      .it-outsourcing__paragraph {
        width: 435px;
      }
    }
  }

  @media only screen and (max-width: 1180px) {
    .it-outsourcing {
      button {
        width: 340px;
      }

      &__sub-title  {
        width: 465px;
      }
    }

    .teams,
    .individuals * {

      .it-outsourcing__paragraph {
        width: 300px;
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
      }

      &__sub-title {
        width: initial;
        font-size: 33px;
        line-height: 110%;
        letter-spacing: -1px;
      }
    }

    .teams,
    .individuals * {
      .it-outsourcing__paragraph {
        width: initial;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .it-outsourcing {
      &__title {
        font-size: 47px;
        margin-bottom: -33px;
      }

      &__sub-title {
        font-size: 32px;
      }

      &__paragraph {
        line-height: 119%;
      }
    }
  }

  @media only screen and (max-width: 520px) {
    .it-outsourcing {
      &__last-character {
        margin-left: -21px;
      }
    }
  }

  @media only screen and (max-width: 375px) {
    .it-outsourcing {
      &__main-title {
        padding-bottom: 25px;
      }

      &__title,
      .individuals-hover-title,
      .teams-hover-title {
        margin-bottom: -40px;
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
</style>
