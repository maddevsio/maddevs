<template>
  <section id="it-outsourcing" class="it-outsourcing main-parent-item">
    <div class="container">
      <div class="it-outsourcing__content-wrapper">
        <h2 class="it-outsourcing__main-title main-title">IT Outsourcing</h2>
        <div class="it-outsourcing__flex-wrapper flex-wrapper">
          <OutsourcingContent 
            :title="teams.title" 
            :subTitle="teams.subTitle" 
            :paragraph="teams.paragraph"
            :buttonInnerText="teams.buttonInnerText"
            class="teams"
          />
          <OutsourcingContent 
            :title="individuals.title" 
            :subTitle="individuals.subTitle" 
            :paragraph="individuals.paragraph"
            :buttonInnerText="individuals.buttonInnerText"
            class="individuals"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import OutsourcingContent from '@/components/Services/OutsourcingContent';

export default {
  name: 'ItOutsourcing',
  components: {
    OutsourcingContent
  },
  data() {
    return {
      teams: {
        title: 'Teams',
        subTitle: 'Tired of 20 or 30 people not delivering you any features?',
        paragraph: 'How about only dealing with smart heads and capable hands? Enjoy our proactive rockets who will ask you to get them more work.',
        buttonInnerText: 'Get a team of ultra-fast coders'
      },
      individuals: {
        title: 'Individuals',
        subTitle: 'Seeing one, two, five guys working on a minor thing? Ha!',
        paragraph: 'We are NOT going to bring you more people than you actually need. We\'ll just send one or two of our rangers to your frontier, and you\'ll enjoy peace of mind about IT.',
        buttonInnerText: 'Get individual proactive rockets'
      }
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .it-outsourcing {
    padding: 240px 0;
    background-color: $bgcolor--black;

    &__main-title {
      padding-bottom: 65px;
      color: $text-color--red;
    }
  }

  @media only screen and (max-width: 1024px) {
    .it-outsourcing {
      &__flex-wrapper {
        flex-direction: column;
      }
    }
  }
</style>
