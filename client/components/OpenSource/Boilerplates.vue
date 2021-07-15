<template>
  <div
    class="boilerplates"
    data-aos="fade-up"
  >
    <div class="container">
      <div class="boilerplates__head">
        <TitleDesc
          title="Boilerplates"
          description="Build software faster with our collection <br /> of pre-configured code."
        />
      </div>
      <BoilerplatesList />
    </div>
  </div>
</template>

<script>
import TitleDesc from '@/components/OpenSource/shared/TitleDesc'
import BoilerplatesList from '@/components/OpenSource/shared/BoilerplatesList'

export default {
  name: 'Boilerplates',
  components: {
    TitleDesc,
    BoilerplatesList,
  },
}
</script>

<style lang="scss" scoped>
.boilerplates {
  padding-top: 134px;
  padding-bottom: 196px;
  &__head {
    margin-bottom: 46px;
  }

  @media screen and (max-width: 1024px) {
    padding-top: 72px;
    padding-bottom: 124px;
    &__head {
      margin-bottom: 51px;
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 52px;
    padding-bottom: 73px;
    &__head {
      margin-bottom: 21px;
    }
  }
}
</style>
