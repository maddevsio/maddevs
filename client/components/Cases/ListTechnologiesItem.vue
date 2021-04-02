<template>
  <li class="case_technologies-item">
    <div
      :class="`case_technologies-item__${className} ${className}`"
      class="case_technologies-item__tech-icon"
    />
    <p class="case_technologies-item__tech-name">
      {{ techName }}
    </p>
  </li>
</template>

<script>
export default {
  name: 'ListTechnologiesItem',
  props: {
    techName: {
      type: String,
      default: '',
    },

    className: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/cases/_mixins';
@import '../../assets/styles/_techIcons';

.case_technologies-item {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__tech-icon {
    margin-bottom: 5px;

    &::before {
      content: '';
      width: 40px;
      height: 40px;
      display: block;
    }
  }

  &__tech-name {
    @include default_text($text-color--tech-label-black, 14px, 171%, -0.035em, normal);
  }

  &__devops-docker,
  &__backend-grpc,
  &__backend-django {
    &::before {
      width: 70px;
    }
  }

  &__other-uptime-robot,
  &__frontend-jquery,
  &__other-nimble,
  &__frontend-video-js,
  &__devops-nginx-txt {
    &::before {
      width: 92px;
    }
  }

  &__other-plex {
    &::before {
      width: 59px;
    }
  }

  @media screen and (max-width: 768px) {
    &__tech-icon {
      margin-bottom: 8px;

      &::before {
        width: 20px;
        height: 20px;
      }
    }

    &__devops-docker,
    &__backend-grpc,
    &__backend-django,
    &__devops-nginx-txt,
    &__frontend-video-js {
      &::before {
        width: 40px;
      }
    }

    &__frontend-jquery,
    &__other-nimble {
      &::before {
        width: 45px;
      }
    }

    &__other-uptime-robot {
      &::before {
        width: 62px;
      }
    }

    &__other-plex {
      &::before {
        width: 28px;
      }
    }

    &__tech-name {
      @include default_text($text-color--tech-label-black, 8px, 163%, -0.02em, normal);
      width: 40px;
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: center;
    }
  }
}
</style>
