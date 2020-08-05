<template>
  <div class="contribution-widget">
    <svg
      class="contribution-widget__img"
      :class="[
        projectName === 'guardrails'
          ? 'contribution-widget__img_guardrails'
          : projectName === 'teacherly'
          ? 'contribution-widget__img_teacherly'
          : projectName === 'nambafood'
          ? 'contribution-widget__img_nambafood'
          : 'contribution-widget__img_godee'
      ]"
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
      class="contribution-widget__content-mobile contribution-widget__content-mobile_godee"
      v-if="projectName === 'godee'"
    >
      contribution: Backend, Infrastructure, Mobile Apps
    </span>
    <span
      v-else
      class="contribution-widget__content-mobile"
      :class="[
        projectName === 'guardrails'
          ? 'contribution-widget__content-mobile_guardrails'
          : '',
        projectName === 'teacherly'
          ? 'contribution-widget__content-mobile_teacherly'
          : 'contribution-widget__content-mobile_nambafood'
      ]"
      >contribution: Backend, Infrastructure</span
    >
    <span
      class="contribution-widget__content contribution-widget__content_godee"
      v-if="projectName === 'godee'"
    >
      contribution: Backend, Infrastructure, Mobile Apps
    </span>
    <span
      v-else
      class="contribution-widget__content"
      :class="[
        projectName === 'guardrails'
          ? 'contribution-widget__content_guardrails'
          : '',
        projectName === 'teacherly'
          ? 'contribution-widget__content_teacherly'
          : 'contribution-widget__content_nambafood'
      ]"
      >contribution: Backend, Infrastructure, Frontend</span
    >
  </div>
</template>

<script>
export default {
  name: 'ContributionWidget',
  props: {
    contributionWidgetColors: {
      type: Array,
      required: true
    },
    projectName: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';
@import '../../assets/styles/get-vw';

.contribution-widget {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  color: $text-color--grey;
  font-family: 'Hoves-Regular';
  letter-spacing: -1px;
  line-height: 95%;

  &__img {
    width: 20px;
    height: 18px;

    &_teacherly,
    &_nambafood {
      fill: $text-color--red;
    }

    &_guardrails {
      fill: $text-color--grey;
    }

    &_godee {
      fill: $text-color--black;
    }
  }

  &__content {
    margin-left: 6px;
    font-size: 1vw;

    &-mobile {
      display: none;
      font-size: 1.1vw;
    }

    &_nambafood,
    &_guardrails {
      color: $text-color--grey;
    }

    &_teacherly {
      color: $text-color--white;
    }

    &_godee {
      color: $text-color--black;
    }
  }
  @media only screen and (max-width: 1024px) {
    &__img {
      height: 13px;
      width: 15px;

      &_teacherly {
        fill: $text-color--red;
      }

      &_guardrails {
        fill: $text-color--white;
      }

      &_nambafood,
      &_godee {
        fill: $text-color--black;
      }
    }

    &__content {
      display: none;

      &-mobile {
        display: block;
        margin-left: get-vw(6px, 1024);
        font-size: 1.3vw;

        &_nambafood {
          color: $text-color--black;
        }

        &_teacherly,
        &_guardrails {
          color: $text-color--white;
        }

        &_godee {
          color: $text-color--black;
        }
      }
    }
  }

  @media only screen and (max-width: 970px) {
    &__content {
      &-mobile {
        font-size: 1.7vw;
      }
    }
  }

  @media only screen and (max-width: 640px) {

    &__content {
      &-mobile {
        font-size: 3.7vw;
      }
    }
  }
}
</style>
