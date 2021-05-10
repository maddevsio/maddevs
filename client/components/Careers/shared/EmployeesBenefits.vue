<template>
  <div class="employees-benefits">
    <div
      v-for="benefit in benefits"
      :key="benefit.icon"
      class="employees-benefits__item"
    >
      <img
        :src="require(`@/assets/img/EmployeesBenefits/svg/${benefit.icon}.svg`)"
        class="employees-benefits__item-icon"
      >
      <p class="employees-benefits__item-title">
        {{ benefit.title }}
      </p>
    </div>
  </div>
</template>

<script>
import { employeesBenefits as benefits } from '@/data/employeesBenefits'

export default {
  name: 'EmployeesBenefits',
  data() {
    return {
      benefits,
    }
  },
}
</script>

<style lang="scss" scroped>
@import '../../../assets/styles/vars';

.employees-benefits {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8px 10px;
  &__item {
    padding: 28px 16px 32px 27px;
    background-color: $bgcolor--silver;
    border-radius: 4px;
    &-icon {
      display: block;
    }
    &-title {
      margin-top: 20px;
      font-size: 17px;
      line-height: 140%;
      letter-spacing: -0.013em;
      color: $text-color--black-oil;
    }
  }
}
</style>
