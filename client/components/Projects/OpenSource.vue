<template>
  <section id="open-source" class="open-source">
    <div class="container">
      <div>
        <h3 class="open-source__section-title section-title">
          Our code - available in open source - is used by many other companies.
        </h3>
        <div class="open-source__github-wrap">
          <h4 class="open-source__sub-title sub-title">
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
@import '../../assets/styles/get-vw';

.open-source {
  padding: get-vw(99px) 0 get-vw(205px);
  margin-top: get-vw(120px);
  background: $bgcolor--grey-light;

  &__section-title {
    margin-bottom: get-vw(31px);
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
      width: get-vw(128px);
      height: get-vw(121px);
      left: 0;
      bottom: get-vw(-73px);
    }
  }

  &__projects {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: get-vw(76px);
  }

  &__content-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: get-vw(36px);
  }

  &__industry {
    width: min-content;
    font-family: 'Hoves-Regular';
    color: $text-color--black;
    opacity: 0.5;
    visibility: hidden;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.02em;
  }

  &__project-link {
    display: block;
    text-decoration: none;
    color: inherit;
    height: 100%;
    padding: get-vw(52px) get-vw(30px) get-vw(100px) get-vw(43px);
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
    font-size: get-vw(36px);
    line-height: 99%;
    margin: 0 auto;
    font-family: 'Hoves-Bold';
    color: $text-color--red;
    margin-top: get-vw(32px);
    border-bottom: 1px solid $border-color--red;
    cursor: pointer;
    text-decoration: none;
  }

  svg {
    height: get-vw(50px);
    width: get-vw(220px);
  }
}

@media only screen and (max-width: 1180px) {
  .open-source {
    svg {
      height: inherit;
      width: inherit;
    }
  }
}



@media only screen and (max-width: 1024px) {
  .open-source {
    padding-bottom: get-vw(150px, 1024);

    &__paragraph {
      padding-right: get-vw(21px, 1024);
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

    &__paragraph {
      padding-right: get-vw(31px, 624);
    }

    &__projects {
      margin-bottom: get-vw(31px);
    }

    &__project {
      width: 100%;
      border-right: 0;
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

    &__projects {
      margin-top: 17.5vw;
      margin-bottom: 0;
    }

    &__paragraph {
      padding-right: 0;
    }

    &__project-link {
      padding: 36px 25px 49px 22px;
    }

    &__github-link {
      font-size: 17px;
      margin-top: 14vw;
    }

    &__content-wrap {
      margin-bottom: 4vw;
    }
  }
}

@media only screen and (max-width: 420px) {
  .open-source {
    &__github-icon {
      &::after {
        width: 18.61905vw;
        height: 8.20238vw;
        left: 0;
        bottom: 0.65476vw;
      }
    }
  }

}
</style>
