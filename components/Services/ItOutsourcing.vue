<template>
  <section id="it-outsourcing" class="it-outsourcing">
    <div class="container">
      <div class="it-outsourcing__content-wrapper">
        <h1 class="it-outsourcing__title">IT Outsourcing</h1>
        <div class="it-outsourcing__flex-wrapper">
          <OutsourcingContent 
            :title="teams.title" 
            :subTitle="teams.subTitle" 
            :paragraph="teams.paragraph"
            :buttonInnerText="teams.buttonInnerText"
          />
          <OutsourcingContent 
            :title="individuals.title" 
            :subTitle="individuals.subTitle" 
            :paragraph="individuals.paragraph"
            :buttonInnerText="individuals.buttonInnerText"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import OutsourcingContent from './OutsourcingContent';

export default {
  name: 'ItOutsourcing',
  components: {
    OutsourcingContent
  },
  data() {
    return {
      teams: {
        title: "Tea  s",
        subTitle: "Tired of 20 or 30 people not delivering you any features?",
        paragraph: "How about only dealing with smart heads and capable hands? Enjoy our proactive rockets who will ask you to get them more work.",
        buttonInnerText: 'Get a team of ultra-fast coders'
      },
      individuals: {
        title: "Individuals",
        subTitle: "Seeing one, two, five guys working on a minor thing? Ha!",
        paragraph: "We are NOT going to bring you more people than you actually need. We'll just send one or two of our rangers to your frontier, and you'll enjoy peace of mind about IT.",
        buttonInnerText: 'Get individual proactive rockets'
      }
    };
  },
};
</script>

<style lang="scss" scoped>
  
</style>