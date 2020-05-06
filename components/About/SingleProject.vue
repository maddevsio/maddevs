<template>
  <div class="single-project" :style="computedProjectColor">
    <div class="single-project__content-wrap">
      <img :src="require(`@/assets/img/Home/svg/clients/${logoImg}.svg`)" class="single-project__logo" alt="Namba Food" />
      <h4 class="single-project__sub-title sub-title">{{projectTitle}}</h4>
      <p class="single-project__paragraph paragraph">{{projectDescription}}</p> 
      <div class="contribution-vidget">
        <img :src="require(`@/assets/img/Home/svg/${contributionVidgetImg}.svg`)" alt="Mad Devs">
        <span class="contribution-vidget__content">contribution: backend, infrastructure, frontend</span>
      </div>
    </div>
    <div class="single-project__background" :style="{'background-image': 'url(' + require(`@/assets/img/Studies/png/${setProjectBackground(projectBackground)}.png`) + ')'}"></div>
  </div>
</template>

<script>

export default {
  name: 'SingleProject',
  data() {
    return {
      bgStyleObject: {
        background: '#56448E'
      }
    };
  },
  methods: {
    setProjectBackground(projectBackground) {
      return projectBackground;
    }
  },
  computed: {
    computedProjectColor: function() {
      console.log(this.projectColor);
      return {
        background: this.projectColor 
      };
    }
  },
  props: {
    logoImg: {
      type: String,
      required: false,
      default: '@/assets/img/Home/svg/clients/logoImg.svg'
    },
    contributionVidgetImg: {
      type: String,
      required: false,
      default: '@/assets/img/Home/svg/contributionVidgetImg.svg'
    },
    projectTitle: {
      type: String,
      required: false
    },
    projectDescription: {
      type: String,
      required: false
    },
    projectBackground: {
      type: String,
      required: false
    },
    projectColor: {
      type: String,
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

@mixin responsive-bg-image($image-width, $image-height) {
  background-size: 100%;
  height: 0;
  padding-bottom: percentage($image-height / $image-width);
  display: block;
}

.single-project {
  width: 50%;
  min-width: 400px;

  @media only screen and (max-width: 1020px) {
    width: 100%;

    &__content-wrap {
      margin:  68px 30px 0;
    }
  }

  &__content-wrap {
    margin:  74px 70px 0;
  }

  &__sub-title {
    margin-top: 22.5px;
  }

  &__paragraph {
    margin-top: 33px;
  }

  .contribution-vidget {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
    color: $text-color--grey;
    font-family: 'Hoves-Regular';
    margin-top: 36px;
    font-size: 16px;
    line-height: 23px;

    &__content {
      margin-left: 6px;
    }

    @media only screen and (max-width: 576px) {
        &__content {
          color: $text-color--black;
        }
    }
  }

  &__background {
    background-repeat: no-repeat;
    @include responsive-bg-image(394, 232); // sass-lint:disable-line mixins-before-declarations
    position: relative;
    bottom: 79px;
    margin-bottom: -80px;
  }

  @media only screen and (max-width: 768px) {
    .single-project {
      width: 100%;

      &__content-wrap {
        margin:  68px 30px 0;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .single-project {
      width: 100%;

      &__content-wrap {
        margin:  40px 34px 0;
      }

      &__background {
        bottom: 104px;
        margin-bottom: -105px;
      }
    }
  }
}

</style>
