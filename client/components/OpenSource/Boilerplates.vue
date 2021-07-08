<template>
  <div class="boilerplates">
    <div class="container">
      <h2 class="boilerplates__title">
        Featured projects
      </h2>
      <p class="boilerplates__subtitle">
        A few listed projects to show the diversity of our community participant roster and some of the promising concepts that are emerging in development technologies.
      </p>
      <ul class="boilerplates__grid">
        <BoilerplatesItem />
      </ul>
    </div>
  </div>
</template>

<script>
import BoilerplatesItem from '@/components/OpenSource/shared/BoilerplatesItem'

export default {
  name: 'FeaturedProjects',
  components: {
    BoilerplatesItem,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

</style>
