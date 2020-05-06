<template>
  <section class="case-studies">
    <div class="container">
      <h2 class="case-studies__main-title main-title">
        Case
        <span>Studies</span>
      </h2>
      <div class="projects">
        <SingleProject
          logoImg="nambafoodColored"
          contributionVidgetImg="maddevsLogoWithoutText"
          projectBackground="nambafoodBackground"
          projectColor="#f8f7f6"
          projectTitle="Contactless delivery service"
          projectDescription="Mad Devs created the Namba Food delivery service from scratch. The
        apps for couriers, end users placing orders and business owners
        work as a seamless system, ensuring a smooth delivery process for
        food and other goods."
        />
        <SingleProject
          logoImg="teacherlyColored"
          contributionVidgetImg="maddevsLogoWithoutText"
          projectBackground="teacherlyBackground"
          projectColor="#56448E"
          projectTitle="EdTech collaboration platform"
          projectDescription="Mad Devs improved the collaboration experience for teachers and students by the feedback-driven development of the Teacherly educational platform."
        />
        <SingleProject
          logoImg="guardrailsColored"
          contributionVidgetImg="maddevsLogoWithoutText"
          projectBackground="guardrailsBackground"
          projectColor="#0E1B27"
          projectTitle="Cloud cybersecurity service"
          projectDescription="Mad Devs was involved with Guardrails' security check service as a development contractor with exceptional knowledge of GitHub and GitLab processes."
        />
        <SingleProject
          logoImg="godeeColored"
          contributionVidgetImg="maddevsLogoWithoutText"
          projectBackground="godeeBackground"
          projectColor="#FF6A01"
          projectTitle="Mass transportation company"
          projectDescription="Mad Devs helped to automate bus transportation in Vietnam by creating feature-rich GoDee applications for both commuters and bus drivers."
        />
      </div>
    </div>
    <div class="projects-mobile-slider">
      <swiper class="swiper">
        <swiper-slide>
          <SingleProject
            logoImg="nambafoodColored"
            contributionVidgetImg="maddevsLogoWithoutText"
            projectBackground="nambafoodBackground"
            projectColor="#f8f7f6"
            projectTitle="Contactless delivery service"
            projectDescription="Mad Devs created the Namba Food delivery service from scratch. The
          apps for couriers, end users placing orders and business owners
          work as a seamless system, ensuring a smooth delivery process for
          food and other goods."
        />
        </swiper-slide>
        <swiper-slide>
          <SingleProject
            logoImg="teacherlyColored"
            contributionVidgetImg="maddevsLogoWithoutText"
            projectBackground="teacherlyBackground"
            projectColor="#56448E"
            projectTitle="EdTech collaboration platform"
            projectDescription="Mad Devs improved the collaboration experience for teachers and students by the feedback-driven development of the Teacherly educational platform."
          />
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
