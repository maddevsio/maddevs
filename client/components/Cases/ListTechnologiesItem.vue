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
  }
</style>
