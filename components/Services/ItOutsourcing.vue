<template>
  <section id="it-outsourcing" class="it-outsourcing">
    <div class="container">
      <div class="it-outsourcing__content-wrapper">
        <h1 class="it-outsourcing__main-title">IT Outsourcing</h1>
        <div class="it-outsourcing__flex-wrapper" id="it-outsourcing-content_items">
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
        title: "Teams",
        subTitle: "Tired of 20 or 30 people not delivering you any features?",
        paragraph: "How about only dealing with smart heads and capable hands? Enjoy our proactive rockets who will ask you to get them more work.",
        buttonInnerText: "Get a team of ultra-fast coders" 
      },
      individuals: {
        title: "Individuals",
        subTitle: "Seeing one, two, five guys working on a minor thing? Ha!",
        paragraph: "We are NOT going to bring you more people than you actually need. We'll just send one or two of our rangers to your frontier, and you'll enjoy peace of mind about IT.",
        buttonInnerText: "Get individual proactive rockets"
      }
    };
  },
};
</script>

<style lang="scss" scoped>
  .it-outsourcing {
    height: 100%;
    width: 100%;
    padding-top: 240px;
    background-color: #000;
    &__flex-wrapper {
      display: flex;
      justify-content: space-between;
    }

    &__main-title {
      padding-bottom: 65px;
      font-family: 'Hoves-Bold';
      font-size: 130px;
      color: #ec1c24;
    }
  }

   @media only screen and (max-width: 1024px) {
    .it-outsourcing {
      &__flex-wrapper {
        flex-direction: column;
      }
    }
  }

  @media only screen and (max-width: 870px) {
    .it-outsourcing {
      &__main-title {
        font-size: 95px;
      }
    }
  }

  @media only screen and (max-width: 640px) {
    .it-outsourcing {
      &__main-title {
        font-size: 80px;
      }
    }
  }

  @media only screen and (max-width: 520px) {
    .it-outsourcing {
      &__main-title {
        font-size: 53px;
      }
    }
  }

  @media only screen and (max-width: 320px) {
    .it-outsourcing {
      &__main-title {
        font-size: 49px;
      }
    }
  }
</style>