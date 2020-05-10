<template>
  <div class="single-project" :style="{ background: project.projectColor }">
    <div class="single-project__container" :class="{ 'single-project__container_white-letters-theme': isWhiteColored}">
      <div class="single-project__content-wrap">
        <img :src="require(`@/assets/img/Home/svg/clients/${project.logoImg}.svg`)" class="single-project__logo" :alt="project.projectName" />
        <h4 class="single-project__sub-title sub-title">{{project.projectTitle}}</h4>
        <p class="single-project__paragraph paragraph">{{project.projectDescription}}</p> 
        <div class="contribution-vidget">
          <svg
            class="contribution-vidget__img"
            :class="[
              project.contributionVidgetColors[0] === '#ec1c24'
                ? 'contribution-vidget__img_red'
                : project.contributionVidgetColors[0] === '#000'
                ? 'contribution-vidget__img_black'
                : 'contribution-vidget__img_gray'
            ]"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.5953 0.101606L10.0137 3.89286L1.4321 0.101606C0.8301 -0.214585 0 0.239607 0 1.05169V16.8817C0 17.4883 0.375465 17.9827 0.88497 17.9979C0.908393 18.0007 0.932093 18.0007 0.955516 17.9979H1.00647L6.63061 17.433L5.56535 15.9642C5.09975 15.3356 5.66412 14.7897 6.26141 15.002C6.38134 15.0445 6.51146 14.9884 6.62826 15.0179L5.21732 10.4138C5.21184 10.3979 5.20713 10.382 5.20243 10.3661L5.19146 10.3312V10.3206C5.15304 10.1337 5.18595 9.93963 5.28409 9.7744C5.38224 9.60918 5.53896 9.48397 5.72523 9.42196C5.9115 9.35995 6.1147 9.36536 6.29716 9.43717C6.47963 9.50899 6.62901 9.64234 6.71762 9.81253V9.81936C6.73094 9.84514 8.33627 13.6766 8.33627 13.6766C8.3737 13.4824 8.48149 13.3074 8.6403 13.1832C8.7991 13.0589 8.99851 12.9935 9.20268 12.9987C9.40686 13.0039 9.60242 13.0794 9.75424 13.2116C9.90605 13.3437 10.0042 13.5239 10.031 13.7198C10.0592 13.5182 10.1628 13.3335 10.322 13.2006C10.4812 13.0676 10.6852 12.9955 10.8956 12.9979C11.3149 12.9979 11.6402 13.3566 11.7131 13.7433L12.6671 11.1425C12.7331 10.9685 12.8602 10.8224 13.0263 10.7297C13.1923 10.637 13.3866 10.6037 13.5755 10.6354C13.7643 10.6672 13.9356 10.7621 14.0595 10.9035C14.1835 11.045 14.2521 11.224 14.2536 11.4094V11.4337L13.4039 17.4277L19.0218 17.9925H19.0727C19.0961 17.9954 19.1198 17.9954 19.1432 17.9925C19.6528 17.9774 20 17.486 20 16.8787V1.0479C19.9992 0.236575 19.1973 -0.214585 18.5953 0.101606Z"
              fill=""
            />
          </svg>
          <span
            class="contribution-vidget__content"
            :class="[
              project.projectName === 'guardrails'
                ? 'contribution-vidget__content_mobile-white'
                : '',
              project.contributionVidgetColors[1] === '#fff'
                ? 'contribution-vidget__content_white'
                : project.contributionVidgetColors[1] === '#000'
                ? 'contribution-vidget__content_black'
                : 'contribution-vidget__content_gray'
            ]"
            >contribution: backend, infrastructure</span
          >
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
  }, 
  computed: {
    isWhiteColored: function() {
      if(this.project.projectName === 'teacherly' || this.project.projectName === 'guardrails') {
        return true;
      }
      return false;
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

  &__container {
    &_white-letters-theme {
      color: $text-color--white;
    }
  }

  &__content-wrap {
    margin:  74px 70px 0;
    height: 230px;
    z-index: 1;
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

    &__img {
      &_black {
        fill: $text-color--black;
      }

      &_red {
        fill: $text-color--red;
      }

      &_gray {
        fill: $text-color--grey;
      }
    }

    &__content {
      margin-left: 6px;

      &_black {
        color: $text-color--black;
      }

      &_white {
        color: $text-color--white;
      }

      &_gray {
        color: $text-color--grey;
      }
    }

    @media only screen and (max-width: 576px) {
      &__content {
        &_gray {
          color: $text-color--black;
        }

        &_mobile-white {
          color: $text-color--grey;
        }
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
      min-width: 320px;

      &__container {
        padding-top: 1px;
        display: flex;
        flex-direction: column;
        align-items: center;
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

      &__background {
        width: 90%;
      }
      
      &__sub-title {
        font-weight: bold;
        font-size: 41px;
        line-height: 40px;
      }

      &__content-wrap {
        margin: 40px 77px 0 34px;
        height: 65px;
        word-wrap: break-word;

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
