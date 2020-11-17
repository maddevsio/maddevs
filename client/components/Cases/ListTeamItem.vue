<template>
  <li class="case_team-item">
    <img class="case_team-item__image"> <!-- Выставил временно, заменю на компонент Picture как только подготовлю его -->
    <div class="case_team-item__info">
      <p class="case_team-item__name">{{name}}</p>
      <p class="case_team-item__position">{{position}}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ListTeamItem',
  props: {
    name: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped lang="scss">
  @import '../../assets/styles/cases/_mixins';

  .case_team-item {
    display: flex;
    align-items: center;

    &__info-wrap {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
    }

    &__name {
      @include team-item_name($text-color--black-cases);
    }

    &__position {
      @include team-item_position($text-color--black-cases);
    }

    &__image {
      @include team-item_image;
    }
  }
</style>
