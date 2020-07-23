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

.swiper-container {
  background: $bgcolor--project-white;
}

.case-studies {
  padding-top: 90px;

  &--projects {
    .projects-flame-background {
      position: absolute;
    }
  }

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
  }

  .swiper-container {
    background: $bgcolor--black;
  }

  .swiper-slide {
    @media only screen and (max-width: 410px) {
      .single-project {
        min-width: 100%;
      }
    }

    &:nth-child(3) {
      .single-project {
        &::before {
          content: '';
          position: absolute;
          background: url('../../assets/img/Studies/svg/guardrailsSecondaryBg.svg')
            no-repeat right 50%;
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
}

.projects-mobile-slider {
  display: none;
}

@media only screen and (min-width: 1600px) {
  .projects {
    display: flex;
    flex-wrap: wrap;

    &-flame-background {
      top: -448px;
      width: 448px;
      right: 142px;
    }

    .single-project {
      &:nth-child(2) {
        /deep/ .single-project__background {
          margin: 0 19px 0 33px;
          width: auto;
        }
      }

      &:nth-child(3) {
        /deep/ .single-project__background {
          width: auto;
        }

        &::before {
          content: '';
          position: absolute;
          background: url('../../assets/img/Studies/svg/guardrailsSecondaryBg.svg')
            no-repeat right 50%;
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
          margin: 0 32px;
          width: auto;
        }
      }
    }
  }
}

@media only screen and (max-width: 1600px) {
  .case-studies {
    &__main-title {
      font-size: 8vw;
    }
  }

  .projects {
    display: flex;
    flex-wrap: wrap;

    &-flame-background {
      top: -448px;
      width: 448px;
      right: 142px;
    }

    .single-project {
      &:nth-child(2) {
        /deep/ .single-project__background {
          margin: 0 19px 0 33px;
          width: auto;
        }
      }

      &:nth-child(3) {
        /deep/ .single-project__background {
          width: auto;
        }

        &::before {
          content: '';
          position: absolute;
          background: url('../../assets/img/Studies/svg/guardrailsSecondaryBg.svg')
            no-repeat right 50%;
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
          margin: 0 32px;
          width: auto;
        }
      }
    }
  }
}

@media only screen and (max-width: 1440px) {

  .projects {
    &-flame-background {
      right: 107px;
    }

    .single-project {
      &:nth-child(2) {
        /deep/ .single-project__background {
          margin: 0 32px 0 18px;
          width: auto;
        }
      }

      &:nth-child(3) {
        /deep/ .single-project__background {
          margin: 0 19px;
          width: auto;
        }
      }

      &:last-child {
        /deep/ .single-project__background {
          margin: 0 30px;
          width: auto;
        }
      }
    }
  }
}

@media only screen and (max-width: 1390px) {
  .projects {
    &-flame-background {
      top: -385px;
    }
  }
}

@media only screen and (max-width: 1330px) {

  .projects {
    &-flame-background {
      top: -428px;
      width: 428px;
    }
  }
}

@media only screen and (max-width: 1280px) {
  .case-studies {
    padding-top: 20px;
  }

  .projects {
    &-flame-background {
      top: -410px;
      width: 400px;
    }
  }
}

@media only screen and (max-width: 1230px) {

  .projects {
    &-flame-background {
      top: -322px;
      width: 330px;
      right: 100px;
    }
  }
}

@media only screen and (max-width: 1138px) {
  .case-studies {
    &__main-title {
      font-size: 91px;
    }
  }

  .projects {
    &-flame-background {
      top: -260px;
      width: 282px;
      right: 100px;
    }
  }
}

@media only screen and (max-width: 1024px) {
  .projects {
    &-flame-background {
      top: -233px;
      width: 262px;
      right: 100px;
    }

    .single-project {
      &:nth-child(2) {
        /deep/ .single-project__background {
          margin: 0 25px 0 14px;
          width: auto;
        }
      }

      &:nth-child(3) {
        /deep/ .single-project__background {
          margin: 0 29px;
          width: auto;
        }
      }

      &:last-child {
        /deep/ .single-project__background {
          margin: 0 38px;
          width: auto;
        }
      }
    }
  }
}

@media only screen and (max-width: 980px) {
  .case-studies {
    &__main-title {
      font-size: 82px;
    }
  }

  .projects {
    &-flame-background {
      top: -200px;
      width: 230px;
      right: 100px;
    }
  }
}

@media only screen and (max-width: 905px) {
  .projects {
    &-flame-background {
      top: -193px;
      width: 220px;
      right: 100px;
    }
  }
}

@media only screen and (max-width: 1110px) {
  .projects {
    .single-project {
      &:nth-child(2) {
        /deep/ .single-project__background {
          bottom: -14px;
        }
      }
    }
  }
}

@media only screen and (max-width: 950px) {
  .projects {
    .single-project {
      &:nth-child(2) {
        /deep/ .single-project__background {
          bottom: -12px;
        }
      }
    }
  }
}

@media only screen and (max-width: 850px) {
  .projects {
    .single-project {
      &:nth-child(2) {
        /deep/ .single-project__background {
          bottom: -10px;
        }
      }
    }
  }
}

@media only screen and (max-width: 830px) {
  .case-studies {
    &--projects {
      &__main-title {
        width: 50%;
      }
    }
  }

  .projects {
    &-flame-background {
      top: -121px;
      width: 220px;
    }
  }
}

@media screen and (max-width: 920px) {
  .single-project {
    min-width: inherit;
  }
}

@media only screen and (max-width: 768px) {
  .case-studies {
    .projects {
      display: none;

      &-flame-background {
        top: -130px;
        width: 208px;
        right: 70px;
      }
    }

    .projects-mobile-slider {
      display: block;

      .swiper {
        display: block;
      }
    }

    .swiper-slide {
      .single-project {
        width: 100%;
      }

      &:nth-child(2) {
        /deep/ .single-project__background {
          width: calc(100% - 14px);
        }
      }

      &:nth-child(3) {
        /deep/ .single-project__background {
          width: calc(100% - 29px);
        }
      }

      &:last-child {
        /deep/ .single-project__background {
          width: calc(100% - 38px);
        }
      }
    }
  }
}

@media only screen and (max-width: 576px) {
  .case-studies {
    /deep/ .single-project__background {
      &:nth-child(2) {
        position: relative;
        bottom: -10px;
      }
    }

    &-flame-background {
      right: 45px;
    }
  }
}

@media only screen and (max-width: 530px) {
  .case-studies {
    .projects {
      &-flame-background {
        right: 20px;
      }
    }
  }
}

@media only screen and (max-width: 520px) {
  .case-studies {
    min-width: 100%;

    &__main-title {
    }
  }
}

@media only screen and (max-width: 475px) {
  .case-studies {
    .projects {
      &-flame-background {
        top: -95px;
        width: 180px;
      }
    }
  }

  &__main-title {
  }
}

@media only screen and (max-width: 460px) {
  .case-studies {
    .projects {
      &-flame-background {
        top: -70px;
        width: 165px;
      }
    }
  }
}

@media only screen and (max-width: 427px) {
  .case-studies {
    &__main-title {
    }
  }
}

@media only screen and (max-width: 375px) {
  .case-studies {
    .swiper-slide {
      &:nth-child(2) {
        /deep/ .single-project__background {
          width: calc(100% - 33px);
          margin-right: 15px;
        }
      }

      &:nth-child(3) {
        /deep/ .single-project__background {
          width: calc(100% - 33px);
        }
      }

      &:last-child {
        /deep/ .single-project__background {
          width: calc(100% - 33px);
        }
      }
    }

    .projects {
      &-flame-background {
        width: 160px;
      }
    }
  }
}

@media only screen and (max-width: 345px) {
  .case-studies {
    .projects {
      &-flame-background {
        top: -45px;
        width: 130px;
      }
    }
  }
}
</style>
