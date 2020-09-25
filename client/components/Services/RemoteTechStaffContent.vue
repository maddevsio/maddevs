<template>
  <div class="remote-tech-staff-content__tech-staff">
    <div class="remote-tech-staff-content__content_wrapper">
      <div class="remote-tech-staff-content__content-wrap">
        <div class="remote-tech-staff-content__title-wrap">
          <h3 class="remote-tech-staff-content__title title default-title">{{ title }}</h3>
          <h4 class="remote-tech-staff-content__sub-title title-md">{{ subTitle }}</h4>
        </div>
        <img 
          class="remote-tech-staff-content__content-icon" 
          src="@/assets/img/Services/svg/individuals-symbol.svg" 
          alt="individuals-title-symbol"
          v-if="title === 'Individuals'"
        />
        <img
          class="remote-tech-staff-content__content-icon" 
          src="@/assets/img/Services/svg/teams-symbol.svg" 
          alt="teams-title-symbol"
          v-if="title === 'Teams'"
        />
      </div>
      <p class="remote-tech-staff-content__paragraph paragraph">{{ paragraph }}</p>
    </div>
    <UIButtonModalTrigger 
      :buttonInnerText="buttonInnerText"
      :modalWindowName="modalWindowName" 
      class="remote-tech-staff-content__ui-button-modal-trigger"
    />
  </div>
</template>

<script>
import UIButtonModalTrigger from '@/components/ui/UIButtonModalTrigger';

export default {
  name: 'RemoteTechStaffContent',
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
  }
};

</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .remote-tech-staff-content {
    &__ui-button-modal-trigger {
      width: 100%;

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

    &__tech-staff {
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
    .remote-tech-staff-content__content-icon {
      padding-right: 14px;
    }
  }

  .teams,
  .individuals {
    &:hover {
      .remote-tech-staff-content__title,
      .remote-tech-staff-content__paragraph,
      .remote-tech-staff-content__sub-title,
      .remote-tech-staff-content__ui-button-modal-trigger {
        color: $text-color--grey-light;
        transition: 0.2s;
      }

      .remote-tech-staff-content__ui-button-modal-trigger {
        border-color: $border-color--grey-light;
      }

      .remote-tech-staff-content__content-icon {
        opacity: 1;
        transition: 0.2s;
      }
    }
  }

  @media only screen and (min-width: 1600px) {
    .remote-tech-staff-content {
      &__sub-title {
        max-width: 85%;
      }
    }
  }

  @media only screen and (max-width: 1280px) {
    .remote-tech-staff-content {
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
    .remote-tech-staff-content {
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
    .remote-tech-staff-content {
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
      .remote-tech-staff-content__paragraph {
        width: initial;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .remote-tech-staff-content {
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
    .remote-tech-staff-content {
      &__tech-staff {
        max-width: 100%;
      }

      &__content-icon {
        height: 145px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .remote-tech-staff-content {
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
    .remote-tech-staff-content {
      &__content-icon {
        height: 125px;
        top: -13px;
      }
    }
  }

  @media only screen and (max-width: 520px) {
    .remote-tech-staff-content {
      &__last-character {
        margin-left: -21px;
      }

      &__content-icon {
        height: 115px;
      }
    }
  }

  @media only screen and (max-width: 375px) {
    .remote-tech-staff-content {
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
    .remote-tech-staff-content {
      &__content-icon {
        height: 75px;
      }
    }
  }
</style>
