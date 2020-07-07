<template>
  <section id="remote-tech-staff" class="remote-tech-staff main-parent-item">
    <div class="container">
      <div class="remote-tech-staff__content-wrapper">
        <h2 class="remote-tech-staff__main-title main-title">Remote Tech Staff</h2>
        <div class="remote-tech-staff__flex-wrapper flex-wrapper">
          <RemoteTechStaffContent 
            :title="teams.title" 
            :subTitle="teams.subTitle" 
            :paragraph="teams.paragraph"
            :buttonInnerText="teams.buttonInnerText"
            :modalWindowName="teams.modalWindowName"
            class="teams"
          />
          <RemoteTechStaffContent 
            :title="individuals.title" 
            :subTitle="individuals.subTitle" 
            :paragraph="individuals.paragraph"
            :buttonInnerText="individuals.buttonInnerText"
            :modalWindowName="individuals.modalWindowName"
            class="individuals"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RemoteTechStaffContent from '@/components/Services/RemoteTechStaffContent';

export default {
  name: 'RemoteTechStaff',
  components: {
    RemoteTechStaffContent
  },
  data() {
    return {
      teams: {
        title: 'Teams',
        subTitle: 'Tired of 20 or 30 people not delivering you any features?',
        paragraph: 'How about only dealing with smart heads and capable hands? Enjoy our proactive rockets who will ask you to get them more work.',
        buttonInnerText: 'Get a team of ultra-fast coders',
        modalWindowName: 'teams-modal'
      },
      individuals: {
        title: 'Individuals',
        subTitle: 'Seeing one, two, five guys working on a minor thing? Ha!',
        paragraph: 'We are NOT going to bring you more people than you actually need. We\'ll just send one or two of our rangers to your frontier, and you\'ll enjoy peace of mind about IT.',
        buttonInnerText: 'Get individual proactive rockets',
        modalWindowName: 'individuals-modal'
      }
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .remote-tech-staff {
    padding: 211px 0 105px;
    background-color: $bgcolor--black;

    &__main-title {
      padding-bottom: 65px;
      color: $text-color--red;
    }
  }

  @media only screen and (min-width: 1024px) {
    .remote-tech-staff {
      /deep/.teams {
        .remote-tech-staff__sub-title.sub-title {
          margin-right: 10px;
        }
      }
    }
  }

  @media only screen and (max-width: 878px) {
    .remote-tech-staff {
      &__flex-wrapper {
        flex-direction: column;
      }

      &__outsourcing-content {
        max-width: 100%;
      }
    }

    .individuals {
      padding-top: 104px;
    }
  }

  @media only screen and (max-width: 768px) {
    .remote-tech-staff {
      padding: 140px 0 70px;

      &__main-title {
        padding-bottom: 39px;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .remote-tech-staff {
      padding: 120px 0 105px;
    }
  }

  @media only screen and (max-width: 520px) {
    .remote-tech-staff {
      padding: 144px 0 0 0;
    }
  }

  @media only screen and (max-width: 375px) {
    .remote-tech-staff {
      padding: 86px 0 20px;

      &__main-title {
        padding-bottom: 26px;
      }
    }
  }
</style>
