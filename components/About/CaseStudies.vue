<template>
  <section class="case-studies">
    <div class="container">
      <h2 class="case-studies__main-title main-title">
        Case
        <span>Studies</span>
      </h2>
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
  data() {
    return {
      projects: [
        {
          projectName: 'nambafood',
          logoImg: 'nambafoodColored',
          contributionVidgetColors: ['#ec1c24', '#96969c'],
          projectBackground: 'nambafoodBackground',
          projectColor: '#f8f7f6',
          projectTitle: 'Contactless delivery service',
          projectDescription: 'Mad Devs created the Namba Food delivery service from scratch. The apps for couriers, end users placing orders and business owners work as a seamless system, ensuring a smooth delivery process for food and other goods.'
        },
        {
          projectName: 'teacherly',
          logoImg: 'teacherlyColored',
          contributionVidgetColors: ['#ec1c24', '#fff'],
          projectBackground: 'teacherlyBackground',
          projectColor: '#56448e',
          projectTitle: 'EdTech collaboration platform',
          projectDescription: 'Mad Devs improved the collaboration experience for teachers and students by the feedback-driven development of the Teacherly educational platform.'
        },
        {
          projectName: 'guardrails',
          logoImg: 'guardrailsColored',
          contributionVidgetColors: ['#96969c', '#96969c'],
          projectBackground: 'guardrailsBackground',
          projectColor: '#0e1b27',
          projectTitle: 'Cloud cybersecurity service',
          projectDescription: 'Mad Devs was involved with Guardrails\' security check service as a development contractor with exceptional knowledge of GitHub and GitLab processes.'
        },
        {
          projectName: 'godee',
          logoImg: 'godeeColored',
          contributionVidgetColors: ['#000', '#000'],
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
      &:nth-child(3) {
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
</style>
