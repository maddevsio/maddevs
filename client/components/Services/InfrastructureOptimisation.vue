<template>
  <section id="infrastructure-optimisation" class="infrastructure-optimisation">
    <div class="container">
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
    &__main-title {
      width: max-content;
      margin: auto;
      padding-left: 32px;
      padding-right: 32px;
      position: relative;
      text-align: center;
      z-index: 1;
      background-color: $bgcolor--black;
      color: $text-color--red;
      @include h2_title;
    }

    &__content {
      margin-top: -69px;
      margin-bottom: 136px;
      padding: 83px 106px 52px 106px;
      border: 2px solid $border-color--red;
    }

    &__text-content {
      display: flex;
      justify-content: space-between;
      margin-bottom: 39px;
    }

    &__button {
      width: 100%;
      height: 56px;
      font-size: 16px;
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

      &__small-screen-break {
        display: block;
      }
    }

    @media screen and  (max-width: 1023px) {
      &__text-content {
        flex-direction: column;
      }
    }

    @media screen and  (max-width: 834px) {
      &__main-title {
        padding-left: 22px;
        padding-right: 22px;
      }

      &__content {
        margin-top: -66px;
        padding-top: 74px;
        margin-bottom: 80px;
      }
    }

    @media screen and  (max-width: 768px) {
      &__content {
        padding-left: 56px;
        padding-right: 56px;
      }
    }

    @media screen and  (max-width: 576px) {
      &__main-title {
        padding-left: 18px;
        padding-right: 18px;
      }

      &__content {
        padding: 70px 44px 44px;
      }
    }

    @media screen and  (max-width: 440px) {
      &__content {
        padding: 64px 24px 32px 24px;
      }
    }

    @media screen and  (max-width: 380px) {
      &__main-title {
        padding-left: 0;
        padding-right: 0;
      }
    }
  }
</style>
