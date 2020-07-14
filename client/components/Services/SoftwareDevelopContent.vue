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
  </div>
</template>

<script>
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
    }
  },
  components: {
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
    padding-top: 91px;
    padding-right: 87px;

    &:last-child {
      padding-right: 0;
    }

    &__content-item_wrapper {
      color: $text-color--grey;
    }

    &__sub-title {
      padding-bottom: 10px;
      font-size: 32px;
      line-height: 110%;
      letter-spacing: -1px;
    }

    &__paragraph {
      max-width: 360px;
      line-height: 139%;
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

    &__title {
      font-size: 80px;
      line-height: 110%;
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

  @media only screen and (max-width: 1280px) {
    .software-development_content {
      padding-top: 83px;

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

      &__mobile-title-icon {
        margin: 0 11px -10px -12px;
      }

      /deep/.icons-list {
        flex-wrap: wrap;
      }

      /deep/.icon-flex_group {
        display: flex;

        &:last-child {
          flex-direction: row;
        }
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
        padding-bottom: 25px;
      }

      /deep/.icons-list {
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

  @media only screen and (max-width: 695px) {
    .software-development_content {
      /deep/.icons-list {
        flex-wrap: wrap;
      }

      /deep/.icon-flex_group {
        display: block;

        &:last-child {
          flex-direction: column;
        }
      }

      &:nth-child(2),
      &:nth-child(3) {
        /deep/.icon-flex_group {
          display: block;

          &:first-child {
            /deep/.icon-item {
              padding-right: 70px;
            }
          }

          &:last-child {
            flex-direction: column;
          }
        }
      }

      &__paragraph {
        padding-bottom: 12px;
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

      &__mobile-title-icon {
        margin: 0 0 -8px -22px;
      }
    }
  }

  @media only screen and (max-width: 458px) {
    .software-development_content {
      &:first-child {
        /deep/.icon-flex_group {
        display: flex;
        flex-direction: column;

          &:last-child {
            flex-direction: row;

            /deep/.icon-item:first-child {
              padding-right: 70px;
            }
          }

          &:first-child {
            /deep/.icon-item {
              padding-right: 70px;
            }
          }
        }
      }

      /deep/.icon-flex_group {
        display: flex;
        flex-direction: column;

        &:first-child {
          /deep/.icon-item {
            padding-right: 70px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 375px) {
    .software-development_content {
      padding-top: 70px;

      &__title {
        font-size: 41px;
        line-height: 99%;
        letter-spacing: -1px;
      }

      &__sub-title {
        font-size: 27px;
        line-height: 124%;
        letter-spacing: -1px;
      }

      /deep/.icons-list {
        padding-bottom: 30px;
      }
    }
  }
</style>
