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
        />
        <SingleProject
          logoImg="nambafoodColored"
          contributionVidgetImg="maddevsLogoWithoutText"
        />
      </div>
    </div>
    <div class="projects-mobile-slider">
      <swiper class="swiper">
        <swiper-slide>
          <SingleProject
            logoImg="nambafoodColored"
            contributionVidgetImg="maddevsLogoWithoutText"
          />
        </swiper-slide>
        <swiper-slide>
          <SingleProject
            logoImg="nambafoodColored"
            contributionVidgetImg="maddevsLogoWithoutText"
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

    .single-project {
      width: 100%;
    }

    .swiper-slide {
      left: -16px;
    }
  }
}
</style>
