<template>
  <section id="remote-tech-staff" class="remoteTechStaff main-parent-item">
    <div class="container">
      <h2 class="remoteTechStaff__main-title">Remote <br class="remoteTechStaff__small-screen-break"> Tech Staff</h2>
      <div class="remoteTechStaff__tech-staff-items">
        <RemoteTechStaffContent 
          :title="teams.title" 
          :subTitle="teams.subTitle" 
          :paragraph="teams.paragraph"
          :buttonInnerText="teams.buttonInnerText"
          @onClick="$refs.teamsModal.show()"
          :activeByDefault="teams.activeByDefault"
        />
        <RemoteTechStaffContent 
          :title="individuals.title" 
          :subTitle="individuals.subTitle" 
          :paragraph="individuals.paragraph"
          :buttonInnerText="individuals.buttonInnerText"
          @onClick="$refs.individualsModal.show()"
          :activeByDefault="individuals.activeByDefault"
        />
      </div>
    </div>

    <Modal ref="teamsModal">
      <teamsModal />
    </Modal>
    <Modal ref="individualsModal">
      <individualsModal />
    </Modal>
  </section>
</template>

<script>
import RemoteTechStaffContent from '@/components/Services/RemoteTechStaffContent';
import teamsModal from '@/components/Modals/teams-modal';
import individualsModal from '@/components/Modals/individuals-modal';
import Modal from '@/containers/Modal';

export default {
  name: 'RemoteTechStaff',
  components: {
    RemoteTechStaffContent,
    teamsModal,
    individualsModal,
    Modal
  },
  data() {
    return {
      teams: {
        title: 'Teams',
        subTitle: 'Tired of 20 or 30 people not delivering you any features?',
        paragraph: 'How about only dealing with smart heads and capable hands? Enjoy our proactive rockets who will ask you to get them more work.',
        buttonInnerText: 'Get a team of ultra-fast coders',
        modalWindowName: 'teams-modal',
        activeByDefault: true
      },
      individuals: {
        title: 'Individuals',
        subTitle: 'Seeing one, two, five guys working on a minor thing? Ha!',
        paragraph: 'We are NOT going to bring you more people than you actually need. We\'ll just send one or two of our rangers to your frontier, and you\'ll enjoy peace of mind about IT.',
        buttonInnerText: 'Get individual proactive rockets',
        modalWindowName: 'individuals-modal',
        activeByDefault: false
      }
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .remoteTechStaff {
    background-color: $bgcolor--black;

    &__main-title {
      @include h2_title;
      color: $text-color--red;
    }

    &__small-screen-break {
      display: none;
      
      @media only screen and (max-width: 370px) {
        display: block;
      }
    }

    &__tech-staff-items {
      display: flex;
      justify-content: space-between;
      margin-top: 38px;
    }

    @media only screen and (max-width: 1280px) {
      &__tech-staff-items {
        margin-top: 18px;
      }
    }

    @media only screen and (max-width: 1023px) {
      &__tech-staff-items {
        flex-direction: column;
      }
    }

    @media only screen and (max-width: 834px) {
      padding-bottom: 25px;

      &__tech-staff-items {
        margin-top: 20px;
      }
    }

    @media screen and (max-width: 578px) {
      padding-bottom: 47px;
    }
  }
</style>
