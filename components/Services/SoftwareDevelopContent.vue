<template>
  <div class="software-development_content">
    <div class="software-development_content__content-item_wrapper">
      <h3 class="software-development_content__title title" v-if="title === 'Mobile'">
        <span>Mobi</span>
        <img 
          class="software-development_content__mobile-title-icon title-icon" 
          src="../../assets/img/Services/svg/phone-title-symbol.svg" 
          alt="phone-title-symbol"
        />
        <span class="software-development_content__last-character last-character">e</span>
      </h3>
      <h3 class="software-development_content__title title" v-else>{{ title }}</h3>
      <h4 class="software-development_content__sub-title sub-title">{{ subTitle }}</h4>
      <p class="software-development_content__paragraph paragraph">{{ firstParagraph }}</p>
      <p class="software-development_content__paragraph paragraph">{{ secondParagraph }}</p>
      <p class="software-development_content__paragraph paragraph" v-if="title === 'Backend'">{{ thirdParagraph }}</p>
      <BackendIcons v-if="title === 'Backend'"/>
      <FrontendIcons v-if="title === 'Frontend'"/>
      <MobileIcons v-if="title === 'Mobile'"/>
    </div>
    <buttonTrigger :buttonInnerText="buttonInnerText"/>
  </div>
</template>

<script>
import buttonTrigger from '@/components/ui/button-trigger';
import BackendIcons from '@/components/IconsGroup/BackendIcons';
import FrontendIcons from '@/components/IconsGroup/FrontendIcons';
import MobileIcons from '@/components/IconsGroup/MobileIcons';

export default {
  name: 'SoftwareDevelopmentContent',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    subTitle: {
      type: String,
      default: 'Sub Title'
    },
    firstParagraph: {
      type: String,
      default: 'First Paragraph'
    },
    secondParagraph: {
      type: String,
      default: 'Second Paragraph'
    },
    thirdParagraph: {
      type: String,
      default: 'Third Paragraph'
    },
    buttonInnerText: {
      type: String,
      default: 'Button Inner Text'
    }
  },
  components: {
    buttonTrigger,
    BackendIcons,
    FrontendIcons,
    MobileIcons
  }
};
</script>

<style lang="scss" scoped>
   @import '../../assets/styles/vars';

  .software-development_content {
    max-width: 440px;
    min-width: calc(1em + 4vw);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 120px;
    padding-right: 30px;

    &:last-child {
      padding-right: 0;
    }

    button {
      width: 100%;
      color: $text-color--grey;
    }

		&__content-item_wrapper {
      color: $text-color--grey;
    }

    &__sub-title {
      padding-bottom: 10px;
    }

    &__paragraph {
      max-width: 360px;
      padding-bottom: 20px;
    }

    &__mobile-title-icon {
      margin-left: -24px;
      margin-bottom: -10px;
    }

    /deep/.icon-item {
      padding-bottom: 15px;
      padding-right: 40px;
    }

    /deep/.icons-list {
      padding-top: 18px;
      padding-bottom: 46px;
    }
  }

  @media only screen and (max-width: 1560px) {
    .frontend-item {
      .software-development_content__sub-title {
        max-width: 390px;
      }
    }
  }

  @media only screen and (max-width: 1390px) {
    .frontend-item {
      .software-development_content__sub-title {
        max-width: 370px;
      }
    }
  }

  @media only screen and (max-width: 1270px) {
    .software-development_content {
      &__last-character {
        margin-left: -26px;
      }
    }
  }

  @media only screen and (max-width: 1180px) {
    .software-development_content {
      &__sub-title {
        width: 270px;
      }

      /deep/.icon-item {
        padding-right: 20px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .software-development_content {
      max-width: initial;
      padding-right: 0;

      &__title,
      &__paragraph {
        max-width: initial;
      }

      &__sub-title  {
        width: initial;
      }

      &__title {
        padding-bottom: 17px;
      }

      /deep/.icons-list {
        max-width: 300px;
        flex-wrap: wrap;
      }

      /deep/.icon-flex_group {
        &:nth-child(3) {
          display: flex;
        }
      }
    }

    .frontend-item {
      .software-development_content__sub-title {
        max-width: initial;
      }
    }
  }

  @media only screen and (max-width: 520px) {
    .software-development_content {
      &__last-character {
        margin-left: -18px;
      }

      &__title {
        padding-bottom: 13px;
      }
    }
  }
</style>
