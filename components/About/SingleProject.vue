<template>
  <div class="single-project" :style="{ background: project.projectColor }">
    <div class="single-project__container">
      <div class="single-project__content-wrap">
        <img :src="require(`@/assets/img/Home/svg/clients/${project.logoImg}.svg`)" class="single-project__logo" :alt="project.projectName" />
        <h4 class="single-project__sub-title sub-title">{{project.projectTitle}}</h4>
        <p class="single-project__paragraph paragraph">{{project.projectDescription}}</p> 
        <div class="contribution-vidget">
          <img :src="require(`@/assets/img/Home/svg/${project.contributionVidgetImg}.svg`)" alt="Mad Devs">
          <span class="contribution-vidget__content">contribution: backend, infrastructure</span>
        </div>
      </div>
      <div class="single-project__background" :style="{'background-image': 'url(' + require(`@/assets/img/Studies/png/${project.projectBackground}.png`) + ')'}"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SingleProject',
  props: {
    project: {
      type: Object,
      default: Object
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
  position: relative;
  z-index: 99;

  @media only screen and (max-width: 1020px) {
    width: 100%;

    &__content-wrap {
      margin:  68px 30px 0;
    }
  }

  &__content-wrap {
    margin:  74px 70px 0;
    height: 305px;
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
    background-position: center bottom;
    background-size: contain;
    height: 400px;
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    .single-project {
      width: 100%;

      &__container {
        padding-top: 1px;
      }

      &__content-wrap {
        margin:  68px 30px 0;
        height: 270px;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .single-project {
      width: 100%;

      &__content-wrap {
        margin:  40px 34px 0;
        height: 68px;

        .contribution-vidget {
          margin-top: 26px;
        }
      }

      &__paragraph {
        margin-top: 15px;
      }
    }
  }

  @media screen and (max-width: 768px) and (min-width: 679px) {
    .single-project {
      &__background {
        background-size: cover;
      }
    }
  }

  @media screen and (max-width: 1020px) and (min-width: 798px) {
    .single-project {
      &__background {
        background-size: cover;
      }
    }
  }
}

</style>
