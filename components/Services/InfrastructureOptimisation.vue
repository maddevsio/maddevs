<template>
  <section id="infrastructure-optimisation" class="infrastructure-optimisation main-parent-item">
    <div class="container">
        <h2 class="infrastructure-optimisation__main-title main-title">
            <span>Infrastructure</span><br>Optimisation
        </h2>
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
        <buttonTrigger :buttonInnerText="buttonInnerText" :modalWindowName="modalWindowName"/>
    </div>
  </section>
</template>

<script>
import InfrastructureContent from '@/components/Services/InfrastructureContent';
import buttonTrigger from '@/components/ui/button-trigger';

export default {
  name: 'InfrastructureOptimisation',
  components: {
    InfrastructureContent,
    buttonTrigger
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

    &__paragraph {
      line-height: 119%;
    }

    &__flex-wrapper {
      margin-top: 60px;
    }

    &__main-title {
      padding-bottom: 20px;
      color: $text-color--black;

      span {
        color: $text-color--grey-light;
        text-shadow: $text-shadow--black;
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
