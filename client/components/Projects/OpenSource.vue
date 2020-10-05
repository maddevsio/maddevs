<template>
  <section id="open-source" class="open-source">
    <div class="container">
      <div>
        <h3 class="open-source__section-title section-title">
          Our code - available in open source - is used by many other companies.
        </h3>
        <div class="open-source__github-wrap">
          <h4 class="open-source__sub-title title-md">
            70+ of Mad Devs' pet projects have been shared with the community
            via GitHub.
          </h4>
          <a
            class="open-source__github-icon"
            href="https://github.com/maddevsio"
            target="_blank"
            ></a>
        </div>
      </div>
      <div class="open-source__projects">
        <div
          class="open-source__project"
          v-for="(openSource, i) in openSources"
          :key="i"
        >
          <a
            class="open-source__project-link"
            :href="openSource.link"
            target="_blank"
          >
            <div class="open-source__content-wrap">
              <MadLocationLogo v-if="openSource.imgName === 'mad_location'" />
              <AriadnaLogo v-else-if="openSource.imgName === 'ariadna'" />
              <HeimdallLogo v-else-if="openSource.imgName === 'heimdall'" />
              <ComedianLogo v-else-if="openSource.imgName === 'comedian'" />
              <IdMatchLogo v-else-if="openSource.imgName === 'id_match'" />
              <YourCastLogo v-else />
              <p class="open-source__industry">{{
                openSource.industry
              }}</p>
            </div>
            <p class="open-source__paragraph paragraph">
              {{ openSource.description }}
            </p>
          </a>
        </div>
        <a
          class="open-source__github-link"
          href="https://github.com/maddevsio"
          target="_blank"
        >
          View more on GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import MadLocationLogo from '@/components/Projects/MadLocationLogo';
import AriadnaLogo from '@/components/Projects/AriadnaLogo';
import HeimdallLogo from '@/components/Projects/HeimdallLogo';
import ComedianLogo from '@/components/Projects/ComedianLogo';
import IdMatchLogo from '@/components/Projects/IdMatchLogo';
import YourCastLogo from '@/components/Projects/YourCastLogo';

export default {
  name: 'OpenSource',
  components: {
    MadLocationLogo,
    AriadnaLogo,
    HeimdallLogo,
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
          link: 'https://github.com/maddevsio/mad-location-manager',
          description:
            'А library for GPS and accelerometer data "fusion" with a Kalman filter.'
        },
        {
          imgName: 'comedian',
          industry: 'Team Management',
          link: 'https://github.com/maddevsio/comedian',
          description:
            'A team-management system leveraging Slack and Telegram bot functionalities to enable remote standups and track daily performance.'
        },
        {
          imgName: 'ariadna',
          industry: 'Logistics',
          link: 'https://github.com/maddevsio/ariadna',
          description:
            'An open-source geocoder, built on top of ElasticSearch, for fast geocoding and better search for CIS countries.'
        },
        {
          imgName: 'id_match',
          industry: 'Security',
          link: 'https://github.com/maddevsio/idmatch',
          description:
            'An open source tool enabling ID cards recognition to ensure security on your premises.'
        },
        {
          imgName: 'your_cast',
          industry: 'Entertainment',
          link: 'https://github.com/maddevsio/yourcast.tv',
          description:
            'A solution to create lists of YouTube videos and stream them online in just a few seconds.'
        },
        {
          imgName: 'heimdall',
          industry: 'Security',
          link: 'https://github.com/maddevsio/heimdall',
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

  &__github-wrap {
    max-width: 68%;
    min-width: 60%;
  }

  &__sub-title {
    color: $text-color--grey;
    display: inline;
  }

  &__github-icon {
    position: relative;

    &::after {
      content: url('../../assets/img/Projects/svg/github.svg');
      position: absolute;
      width: 128px;
      height: 121px;
      left: 0;
      bottom: -73px;
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
    width: min-content;
    font-family: 'Poppins-Regular', sans-serif;;
    color: $text-color--black;
    opacity: 0.5;
    visibility: hidden;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.02em;
  }

  &__paragraph {
    padding-right: 31px;
  }

  &__project-link {
    display: block;
    text-decoration: none;
    color: inherit;
    height: 100%;
    padding: 52px 30px 100px 43px;
  }

  &__project {
    display: flex;
    flex-direction: column;
    background: $bgcolor--white;
    width: 33%;
    box-sizing: border-box;
    border-right: 2px solid $border-color--grey-light;
    border-bottom: 2px solid $border-color--grey-light;

    &:hover {
      color: $bgcolor--white;
    }

    &:hover .open-source__industry {
      visibility: visible;
      color: $text-color--grey-light;
      opacity: 1;
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

    &:nth-child(6) {
      &:hover {
        background: $project-hover-bg-color--violet;
      }
    }
  }

  &__github-link {
    text-align: center;
    letter-spacing: -0.02em;
    font-style: normal;
    font-size: 36px;
    line-height: 99%;
    margin: 0 auto;
    font-family: 'Poppins-Bold', sans-serif;;
    color: $text-color--red;
    margin-top: 32px;
    border-bottom: 1px solid $border-color--red;
    cursor: pointer;
    text-decoration: none;
  }
}

@media only screen and (max-width: 1180px) {
  .open-source {
    &__github-icon {
      &::after {
        width: 80px;
        height: 74px;
        bottom: -39px;
        left: 0;
      }
    }

    &__github-link {
      font-size: 33px;
    }
  }
}

@media only screen and (max-width: 1024px) {
  .open-source {
    padding-bottom: 150px;

    &__paragraph {
      padding-right: 21px;
    }

    &__industry {
      font-size: 14px;
    }

    &__github-link {
      font-size: 30px;
    }
  }
}

@media only screen and (max-width: 920px) {
  .open-source {
    padding-bottom: 100px;

    &__paragraph {
      padding-right: 11px;
    }

    &__industry {
      font-size: 16px;
    }

    &__project {
      width: 50%;
    }

    &__github-wrap {
      max-width: 100%;
    }
  }
}

@media only screen and (max-width: 860px) {
  .open-source {
    &__industry {
      font-size: 14px;
    }
  }
}

@media only screen and (max-width: 624px) {
  .open-source {
    padding-bottom: 50px;

    &__paragraph {
      padding-right: 31px;
    }

    &__projects {
      margin-bottom: 31px;
    }

    &__project {
      width: 100%;
      border-right: 0;
    }

    &__github-icon {
      &::after {
        width: 63px;
        height: 59px;
        bottom: -29px;
      }
    }

    &__industry {
      opacity: 1;
      visibility: visible;
      font-size: 16px;
    }

    &__github-link {
      font-size: 20px;
    }
  }
}

@media only screen and (max-width: 520px) {
  .open-source {
    padding-top: 35px;
    margin-top: 35px;

    &__paragraph {
      padding-right: 0;
    }

    &__project-link {
      padding: 36px 25px 49px 22px;
    }

    &__github-link {
      font-size: 17px;
    }
  }
}

@media only screen and (max-width: 350px) {
  .open-source {
    &__industry {
      font-size: 13px;
    }
  }
}
</style>
