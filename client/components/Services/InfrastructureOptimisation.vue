<template>
  <section id="infrastructure-optimisation" class="infrastructure-optimisation main-parent-item">
    <div class="container">
      <div class="infrastructure-optimisation__header">
        <h2 class="infrastructure-optimisation__main-title main-title">
          <span>Infrastructure</span><br>Optimisation
        </h2>
        <div class="infrastructure-optimisation__bg"></div>
      </div>
        <div class="infrastructure-optimisation__flex-wrapper flex-wrapper">
          <InfrastructureContent
            :title="whatMakes.title" 
            :subTitle="whatMakes.subTitle" 
            :paragraph="whatMakes.paragraph"
          />
          <InfrastructureContent 
            :title="upToSaving.title" 
            :subTitle="upToSaving.subTitle" 
            :paragraph="upToSaving.paragraph"
          />
        </div>
        <UIButtonModalTrigger 
          :buttonInnerText="buttonInnerText"
          :modalWindowName="modalWindowName"
          :isRed="isRed"
          :isBlack="isBlack"
        />
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
        paragraph: 'We don\'t just have experience with infrastructure management tools, our team helped develop some of them. We know where to get the cheapest price and the best service.'
      },
      upToSaving: {
        title: 'Up to 50% savings on infrastructure',
        subTitle: 'Pay-as-you-go receipts from your cloud providers make you curse them?',
        paragraph: 'Our fire brigade can help you optimise resource consumption like we\'ve done for 75% of our customers. We’ll reconfigure and disable every option or service that is not necessary.'
      },
      buttonInnerText: 'Get an infrastructure audit',
      isRed: false,
      isBlack: true,
      modalWindowName: 'infrastructure-modal'
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .infrastructure-optimisation {
    padding-top: 117px;
    padding-bottom: 154px;
    background-color: $bgcolor--grey-light;

    button {
      width: 100%;
    }

    .infrastructure-optimisation__content-item {
      &:first-child {
        /deep/.infrastructure-optimisation__title {
          max-width: 100%;
        }
      }

      &:nth-child(2) {
        /deep/.infrastructure-optimisation__title {
          max-width: 85%;
        }
      }
    }

    &__header {
      display: flex;
      justify-content: space-between;
      position: relative;
    }

    &__bg {
      background: url('../../assets/img/Services/svg/infrastructure-bg.svg') bottom right/contain no-repeat;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 107px;
      right: 0;
    }

    &__paragraph {
      line-height: 119%;
    }

    &__flex-wrapper {
      margin-top: 60px;
    }

    &__main-title {
      padding-bottom: 20px;
      color: $text-color--black;
      z-index: 99;

      span {
        color: $text-color--grey-light;
        -webkit-text-stroke: $text-stroke--black;
      }
    }
  }

  @media only screen and (max-width: 1280px) {
    .infrastructure-optimisation {
      padding-top: 72px;

      &__main-title {
        padding-bottom: 0;
      }
    }
  }

  @media only screen and (max-width: 870px) {
    /deep/.infrastructure-optimisation {
      &__title {
        max-width: 100%;
      }

      &__bg {
        display: none;
      }

      .infrastructure-optimisation__content-item {
        &:nth-child(2) {
          /deep/.infrastructure-optimisation__title {
            max-width: 100%;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .infrastructure-optimisation {
      padding-top: 65px;
      padding-bottom: 65px;

      &__flex-wrapper {
        margin-top: 38px;
      }
    }
  }

  @media only screen and (max-width: 656px) {
    .infrastructure-optimisation {
      &__flex-wrapper {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }

  @media only screen and (max-width: 520px) {
    .infrastructure-optimisation {
      padding: 60px 0;

      &__flex-wrapper  {
        margin-top: 20px;
      }
    }
  }

  @media only screen and (max-width: 375px) {
    .infrastructure-optimisation {
      &__flex-wrapper {
        margin-top: 42px;
      }
    }
  }

  @media only screen and (max-width: 340px) {
    .infrastructure-optimisation {
      &__main-title {
        font-size: 42px;
      }
    }
  }
</style>
