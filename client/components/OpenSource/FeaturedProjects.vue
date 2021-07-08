<template>
  <div class="featured-projects">
    <div class="container">
      <h2 class="featured-projects__title">
        Featured projects
      </h2>
      <p class="featured-projects__subtitle">
        A few listed projects to show the diversity of our community participant roster and some of the promising concepts that are emerging in development technologies.
      </p>
      <ul class="featured-projects__grid">
        <FeaturedProjectsItem />
      </ul>
    </div>
  </div>
</template>

<script>
import FeaturedProjectsItem from '@/components/OpenSource/shared/FeaturedProjectsItem.vue'

export default {
  name: 'FeaturedProjects',
  components: {
    FeaturedProjectsItem,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

</style>
