<template>
  <div class="expected-team_size">
    <div class="expected-team_size__field-name field-name">Expected team size​</div>
    <div class="expected-team_size__radio-list">
      <label class="expected-team_size__radio-label" :for="`less-five-${inputId}`">
        <input 
          class="expected-team_size__radio-input"
          :id="`less-five-${inputId}`"
          type="radio"
          name="expected team size"
        >
        <span class="expected-team_size__checkmark-radio"></span>
        <p class="expected-team_size__radio-text_item">Less than 5</p>
      </label>
      <label class="expected-team_size__radio-label" :for="`from-five-to-ten-${inputId}`">
        <input 
          class="expected-team_size__radio-input"
          :id="`from-five-to-ten-${inputId}`"
          type="radio"
          name="expected team size"
        >
        <span class="expected-team_size__checkmark-radio"></span>
        <p class="expected-team_size__radio-text_item">From 5 to 10</p>
      </label>
      <label class="expected-team_size__radio-label" :for="`more-than-ten-${inputId}`">
        <input 
          class="expected-team_size__radio-input"
          :id="`more-than-ten-${inputId}`"
          type="radio"
          name="expected team size"
        >
        <span class="expected-team_size__checkmark-radio"></span>
        <p class="expected-team_size__radio-text_item">More than 10</p>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExpectedTeamSize',
  props: {
    inputId: {
      type: String,
      default: 'input-id'
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/_vars';

  .expected-team_size {
    padding-bottom: 35px;

    &__field-name {
      padding-bottom: 16px;
    }

    &__radio-list,
    &__radio-label {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__radio-label {
      padding-left: 25px;
      position: relative;
      cursor: pointer;

      &:hover {
        span {
          background-color: $bgcolor--grey;
        }
      }

      input {
        &:checked ~ {
          span {
            background-color: $bgcolor--red;
          }

          p {
            color: $text-color--red;
          }
        }
      }
    }

    &__radio-text_item, 
    &__checkmark-radio {
      transition: 0.1s;
    }

    &__radio-text_item {
      color: $text-color--grey;
      font-family: 'Hoves-Regular';
      font-size: 18px;
      letter-spacing: -0.03em;
    }

    &__radio-input {
      display: none;
    }

    &__checkmark-radio {
      width: 18px;
      height: 18px;
      display: block;
      position: absolute;
      top: 3px;
      left: 0;
      border-radius: 100%;
      background-color: $input-checkmark-bg;
    }
  }
</style>
