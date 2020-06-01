<template>
  <section id="it-consulting" class="it-consulting main-parent-item">
    <div class="container">
        <h2 class="it-consulting__main-title main-title">
            IT Consulting
        </h2>
        <div class="it-consulting__flex-wrapper flex-wrapper">
         <ItConsultingContent 
            :title="TechnologyStack.title" 
            :subTitle="TechnologyStack.subTitle" 
            :paragraph="TechnologyStack.paragraph"
            :buttonInnerText="TechnologyStack.buttonInnerText"
            :modalWindowName="TechnologyStack.modalWindowName"
          />
          <ItConsultingContent 
            :title="ProcessAudit.title" 
            :subTitle="ProcessAudit.subTitle" 
            :paragraph="ProcessAudit.paragraph"
            :buttonInnerText="ProcessAudit.buttonInnerText"
            :modalWindowName="ProcessAudit.modalWindowName"
          />
          <ItConsultingContent 
            :title="TeamHeadcount.title" 
            :subTitle="TeamHeadcount.subTitle" 
            :paragraph="TeamHeadcount.paragraph"
            :buttonInnerText="TeamHeadcount.buttonInnerText"
            :modalWindowName="TeamHeadcount.modalWindowName"
          />
        </div>
    </div>
  </section>
</template>

<script>
import ItConsultingContent from '@/components/Services/ItConsultingContent';

export default {
  name: 'ItConsulting',
  components: {
    ItConsultingContent
  },
  data() {
    return {
      TechnologyStack: {
        title: 'Technology Stack',
        subTitle: 'Tired of the slow and hard-to- maintain technology that your previous team used?',
        paragraph: 'We’ll help you resolve this with minimal changes using proper optimisations, updates and code refactoring.',
        buttonInnerText: 'Get advice on tech stack',
        modalWindowName: 'technology-stack'
      },
      ProcessAudit: {
        title: 'Process Audit',
        subTitle: 'Have to constantly deal with extended deadlines and mess-ups?',
        paragraph: 'Your process probably just lacks transparency and reasonable control. We know how to avoid this and check who does what right now.',
        buttonInnerText: 'Get advice on process',
        modalWindowName: 'process-audit'
      },
      TeamHeadcount: {
        title: 'Team Headcount',
        subTitle: 'Is your team too big or too small and therefore causing trouble?',
        paragraph: 'Hire good people and get rid of underperformers. Easier said than done, right? Get assessments for the skills and seniority level of your staff. Our positively mad engineers and PMs know how to do this.',
        buttonInnerText: 'Get advice on team',
        modalWindowName: 'team-headcount'
      }
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .it-consulting {
    padding-top: 127px;
    padding-bottom: 151px;
    background-color: $bgcolor--white;

    &__flex-wrapper {
      margin-top: -40px;
    }

    &__main-title {
      color: $text-color--black;
    }
  }

  @media only screen and (max-width: 1024px) {
    .it-consulting {
      &__flex-wrapper {
        flex-wrap: wrap;
      }
    }
  }

  @media only screen and (max-width: 520px) {
    .it-consulting {
      padding-top: 60px;
      padding-bottom: 75px;
    }
  }
</style>
