<template>
  <div class="remoteTechStaffContent__tech-staff" :class="`remoteTechStaffContent__tech-staff-${title.toLowerCase()}`">
    <div class="remoteTechStaffContent__content_wrapper">
      <div class="remoteTechStaffContent__text-wrap">
        <UIItemTitle :itemTitle="title" class="remoteTechStaffContent__item-title"/>
        <UIItemSubTitle :itemSubTitle="subTitle" class="remoteTechStaffContent__item-sub-title"/>
        <UIParagraph :paragraph="paragraph" class="remoteTechStaffContent__paragraph" :class="`remoteTechStaffContent__${title.toLowerCase()}-paragraph`"/>
      </div>
    </div>
    <UIButtonModalTrigger 
      :buttonInnerText="buttonInnerText"
      :modalWindowName="modalWindowName" 
      class="remoteTechStaffContent__ui-button-modal-trigger"
    />
    <div class="remoteTechStaffContent__item-icon" :class="`remoteTechStaffContent__${title.toLowerCase()}-icon`"></div>
  </div>
</template>

<script>
import UIButtonModalTrigger from '@/components/ui/UIButtonModalTrigger';
import UIParagraph from '@/components/ui/Services/UIParagraph';
import UIItemTitle from '@/components/ui/Services/UIItemTitle';
import UIItemSubTitle from '@/components/ui/Services/UIItemSubTitle';

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
    UIButtonModalTrigger,
    UIItemTitle,
    UIItemSubTitle,
    UIParagraph
  }
};

</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
  @import '../../assets/styles/_remoteTechStaffIcons';

  .remoteTechStaffContent {
    &__tech-staff {
      width: 503px;
      position: relative;
    }

    &__tech-staff,
    &__text-wrap {
      display: flex;
      flex-direction: column;
    }

    &__tech-staff {
      justify-content: space-between;

      &:hover {
        .remoteTechStaffContent__item-icon {
          opacity: 1;
          transition: 0.2s;
        }
      }
    }

    &__item-title {
      margin-bottom: 24px;
    }

    &__item-sub-title {
      width: 336px;
      margin-bottom: 16px;
    }
    
    &__ui-button-modal-trigger {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.02em;
    }

    &__teams-paragraph {
      width: 400px;
    }

    &__individuals-paragraph {
      width: 424px;
    }

    &__item-icon {
      display: block;
      position: absolute;
      opacity: 0.2;
    }

    &__ui-button-modal-trigger {
      width: 100%;
      height: 56px;
      margin-top: 28px;
      color: $text-color--white;
      border-color: $button-border--white-opacity;

      &:hover {
        background-color: $bgcolor--white;
        color: $text-color--black !important;
      }

      &:active {
        background-color: $bgcolor--white !important;
        border-color: $button-border--white-opacity !important;
      }
    }

    &__teams-icon {
      width: 158px;
      height: 156px;
      top: -10px;
      right: -48px;
      @include teams-icon;
    }

    &__individuals-icon {
      width: 190px;
      height: 207px;
      top: -35px;
      right: 0;
      @include individuals-icon;
    }

    @media screen and (max-width: 1280px) {
      &__ui-button-modal-trigger {
        font-size: 14px;
      }
    }

    @media only screen and (min-width: 1023px) and (max-width: 1280px) {
      &__tech-staff {
        width: 445px;
      }

      &__teams-paragraph {
        width: 350px;
      }

      &__individuals-paragraph {
        width: 375px;
      }

      &__item-sub-title {
        width: 290px;
      }

      &__teams-icon {
        width: 138px;
        height: 136px;
        top: 0;
      }

      &__individuals-icon {
        width: 170px;
        height: 187px;
        top: -25px;
      }
    }

    @media only screen and (min-width: 1023px) and (max-width: 1160px) {
      &__tech-staff {
        width: 400px;
      }

      &__teams-icon {
        width: 118px;
        height: 116px;
        top: 10px;
        right: -28px;
      }

      &__individuals-icon {
        width: 150px;
        height: 167px;
        top: -15px;
        right: -10px;
      }
    }

    @media only screen and (max-width: 1080px) {
      &__tech-staff {
        width: 390px;
      }
    }

    @media only screen and (max-width: 1023px) {
      &__tech-staff {
        width: 100%;
      }

       &__item-sub-title {
         width: 300px;
       }

      &__tech-staff-individuals {
        margin-top: 83px;
      }

      &__item-icon {
        top: 0;
        right: 0;
        opacity: 1;
      }

      &__paragraph {
        width: 75%;
      }
    }

    @media only screen and (max-width: 720px) {
      &__teams-icon {
        width: 118px;
        height: 116px;
      }

      &__individuals-icon {
        width: 150px;
        height: 167px;
      }
    }

    @media only screen and (max-width: 640px) {
      &__teams-icon {
        width: 48px;
        height: 46px;
        top: -8px;
        left: 140px;
      }

      &__individuals-icon {
        width: 60px;
        height: 87px;
        top: -25px;
        left: 210px;
      }

      &__item-sub-title,
      &__paragraph {
        width: 100%;
      }
    }
  }
</style>
