<template>
  <section
    id="remote-tech-staff"
    class="remoteTechStaff main-parent-item"
  >
    <div class="container">
      <h2 class="remoteTechStaff__main-title">
        Remote <br class="remoteTechStaff__small-screen-break">
        Tech Staff
      </h2>
      <div class="remoteTechStaff__tech-staff-items">
        <RemoteTechStaffContent
          v-bind="teams"
          data-testid="test-term"
          :hovered="hovered === 'teams'"
          @mouseover="handleMouseOver"
          @mouseout="handleMouseOut"
          @click="$refs.modalTeams.show()"
        />
        <RemoteTechStaffContent
          v-bind="individuals"
          :hovered="hovered === 'individuals'"
          @mouseover="handleMouseOver"
          @mouseout="handleMouseOut"
          @click="$refs.modalIndividuals.show()"
        />
      </div>
    </div>
    <!-- "teams-modal" - id for google analytic -->
    <ModalTeams
      id="teams-modal"
      ref="modalTeams"
    />
    <!-- "individuals-modal" - id for google analytic -->
    <ModalIndividuals
      id="individuals-modal"
      ref="modalIndividuals"
    />
  </section>
</template>

<script>
import RemoteTechStaffContent from '@/components/Services/RemoteTechStaffContent'
import ModalTeams from '@/components/core/modals/ModalTeams'
import ModalIndividuals from '@/components/core/modals/ModalIndividuals'

export default {
  name: 'RemoteTechStaff',
  components: {
    RemoteTechStaffContent,
    ModalTeams,
    ModalIndividuals,
  },

  data() {
    return {
      teams: {
        title: 'Teams',
        subtitle: 'Tired of 20 or 30 people not delivering you any features?',
        paragraph:
          'How about only dealing with smart heads and capable hands? Enjoy our proactive rockets who will ask you to get them more work.',

        buttonLabel: 'Get a team of ultra-fast coders',
        type: 'teams',
      },

      individuals: {
        title: 'Individuals',
        subtitle: 'Seeing one, two, five guys working on a minor thing? Ha!',
        paragraph:
          'We are NOT going to bring you more people than you actually need. We\'ll just send one or two of our rangers to your frontier, and you\'ll enjoy peace of mind about IT.',

        buttonLabel: 'Get individual proactive rockets',
        type: 'individuals',
      },

      hovered: 'teams',
    }
  },

  methods: {
    handleMouseOver(type) {
      this.hovered = type
    },

    handleMouseOut() {
      // teams is hovered by default
      this.hovered = 'teams'
    },
  },
}
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
