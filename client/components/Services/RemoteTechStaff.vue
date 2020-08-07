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
  @import '../../assets/styles/get-vw';

  .remote-tech-staff {
    padding: get-vw(211px) 0 get-vw(105px);
    background-color: $bgcolor--black;

    &__main-title {
      padding-bottom: get-vw(65px);
      color: $text-color--red;
    }
  }

  @media only screen and (min-width: 1024px) {
    .remote-tech-staff {
      /deep/.teams {
        .remote-tech-staff__sub-title.sub-title {
          margin-right: get-vw(10px);
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
      padding-top: get-vw(104px, 878);
    }
  }

  @media only screen and (max-width: 768px) {
    .remote-tech-staff {
      padding: get-vw(140px, 768) 0 get-vw(70px, 768);

      &__main-title {
        padding-bottom: get-vw(39px, 768)
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .remote-tech-staff {
      padding: get-vw(120px, 576) 0 get-vw(105px, 576);
    }
  }

  @media only screen and (max-width: 520px) {
    .remote-tech-staff {
      padding: get-vw(144px, 520) 0 23vw 0;
    }
  }
</style>
