<template>
  <section
    id="careers-position"
    class="careers-position"
  >
    <PositionHeader />
    <div class="careers-position__body">
      <div class="container">
        <div class="careers-position__container">
          <EmployeesBenefits />
          <div class="careers-position__content-divider" />
          <CareersAuthor />
          <div class="careers-position__form">
            <CareersForm />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PositionHeader from '@/components/Careers/shared/PositionHeader'
import EmployeesBenefits from '@/components/Careers/shared/EmployeesBenefits'
import CareersAuthor from '@/components/Careers/shared/CareersAuthor'
import CareersForm from '@/components/Careers/shared/CareersForm'

export default {
  name: 'CareersPosition',
  components: {
    PositionHeader,
    EmployeesBenefits,
    CareersAuthor,
    CareersForm,
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.careers-position {
  padding-top: 62px;
  font-family: 'Inter', sans-serif;
  /deep/ &__container {
    max-width: 924px;
  }
  &__body {
    padding: 60px 0 79px;
    background-color: $bgcolor--white-primary;
    color: $text-color--black-oil;
  }
  &__content-divider {
    display: block;
    height: 1px;
    margin-top: 60px;
    margin-bottom: 79px;
    background-color: $border-color--grey-20-percent;
  }
  &__form {
    margin-top: 40px;
  }
}
</style>
