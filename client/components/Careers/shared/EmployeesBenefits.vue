<template>
  <div class="employees-benefits">
    <div
      v-for="benefit in benefits"
      :key="benefit.icon.name"
      class="employees-benefits__item"
    >
      <div class="employees-benefits__item-icon-wrapper">
        <img
          :data-src="$getMediaFromS3(`/images/Careers/svg/${benefit.icon.name}.svg`)"
          :width="benefit.icon.width"
          :height="benefit.icon.height"
          class="employees-benefits__item-icon img_lazy"
        >
      </div>
      <p class="employees-benefits__item-title">
        {{ benefit.title }}
      </p>
    </div>
  </div>
</template>

<script>
import { employeesBenefits as benefits } from '@/data/benefits'

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
@import '@/assets/styles/_vars.scss';

.employees-benefits {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8px 10px;
  &__item {
    padding: 16px;
    background-color: $bgcolor--silver;
    border-radius: 4px;
    &-icon {
      &-wrapper {
        height: 45px;
      }
      display: block;
    }
    &-title {
      line-height: 22px;
      letter-spacing: -0.013em;
      color: $text-color--black-oil;
    }
  }
}
</style>
