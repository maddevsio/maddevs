<template>
  <section id="open-source" class="open-source">
    <div class="container">
      <div class="open-source__top-text-content">
        <h3 class="open-source__main-title">Our code - available in open source - is used by many other companies.</h3>
        <div class="open-source__github-wrap">
          <p class="open-source__description">70+ of <span>Mad Devs'</span> pet projects have been shared with <br> the community via GitHub.</p>
          <a class="open-source__github-icon" href="https://github.com/maddevsio" target="_blank"></a>
        </div>
      </div>
      <div class="open-source__projects row">
        <div class="col-xl-4 col-lg-4 col-md-6" v-for="(openSource, i) in openSources" :key="i">
          <div class="open-source__project" :class="`open-source__project-${openSource.projectName}`">
            <a class="open-source__project-link" :href="openSource.link" target="_blank">
              <div class="open-source__content-wrap">
                <div :class="`open-source__icon open-source__${openSource.projectName}`"></div>
                <!-- <p class="open-source__industry">{{ openSource.industry }}</p> -->
              </div>
              <p class="open-source__paragraph" v-html="openSource.description">{{ openSource.description }}</p>
            </a>
          </div>
        </div>
      </div>
      <a class="open-source__github-link" href="https://github.com/maddevsio" target="_blank">View more on GitHub</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OpenSource',
  data() {
    return {
      openSources: [
        {
          projectName: 'mad-location',
          industry: 'Logistics',
          link: 'https://github.com/maddevsio/mad-location-manager',
          description: 'А library for GPS and accelerometer data "fusion" with a Kalman filter.'
        },
        {
          projectName: 'comedian',
          industry: 'Team Management',
          link: 'https://github.com/maddevsio/comedian',
          description: 'A <span>team-management</span> system leveraging Slack and Telegram bot functionalities to enable remote standups and track daily performance.'
        },
        {
          projectName: 'ariadna',
          industry: 'Logistics',
          link: 'https://github.com/maddevsio/ariadna',
          description: 'An <span>open-source</span> geocoder, built on top of ElasticSearch, for fast geocoding and better search for CIS countries.'
        },
        {
          projectName: 'id-match',
          industry: 'Security',
          link: 'https://github.com/maddevsio/idmatch',
          description: 'An open source tool enabling ID cards recognition to ensure security on your premises.'
        },
        {
          projectName: 'your-cast',
          industry: 'Entertainment',
          link: 'https://github.com/maddevsio/yourcast.tv',
          description: 'A solution to create lists of YouTube videos and stream them online in just a few seconds.'
        },
        {
          projectName: 'heimdall',
          industry: 'Security',
          link: 'https://github.com/maddevsio/heimdall',
          description: 'A <span>security-monitoring</span> solution for Ethereum smart contracts.'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';
@import '../../assets/styles/_openSourceIcons';

.open-source {
  padding-bottom: 25px;
  background: $bgcolor--white;

  &__main-title,
  &__description,
  &__github-link {
    text-align: center;
  }

  &__main-title {
    @include h2_title;
    padding-bottom: 15px;
  }

  &__top-text-content {
    margin-bottom: 20px;
  }

  &__description,
  &__paragraph,
  &__github-link,
  &__industry {
    font-family: 'Poppins-Regular';
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: $text-color--black-lighter;

    span {
      white-space: nowrap;
    }
  }

  &__github-wrap {
    display: flex;
    justify-content: center;
    margin-right: -13px;
  }

  &__github-icon {
    width: 84px;
    height: 79px;
    display: block;
    margin-top: -24px;
    margin-left: -1px;
    @include github-icon;
  }


  &__github-link {
    display: block;
    color: $text-color--red;
  }

  &__content-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 31px;
  }

  &__industry {
    display: none;
    width: min-content;
    color: $text-color--black-lighter;
  }

  &__project-link {
    display: block;
    text-decoration: none;
    height: 100%;
    padding: 32px 32px 60px;
  }

  &__projects {
    margin-bottom: 36px;
  }

  &__project {
    width: 100%;
    height: 100%;
    min-height: 260px;
    display: flex;
    flex-direction: column;
    background-color: $bgcolor--white-darken;
    transition: 0.4s;

    &:hover  {
      .open-source__paragraph,
      .open-source__industry {
        color: $text-color--white-darken;
      }

      .open-source__industry {
        display: block;
      }
    }

    @media only screen and (max-width: 767px) {
      min-height: unset;
    }
  }

  &__project-mad-location {
    &:hover {
      background-color: $project-hover-bg-color--blue;

      .open-source__mad-location {
        @include mad-location-white;
      }
    }
  }

  &__project-comedian {
    &:hover {
      background-color: $project-hover-bg-color--blue-dimmed;

      .open-source__comedian {
        @include comedian-white;
      }
    }
  }

  &__project-ariadna {
    &:hover {
      background-color: $project-hover-bg-color--blue-light;

      .open-source__ariadna {
        @include ariadna-white;
      }
    }
  }

  &__project-id-match {
    &:hover {
      background-color: $project-hover-bg-color--black;

      .open-source__id-match {
        @include id-match-white;
      }
    }
  }

  &__project-your-cast {
    &:hover {
      background-color: $project-hover-bg-color--pink;

      .open-source__your-cast  {
        @include your-cast-white;
      }
    }
  }

  &__project-heimdall {
    &:hover {
      background-color: $project-hover-bg-color--violet;

      .open-source__heimdall {
        @include heimdall-white;
      }
    }
  }

  &__icon {
    display: block;
    width: 229px;
    height: 50px;
  }

  &__mad-location {
    @include mad-location;
  }

  &__comedian {
    @include comedian;
  }

  &__ariadna {
    @include ariadna;
  }

  &__id-match {
    @include id-match;
  }

  &__your-cast {
    @include your-cast;
  }

  &__heimdall {
    @include heimdall;
  }

  @media only screen and (max-width: 690px) {
    &__github-wrap {
      margin-right: 0;
    }

    &__description {
      position: relative;

      &::before {
        content: '';
        width: 35px;
        height: 35px;
        position: absolute;
        margin-left: 300px;
        top: 20px;
        @include github-icon;
      }
    }
    
    &__github-icon {
      display: none;
    }
  }

  @media only screen and (max-width: 490px) {
     &__description {
      br {
        display: none;
      }

      &::before {
        margin-left: 300px;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    &__description {
      br {
        display: block;
      }

      &::before {
        top: 42px;
        margin-left: 253px;
      }
    }
  }

  @media only screen and (max-width: 356px) {
    &__description {
      &::before {
        margin-left: 232px;
      }
    }
  }
}
</style>
