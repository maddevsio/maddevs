<template>
  <div class="employees-benefits_container container">
    <h2 class="employees-benefits_title">
      Employees benefits
    </h2>
    <div class="employees-benefits_grid">
      <BenefitCard
        v-for="benefit in benefits"
        v-bind="benefit"
        :key="benefit.title"
      />
    </div>
  </div>
</template>

<script>
import BenefitCard from '@/components/Careers/shared/BenefitCard'
import { employeesBenefits as benefits } from '@/data/benefits'

export default {
  name: 'EmployeesBenefits',
  components: {
    BenefitCard,
  },

  data() {
    return {
      benefits,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.employees-benefits {
  &_container,
  &_grid {
    display: grid;
  }

  &_container {
    grid-template-columns: 1fr 2fr;
    padding-top: 100px;
    padding-bottom: 61px;
  }

  &_grid {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }

  &_title {
    margin-right: 48px;
    @include font('Poppins', 60px, 700);
    letter-spacing: -2.6px;
    line-height: 64px;
    color: $text-color--red;
  }

}

/deep/ .benefit-card__item {
  padding: 30px 27px;
}
</style>
