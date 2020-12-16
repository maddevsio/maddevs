<template>
  <li class="case_technologies-item">
    <div class="case_technologies-item__tech-icon" :class="className"></div>
    <p class="case_technologies-item__tech-name">{{techName}}</p>
  </li>
</template>

<script>
export default {
  name: 'ListTechnologiesItem',
  props: {
    techName: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    }
  }
};
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

    &__docker {
      &::before {
        width: 70px;
      }
    }

    &__mobile-ios-android {
      &::before {
        width: 84px;
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

      &__docker {
        &::before {
          width: 50px;
        }
      }

      &__mobile-ios-android {
        &::before {
          width: 64px;
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
