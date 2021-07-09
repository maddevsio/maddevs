<template>
  <div class="boilerplates">
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
}
</style>
