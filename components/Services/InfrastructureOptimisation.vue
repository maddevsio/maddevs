<template>
  <section id="infrastructure-optimisation" class="infrastructure-optimisation main-parent-item">
    <div class="container">
        <h1 class="infrastructure-optimisation__main-title main-title">
            <span>Infrastructure</span><br>Optimisation
        </h1>
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
        <buttonTrigger :buttonInnerText="buttonInnerText" />
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
        title: 'What makes us stand out?',
        subTitle: 'Optimising teams don’t care for tomorrow’s traffic peaks? We care!',
        paragraph: 'We don\'t just have experience with infrastructure management tools, our team helped develop some of them. We know where to get the cheapest price and the best service.'
      },
      upToSaving: {
        title: 'Up to savings on infrastructure',
        subTitle: 'Pay-as-you-go receipts from your cloud providers make you curse them?',
        paragraph: 'Our fire brigade can help you optimise resource consumption like we\'ve done for 75% of our customers. We’ll reconfigure and disable every option or service that is not necessary.'
      },
      buttonInnerText: 'Get an infrastructure audit'
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .infrastructure-optimisation {
    padding-top: 117px;
    background-color: $bgcolor--grey-light;

    button {
      width: 100%;
    }

    &__flex-wrapper {
      margin-top: 60px;
    }

    &__main-title {
      color: $text-color--black;

      span {
        color: $text-color--grey-light;
        text-shadow: $text-shadow--black;
      }
    }
  }
</style>