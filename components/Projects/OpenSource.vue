<template>
  <section id="open-source" class="open-source">
    <div class="container">
      <div>
        <h3 class="open-source__section-title section-title">
          Our code - available in open source - is used by many other companies.
        </h3>
        <h4 class="open-source__sub-title sub-title">
          70+ of Mad Devs' pet projects have been shared with the community via
          GitHub.
        </h4>
      </div>
      <div class="open-source__projects">
        <OpenSourceProject
          v-for="(openSource, i) in openSources"
          :openSource="openSource"
          :key="i"
        />
      </div>
    </div>
  </section>
</template>

<script>
import OpenSourceProject from '@/components/Projects/OpenSourceProject';

export default {
  name: 'OpenSource',
  components: {
    OpenSourceProject
  },
  data() {
    return {
      openSources: [
        {
          imgName: 'mad_location',
          industry: 'Logistics',
          description:
            'А library for GPS and accelerometer data "fusion" with a Kalman filter.'
        },
        {
          imgName: 'comedian',
          industry: 'Team Management',
          description:
            'A team-management system leveraging Slack and Telegram bot functionalities to enable remote standups and track daily performance.'
        },
        {
          imgName: 'ariadna',
          industry: 'Logistics',
          description:
            'An open-source geocoder, built on top of ElasticSearch, for fast geocoding and better search for CIS countries.'
        },
        {
          imgName: 'id_match',
          industry: 'Security',
          description:
            'An open source tool enabling ID cards recognition to ensure security on your premises.'
        },
        {
          imgName: 'your_cast',
          industry: 'Entertainment',
          description:
            'A solution to create lists of YouTube videos and stream them online in just a few seconds.'
        },
        {
          imgName: 'heimdal',
          industry: 'Security',
          description:
            'A security-monitoring solution for Ethereum smart contracts.'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.open-source {
  padding: 99px 0 205px;
  margin-top: 120px;
  background: $bgcolor--grey-light;

  &__section-title {
    margin-bottom: 31px;
    position: relative;
  }

  &__sub-title {
    color: $text-color--grey;

    &::after {
      content: url('../../assets/img/Projects/svg/github.svg');
      position: relative;
      right: 10px;
      top: 25px;
    }
  }

  &__projects {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 76px;
  }

  &__project {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: $bgcolor--white;
    height: 270px;
    width: 33%;
    box-sizing: border-box;
    padding: 43px 30px 64px 43px;
    border-right: 2px solid $border-color--grey-light;
    border-bottom: 2px solid $border-color--grey-light;
  }
}
</style>
