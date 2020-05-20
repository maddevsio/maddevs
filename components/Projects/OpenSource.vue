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
        <div
          class="open-source__project"
          v-for="(openSource, i) in openSources"
          :key="i"
        >
          <div class="open-source__content-wrap">
            <MadLocationLogo v-if="openSource.imgName === 'mad_location'" />
            <AriadnaLogo v-else-if="openSource.imgName === 'ariadna'" />
            <HeimdailLogo v-else-if="openSource.imgName === 'heimdail'" />
            <ComedianLogo v-else-if="openSource.imgName === 'comedian'" />
            <IdMatchLogo v-else-if="openSource.imgName === 'id_match'" />
            <YourCastLogo v-else />
            <span class="open-source__industry">{{ openSource.industry }}</span>
          </div>
          <p class="open-source__paragraph paragraph">
            {{ openSource.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MadLocationLogo from '@/components/Projects/MadLocationLogo';
import AriadnaLogo from '@/components/Projects/AriadnaLogo';
import HeimdailLogo from '@/components/Projects/HeimdailLogo';
import ComedianLogo from '@/components/Projects/ComedianLogo';
import IdMatchLogo from '@/components/Projects/IdMatchLogo';
import YourCastLogo from '@/components/Projects/YourCastLogo';

export default {
  name: 'OpenSource',
  components: {
    MadLocationLogo,
    AriadnaLogo,
    HeimdailLogo,
    ComedianLogo,
    IdMatchLogo,
    YourCastLogo
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
          imgName: 'heimdail',
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

  &__content-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 36px;
  }

  &__industry {
    font-family: 'Hoves-Regular';
    color: $text-color--grey-light;
    font-size: 13px;
    font-weight: 300;
    display: none;
  }

  &__paragraph {
    padding-right: 61px;
  }

  &__project {
    display: flex;
    flex-direction: column;
    background: $bgcolor--white;
    width: 33%;
    box-sizing: border-box;
    padding: 52px 30px 100px 43px;
    border-right: 2px solid $border-color--grey-light;
    border-bottom: 2px solid $border-color--grey-light;

    &:hover {
      color: $bgcolor--white;
    }

    &:hover .open-source__industry {
      display: block;
    }

    &:hover /deep/ .fill1,
    &:hover /deep/ .fill2 {
      fill: $project-hover-bg-color--white;
    }

    &:hover /deep/ #fill5 {
      stop-color: $project-hover-bg-color--white;
    }

    &:hover /deep/ #fill4 {
      stop-color: $project-hover-bg-color--pink-soft;
    }

    &:first-child {
      &:hover {
        background: $project-hover-bg-color--blue;
      }
    }

    &:nth-child(2) {
      &:hover {
        background: $project-hover-bg-color--blue-dimmed;
      }
    }

    &:nth-child(3) {
      &:hover {
        background: $project-hover-bg-color--blue-light;
      }
    }

    &:nth-child(4) {
      &:hover {
        background: $project-hover-bg-color--black;
      }
    }

    &:nth-child(5) {
      &:hover {
        background: $project-hover-bg-color--pink;
      }
    }

    &:last-child {
      &:hover {
        background: $project-hover-bg-color--violet;
      }
    }
  }
}
</style>
