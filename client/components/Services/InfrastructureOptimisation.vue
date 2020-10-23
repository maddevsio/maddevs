<template>
  <section id="infrastructure-optimisation" class="infrastructure-optimisation">
    <div class="container">
      <div class="infrastructure-optimisation__content-wrapper">
        <h2 class="infrastructure-optimisation__main-title">Infrastructure <br class="infrastructure-optimisation__small-screen-break"> Optimisation</h2>
        <div class="infrastructure-optimisation__content">
          <div class="infrastructure-optimisation__text-content">
            <InfrastructureContent
              :title="whatMakes.title" 
              :subTitle="whatMakes.subTitle" 
              :paragraph="whatMakes.paragraph"
              :className="whatMakes.className"
            />
            <InfrastructureContent 
              :title="upToSaving.title" 
              :subTitle="upToSaving.subTitle" 
              :paragraph="upToSaving.paragraph"
              :className="upToSaving.className"
            />
          </div>
          <UIButtonModalTrigger 
            :buttonInnerText="buttonInnerText"
            :modalWindowName="modalWindowName"
            class="infrastructure-optimisation__button"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import InfrastructureContent from '@/components/Services/InfrastructureContent';
import UIButtonModalTrigger from '@/components/ui/UIButtonModalTrigger';

export default {
  name: 'InfrastructureOptimisation',
  components: {
    InfrastructureContent,
    UIButtonModalTrigger
  },
  data() {
    return {
      whatMakes: {
        title: 'What makes us stand out from others?',
        subTitle: 'Optimising teams don’t care for tomorrow’s traffic peaks? We care!',
        paragraph: 'We don\'t just have experience with infrastructure management tools, our team helped develop some of them. We know where to get the cheapest price and the best service.',
        className: 'first-item'
      },
      upToSaving: {
        title: 'Up to 50% savings on infrastructure',
        subTitle: 'Pay-as-you-go receipts from your cloud providers make you curse them?',
        paragraph: 'Our fire brigade can help you optimise resource consumption like we\'ve done for 75% of our customers. We’ll reconfigure and disable every option or service that is not necessary.',
        className: 'second-item'
      },
      buttonInnerText: 'Get an infrastructure audit',
      modalWindowName: 'infrastructure-modal'
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .infrastructure-optimisation {
    &__content-wrapper {
      &:hover {
        .infrastructure-optimisation__button {
          background-color: $bgcolor--white;
          color: $text-color--black !important;
        }
      }
    }

    &__content {
      margin-top: -69px;
      margin-bottom: 136px;
      padding: 83px 106px 52px 106px;
      border: 2px solid $border-color--red;
    }

    &__main-title {
      @include h2_title;
      width: max-content;
      margin: auto;
      padding-top: 0;
      padding-left: 32px;
      padding-right: 32px;
      position: relative;
      z-index: 1;
      background-color: $bgcolor--black;
      color: $text-color--red;
    }

    &__text-content {
      display: flex;
      justify-content: space-between;
      margin-bottom: 39px;

      @media screen and  (max-width: 1023px) {
        flex-direction: column;
      }
    }

    &__button {
      width: 100%;
      height: 56px;
      font-size: 16px;
      color: $text-color--white;
      border-color: $button-border--white-opacity;

      &:active {
        background-color: $bgcolor--white !important;
        border-color: $button-border--white-opacity !important;
      }

      @media screen and (max-width: 1280px) {
        font-size: 14px;
      }
    }

    &__small-screen-break {
      display: none;
    }

    @media screen and  (max-width: 1240px) {
      &__content {
        margin-top: -95px;
        padding: 110px 70px 52px 70px;
      }

      &__text-content {
        margin-bottom: 29px;
      }

      &__main-title {
        margin-left: 38px;
      }

      &__small-screen-break {
        display: block;
      }
    }

    @media screen and  (max-width: 834px) {
      &__content {
        margin-top: -66px;
        padding-top: 74px;
        margin-bottom: 80px;
      }

      &__main-title {
        margin-left: 50px;
        padding-left: 22px;
        padding-right: 22px;
      }
    }

    @media screen and  (max-width: 768px) {
      &__content {
        padding-left: 56px;
        padding-right: 56px;
      }

      &__main-title {
        margin-left: 36px;
      }
    }

    @media screen and  (max-width: 576px) {
      &__content {
        padding: 70px 44px 44px;
      }

      &__main-title {
        margin-left: 24px;
      }
    }

    @media screen and  (max-width: 440px) {
      &__content {
        padding: 64px 24px 24px 24px;
      }

      &__main-title {
        margin-left: 26px;
        padding-left: 0;
        padding-right: 0;
      }
    }

    @media screen and  (max-width: 350px) {
      &__content {
        padding: 60px 14px 14px;
      }

      &__main-title {
        margin-left: 14px;
      }
    }
  }
</style>
