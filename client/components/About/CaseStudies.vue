<template>
  <section
    id="case-studies"
    class="case-studies"
    :class="{ 'case-studies--projects': currentPageName === 'projects' }"
  >
    <div class="container">
      <div>
        <h2
          class="case-studies__main-title main-title"
          :class="{
            'case-studies--projects__main-title': currentPageName === 'projects'
          }"
        >
          Case
          <span>Studies</span>
        </h2>
        <img
          class="projects-flame-background"
          loading="lazy"
          src="@/assets/img/Projects/png/projects-flame-bg.png"
          alt="Projects Flame Image"
          v-if="currentPageName === 'projects'"
        />
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
        slidesPerView: 1.05
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
            'Mad Devs created the Namba Food delivery service from scratch. The apps for couriers, end users placing orders and business owners work as a seamless system, ensuring a smooth delivery process for food and other goods.'
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
          link: '/godee-case-study',
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

.swiper-container {
  background: $bgcolor--project-white;
}

.case-studies {

  .container {
    position: relative;
  }

  &__main-title {
    padding-bottom: 2vw;
    display: inline-block;
    color: $text-color--red;

    span {
      color: $text-color--black;
      -webkit-text-stroke: $text-stroke--red;
    }
  }

  .projects {
    display: flex;
    flex-wrap: wrap;

    &-flame-background {
      position: absolute;
      bottom: 85vw;
      right: 7vw;
      width: 26vw;
    }

    .single-project {
      &__background_first-project {
        background-size: cover;
      }

      &:nth-child(3) {

        &::before {
          content: '';
          position: absolute;
          background: url('../../assets/img/Studies/svg/guardrailsSecondaryBg.svg') no-repeat right 50%;
          width: 100%;
          height: 25vw;
          background-size: contain;
          z-index: -44;
          top: 0;
          right: 0;
          mix-blend-mode: overlay;
          opacity: 0.68;
        }
      }

      &:last-child {

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
  }

  .swiper-container {
    background: $bgcolor--black;
  }
}

.projects-mobile-slider {
  display: none;
}

@media only screen and (max-width: 1600px) {
  .case-studies {
    &__main-title {
      font-size: 8vw;
    }
  }
}

@media only screen and (max-width: 745px) {
  .case-studies {
    .projects {
      display: none;
    }

    .projects-flame-background {
      bottom: -5vw;
      right: 7vw;
      width: 22vw;
    }

    .projects-mobile-slider {
      display: block;

      .swiper-slide {
        &:nth-child(3) {
          .single-project {
            &::before {
              content: '';
              position: absolute;
              background: url('../../assets/img/Studies/svg/guardrailsSecondaryBg.svg') no-repeat right 50%;
              width: 100%;
              height: 35vw;
              background-size: contain;
              z-index: -44;
              top: 0;
              right: 0;
              mix-blend-mode: overlay;
              opacity: 0.68;
            }
          }
        }

        &:last-child {
          .single-project {
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
      }

      .swiper {
        display: block;
      }
    }

    .swiper-slide {
      height: auto;

      .single-project {
        width: 100%;
        min-height: 100%;
      }
    }
  }
}

@media only screen and (max-width: 640px) {
  .case-studies {
    &__main-title {
      font-size: 11vw;
      padding-bottom: 8vw;
    }
  }
}
</style>
