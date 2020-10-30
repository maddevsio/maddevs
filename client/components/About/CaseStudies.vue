<template>
  <section
    id="case-studies"
    class="case-studies"
    :class="{ 'case-studies--projects': currentPageName === 'projects' }"
  >
    <div class="container">
      <div>
        <h2
          class="case-studies__main-title"
          :class="`case-studies__main-title-${currentPageName}`"
        >
          Case <br v-if="currentPageName === 'projects'"> Studies
        </h2>
        <div class="case-studies__fire-icon"></div>
      </div>
      <div class="projects">
        <SingleProject
          v-for="(project, i) in projects"
          :key="i"
          :project="project"
        />
      </div>
    </div>
    <div class="projects-mobile-slider">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(project, i) in projects" :key="i">
          <SingleProject :project="project" />
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination swiper-pagination--white" slot="pagination"/>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import SingleProject from '@/components/About/SingleProject';

export default {
  name: 'CaseStudies',
  components: {
    Swiper,
    SwiperSlide,
    SingleProject
  },
  beforeMount() {
    // Set new params for slider
    if (window.screen.width <= 480) {
      this.swiperOption.slidesPerView = 1.05;
    }
  },
  mounted() {
    if ($nuxt.$route.name) {
      this.currentPageName = $nuxt.$route.name;
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination--white'
        },
        slidesPerView: 1.20
      },
      currentPageName: '',
      projects: [
        {
          projectName: 'nambafood',
          logoImg: 'nambafoodColored',
          link: 'https://blog.maddevs.io/namba-food-top-1-delivery-service-in-central-asia-3df8ca4d436d?source=friends_link&sk=1dd67cc82dad8e4fae756b3a4d47f121',
          contributionWidgetColors: ['#ec1c24', '#96969c'],
          projectBackground: 'nambafoodBackground',
          projectColor: '#f8f7f6',
          projectTitle: 'Contactless Delivery Service',
          projectDescription:
            'Mad Devs created the Namba Food delivery service from scratch. The solution orchestrates feature-rich apps for couriers, end-users, and business owners.'
        },
        {
          projectName: 'teacherly',
          logoImg: 'teacherlyColored',
          link: 'https://blog.maddevs.io/teacherly-provides-collaboration-platform-to-70-000-teachers-88631cc5195f?source=friends_link&sk=0f492513f43ce5b4330c3cfa484378c5',
          contributionWidgetColors: ['#ec1c24', '#fff'],
          projectBackground: 'teacherlyBackground',
          projectColor: '#56448e',
          projectTitle: 'EdTech collaboration platform',
          projectDescription:
            'Mad Devs improved the collaboration experience for teachers and students by the feedback-driven development of the Teacherly educational platform.'
        },
        {
          projectName: 'guardrails',
          logoImg: 'guardrailsColored',
          link: 'https://blog.maddevs.io/guardrails-helps-800-development-teams-to-establish-devsecops-with-automated-security-reviews-806c3c1d516b?source=friends_link&sk=15f4cdb98f9410b27b9d76dfd94ad1d0',
          contributionWidgetColors: ['#96969c', '#96969c'],
          projectBackground: 'guardrailsBackground',
          projectColor: '#0e1b27',
          projectTitle: 'Cloud cybersecurity service',
          projectDescription:
            'Mad Devs was involved with Guardrails\' security check service as a development contractor with exceptional knowledge of GitHub and GitLab processes.'
        },
        {
          projectName: 'godee',
          logoImg: 'godeeColored',
          link: 'https://blog.maddevs.io/building-new-public-transport-habits-in-vietnam-with-godee-f7c4da25efc5?source=friends_link&sk=3e3f75a7f35f0e4d9d447a19e015330a',
          contributionWidgetColors: ['#000', '#000'],
          projectBackground: 'godeeBackground',
          projectColor: '#ff6A01',
          projectTitle: 'Convenient shuttle bus service',
          projectDescription: 'Mad Devs helped GoDee with developing feature-rich software to re-invent public mobility by building new smart ways of a daily commute.'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';
@import '../../assets/styles/caseIcons';
@import '../../assets/styles/projectsBannerIcons';

.swiper-container {
  background: $bgcolor--project-white;
}

.case-studies {
  &--projects .projects-flame-background {
    position: absolute;
  }

  &__main-title-projects {
    text-align: left !important;

    br {
      display: none;
    }

    @media screen and (max-width: 420px) {
      br {
        display: block;
      }
    }
  }

  .container {
    position: relative;
  }

  &__main-title {
    @include h2_title;
    padding-bottom: 30px;
    color: $text-color--red;
    text-align: center;
    margin: auto;
    display: block;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;

    .single-project {
      &:nth-child(2) {
        /deep/ .single-project__background {
          width: auto;
        }
      }

      &:nth-child(3) {
        /deep/ .single-project__background {
          width: auto;
        }

        &::before {
          @include guardrails-background;
          background-repeat: no-repeat;
          background-position: right 50%;
          content: '';
          position: absolute;
          width: 100%;
          height: 430px;
          background-size: contain;
          z-index: -44;
          top: 0;
          right: 0;
          mix-blend-mode: overlay;
          opacity: 0.68;
        }
      }

      &:last-child {
        /deep/ .single-project__background {
          width: auto;
        }

        &::after {
          content: '';
          position: absolute;
          background-image: url('../../assets/img/Studies/jpg/godeeSecondaryBg.jpg');
          background-repeat: no-repeat;
          width: 100%;
          height: 100%;
          background-size: contain;
          z-index: -44;
          top: 0;
          right: 0;
        }
      }
    }

    @media screen and (max-width: 608px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  // Projects page, flame icon styles 
  &__fire-icon {
    display: block;
    width: 407px;
    height: 661px;
    position: absolute;
    top: -366px;
    right: 100px;
    @include fire-icon;

    @media screen and (max-width: 1320px) {
      width: 340px;
      height: 600px;
      top: -297px;
    }

    @media screen and (max-width: 991px) {
      width: 300px;
      height: 560px;
      top: -253px;
    }

    @media screen and (max-width: 970px) {
      width: 250px;
      height: 510px;
      top: -200px;
    }

    @media screen and (max-width: 834px) {
      top: -255px;
      right: 95px;
    }

    @media screen and (max-width: 768px) {
      top: -255px;
      right: 65px;
    }

    @media screen and (max-width: 690px) {
      width: 240px;
      height: 470px;
      top: -229px;
      right: 55px;
    }

    @media screen and (max-width: 578px) {
      top: -254px;
    }

    @media screen and (max-width: 530px) {
      width: 203px;
      height: 400px;
      top: -197px;
      right: 40px;
    }

    @media screen and (max-width: 480px) {
      width: 145px;
      height: 300px;
      top: -112px;
    }

    @media screen and (max-width: 440px) {
      right: 25px;
    }

    @media screen and (max-width: 420px) {
      top: -70px;
      right: 35px;
    }

    @media screen and (max-width: 355px) {
      right: 30px;
    }
  }
}

.projects-mobile-slider {
  display: none;
}
</style>
