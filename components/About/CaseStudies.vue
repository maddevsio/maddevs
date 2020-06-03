<template>
  <section id="case-studies" class="case-studies" :class="{ 'case-studies--projects': currentPageName === 'projects' }">
    <div class="container">
      <div>
      <h2 class="case-studies__main-title main-title" :class="{ 'case-studies--projects__main-title': currentPageName === 'projects' }">
        Case
        <span>Studies</span>
      </h2>
      <img class="projects-flame-background" 
        src="@/assets/img/Projects/png/projects-flame-bg.png"
        alt="Projects Flame Image"
        v-if="currentPageName === 'projects'"
      >
      </div>
      <div class="projects">
        <SingleProject v-for="(project, i) in projects" :key="i" :project="project"/>
      </div>
    </div>
    <div class="projects-mobile-slider">
      <swiper class="swiper">
        <swiper-slide v-for="(project, i) in projects" :key="i">
          <SingleProject :project="project" />
        </swiper-slide>
      </swiper>
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
  mounted() {
    if ($nuxt.$route.name) {
      this.currentPageName = $nuxt.$route.name;
    }
  },
  data() {
    return {
      currentPageName: '',
      projects: [
        {
          projectName: 'nambafood',
          logoImg: 'nambafoodColored',
          contributionWidgetColors: ['#ec1c24', '#96969c'],
          projectBackground: 'nambafoodBackground',
          projectColor: '#f8f7f6',
          projectTitle: 'Contactless Delivery Service',
          projectDescription: 'Mad Devs created the Namba Food delivery service from scratch. The apps for couriers, end users placing orders and business owners work as a seamless system, ensuring a smooth delivery process for food and other goods.'
        },
        {
          projectName: 'teacherly',
          logoImg: 'teacherlyColored',
          contributionWidgetColors: ['#ec1c24', '#fff'],
          projectBackground: 'teacherlyBackground',
          projectColor: '#56448e',
          projectTitle: 'EdTech collaboration platform',
          projectDescription: 'Mad Devs improved the collaboration experience for teachers and students by the feedback-driven development of the Teacherly educational platform.'
        },
        {
          projectName: 'guardrails',
          logoImg: 'guardrailsColored',
          contributionWidgetColors: ['#96969c', '#96969c'],
          projectBackground: 'guardrailsBackground',
          projectColor: '#0e1b27',
          projectTitle: 'Cloud cybersecurity service',
          projectDescription: 'Mad Devs was involved with Guardrails\' security check service as a development contractor with exceptional knowledge of GitHub and GitLab processes.'
        },
        {
          projectName: 'godee',
          logoImg: 'godeeColored',
          contributionWidgetColors: ['#000', '#000'],
          projectBackground: 'godeeBackground',
          projectColor: '#ff6A01',
          projectTitle: 'Mass transportation company',
          projectDescription: 'Mad Devs helped to automate bus transportation in Vietnam by creating feature-rich GoDee applications for both commuters and bus drivers.'
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
  &--projects {
    .projects-flame-background {
      position: absolute;
    }
  }

  .container {
    position: relative;
  }

  &__main-title {
    padding-bottom: 41px;
    display: inline-block;
    color: $text-color--red;

    span {
      color: $text-color--black;
      text-shadow: $text-shadow--red;
    }
  }

  .projects {
    display: flex;
    flex-wrap: wrap;

    .single-project {
      &:nth-child(2) {
        /deep/ .single-project__background {
          margin: 0 20px;
          width: auto;
        } 
      }

      &:nth-child(3) {
        /deep/ .single-project__background {
          margin: 0 29px;
          width: auto;
        } 

        &::before {
          content: '';
          position: absolute;
          background: url('../../assets/img/Studies/svg/guardrailsSecondaryBg.svg') no-repeat right 50%;
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
          margin: 0 34px;
          width: auto;
        } 

        &::after {
          content: '';
          position: absolute;
          background-image: url('../../assets/img/Studies/svg/godeeSecondaryBg.svg');
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

  .swiper-slide {
    @media only screen and (max-width: 410px) {
      .single-project {
        min-width: 100%;
        padding-left: 28px;
      }
    }

    &:nth-child(3) {
      .single-project {
        &::before {
          content: '';
          position: absolute;
          background: url('../../assets/img/Studies/svg/guardrailsSecondaryBg.svg') no-repeat right 50%;
          width: 100%;
          height: 310px;
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
          background-image: url('../../assets/img/Studies/svg/godeeSecondaryBg.svg');
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

  @media only screen and (max-width: 520px) {
    .case-studies {
      min-width: 100%;

      &__main-title {
        padding-bottom: 31px;
      }
    }
  }
}

.projects-mobile-slider {
  display: none;
}

@media only screen and (max-width: 768px) {
  .case-studies {
    &__main-title {
      padding-bottom: 31px;
    }

    .projects {
      display: none;
    }

    .projects-mobile-slider {
      display: block;
    }

    .swiper-slide {
      left: -16px;
    }
  }
}

@media only screen and (min-width: 1230px) {
  .case-studies--projects {
    .projects-flame-background {
      top: -481px;
      height: 800px;
      right: 60px;
    }
  }
}

@media only screen and (max-width: 1230px) {
  .case-studies {
    &--projects {
      &__main-title {
          width: 50%;
      }

      .projects-flame-background {
        top: -364px;
        height: 800px;
        right: 60px;
      }
    }
  }
}

@media only screen and (max-width: 845px) {
  .case-studies--projects {
    .projects-flame-background {
      top: -233px;
      height: 600px;
      right: 60px;
    }
  }
}

@media only screen and (max-width: 740px) {
  .case-studies--projects {
    .projects-flame-background {
      top: -77px;
      height: 400px;
      right: 15px;
    }
  }
}

@media only screen and (max-width: 640px) {
  .case-studies--projects {
    .projects-flame-background {
      top: -97px;
      height: 400px;
    }
  }
}

@media only screen and (max-width: 610px) {
  .case-studies--projects {
    .projects-flame-background {
      top: -132px;
      height: 400px;
    }
  }
}

@media only screen and (max-width: 520px) {
  .case-studies--projects {
    .projects-flame-background {
      top: -180px;
      height: 400px;
    }
  }
}

@media only screen and (max-width: 465px) {
  .case-studies--projects {
    .projects-flame-background {
      top: -97px;
      height: 300px;
      right: 15px;
    }
  }
}

@media only screen and (max-width: 370px) {
  .case-studies--projects {
    .projects-flame-background {
      top: -117px;
      height: 300px;
      right: 15px;
    }
  }
}

@media only screen and (max-width: 335px) {
  .case-studies--projects {
    .projects-flame-background {
      top: -79px;
      height: 254px;
      right: 15px;
    }
  }
}
</style>
