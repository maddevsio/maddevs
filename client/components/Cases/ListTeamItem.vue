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
      @include default_text($text-color--black-cases, 18px, 22px, -0.035em);
    }

    &__position {
      @include default_text($text-color--black-cases, 13px, 20px, -0.02em);
    }

    &__image {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      background-color: gainsboro; // Выставил временно, удалю как только настрою компонент Pictures
    }
  }
</style>
