<template>
  <div class="featured-projects">
    <div class="container">
      <div class="featured-projects__head">
        <TitleDesc
          text-color="white"
          title="Featured projects"
          description="A few listed projects to show the diversity of our community participant roster and some of the promising concepts that are emerging in development technologies."
        />
      </div>
      <FeaturedProjectsList />
    </div>
  </div>
</template>

<script>
import TitleDesc from '@/components/OpenSource/shared/TitleDesc'
import FeaturedProjectsList from '@/components/OpenSource/shared/FeaturedProjectsList'

export default {
  name: 'FeaturedProjects',
  components: {
    TitleDesc,
    FeaturedProjectsList,
  },
}
</script>

<style lang="scss" scoped>

.featured-projects {
  padding-bottom: 150px;
  &__head {
    margin-bottom: 85px;
  }
}
</style>
