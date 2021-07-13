<template>
  <div
    :class="[`remoteTechStaffContent__tech-staff-${type}`, hovered ? 'remoteTechStaffContent__tech-staff-active' : '']"
    class="remoteTechStaffContent__tech-staff"
    @mouseover="$emit('mouseover', type)"
    @mouseout="$emit('mouseout', type)"
  >
    <div class="remoteTechStaffContent__content_wrapper">
      <div class="remoteTechStaffContent__text-wrap">
        <UITitle>{{ title }}</UITitle>
        <UISubtitle class="remoteTechStaffContent__item-sub-title">
          {{ subtitle }}
        </UISubtitle>
        <UIParagraph
          :class="`remoteTechStaffContent__${type}-paragraph`"
          class="remoteTechStaffContent__paragraph"
        >
          {{ paragraph }}
        </UIParagraph>
        <div
          :class="`remoteTechStaffContent__${type}-icon`"
          class="remoteTechStaffContent__item-icon"
        />
      </div>
    </div>
    <UIModalTriggerButton
      :label="buttonLabel"
      class="remoteTechStaffContent__ui-button-modal-trigger"
      @click="$emit('click')"
    />
  </div>
</template>

<script>
import UIModalTriggerButton from '@/components/shared/UIModalTriggerButton'
import UIParagraph from '@/components/Services/UIParagraph'
import UITitle from '@/components/Services/UITitle'
import UISubtitle from '@/components/Services/UISubtitle'

export default {
  name: 'RemoteTechStaffContent',
  components: {
    UIModalTriggerButton,
    UITitle,
    UISubtitle,
    UIParagraph,
  },

  props: {
    title: {
      type: String,
      default: 'Title',
    },

    subtitle: {
      type: String,
      default: 'Sub Title',
    },

    paragraph: {
      type: String,
      default: 'Paragraph',
    },

    buttonLabel: {
      type: String,
      default: 'Button Inner Text',
    },

    hovered: {
      type: Boolean,
      default: null,
    },

    type: {
      type: String,
      default: 'teams',
    },
  },
}
</script>

<style lang="scss" scoped>
.remoteTechStaffContent {
  &__tech-staff {
    width: 503px;
    justify-content: space-between;
    position: relative;
    opacity: 0.6;
  }

  &__tech-staff-active,
  &__tech-staff:hover {
    opacity: 1;

    .remoteTechStaffContent__item-icon {
      opacity: 1;
    }
  }

  &__content_wrapper {
    margin-bottom: 28px;
  }

  &__tech-staff,
  &__item-icon {
    transition: 0.4s;
  }

  &__tech-staff,
  &__text-wrap {
    display: flex;
    flex-direction: column;
  }

  &__text-wrap {
    position: relative;
  }

  &__item-sub-title {
    width: 350px;
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
    opacity: 0.4;
  }

  &__ui-button-modal-trigger {
    width: 100%;
    height: 56px;
    line-height: 24px;
    letter-spacing: -0.02em;
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

    @media screen and (max-width: 375px) {
      height: 48px;
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
    right: -6px;
    @include individuals-icon;
  }

  @media only screen and (max-width: 1320px) {
    &__tech-staff {
      width: 475px;
    }
  }

  @media only screen and (max-width: 1280px) {
    &__tech-staff {
      width: 445px;
    }

    &__content_wrapper {
      margin-bottom: 22px;
    }

    &__teams-paragraph {
      width: 350px;
    }

    &__individuals-paragraph {
      width: 375px;
    }

    &__item-sub-title {
      width: 300px;
    }

    &__teams-icon {
      width: 118px;
      height: 116px;
      right: -22px;
    }

    &__individuals-icon {
      width: 140px;
      height: 147px;
      top: -25px;
      right: 15px;
    }

    &__ui-button-modal-trigger {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 1220px) {
    &__tech-staff {
      width: 400px;
    }
  }

  @media only screen and (max-width: 1080px) {
    &__tech-staff {
      width: 380px;
    }

    &__teams-icon {
      width: 100px;
    }

    &__individuals-icon {
      width: 115px;
      right: -10px;
    }
  }

  @media only screen and (max-width: 1023px) {
    &__tech-staff,
    &__item-icon {
      opacity: 1;
    }

    &__tech-staff {
      width: 100%;
    }

    &__item-sub-title {
      width: 100%;
      margin-bottom: 13px;
    }

    &__tech-staff-individuals {
      margin-top: 65px;
    }

    &__item-icon {
      top: -20px;
      right: 0;
      opacity: 1;
    }

    &__paragraph {
      width: 80%;
    }
  }

  @media only screen and (max-width: 834px) {
    &__teams-icon {
      width: 40px;
      height: 38px;
      top: -11px;
      left: 90px;
    }

    &__individuals-icon {
      width: 48px;
      height: 75px;
      top: -27px;
      left: 133px;
    }

    &__paragraph {
      width: 100%;
    }
  }
}
</style>
