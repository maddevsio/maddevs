<template>
  <li class="case_team-member">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'TeamMember'
};
</script>

<style scoped lang="scss">
  @import '../../assets/styles/cases/_mixins';
  
  .case_team-member {
    @include team_member;

    &__info-wrap {
      @include team-member_info;
    }

    &__full-name {
      @include team-member_full-name($text-color--black-cases); 
    }

    &__position {
      @include team-member_position($text-color--black-cases);
    }

    &__image {
      @include team-member_image;
    }
  }
</style>
