<template>
  <section id="remote-tech-staff" class="remoteTechStaff main-parent-item">
    <div class="container">
      <h2 class="remoteTechStaff__main-title">Remote Tech Staff</h2>
      <div class="remoteTechStaff__tech-staff-items">
        <RemoteTechStaffContent 
          :title="teams.title" 
          :subTitle="teams.subTitle" 
          :paragraph="teams.paragraph"
          :buttonInnerText="teams.buttonInnerText"
          :modalWindowName="teams.modalWindowName"
        />
        <RemoteTechStaffContent 
          :title="individuals.title" 
          :subTitle="individuals.subTitle" 
          :paragraph="individuals.paragraph"
          :buttonInnerText="individuals.buttonInnerText"
          :modalWindowName="individuals.modalWindowName"
        />
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

  .remoteTechStaff {
    background-color: $bgcolor--black;

    &__main-title {
      margin-bottom: 63px;
      font-size: 62px;
      font-family: 'Poppins-Bold';
      line-height: 74px;
      letter-spacing: -1px;
      color: $text-color--red;
    }

    &__tech-staff-items {
      display: flex;
      justify-content: space-between;

      @media only screen and (max-width: 1023px) {
        flex-direction: column;
      }
    }
  }
</style>
