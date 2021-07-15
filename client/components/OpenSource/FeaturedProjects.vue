<template>
  <div
    class="featured-projects"
    data-aos="fade-up"
  >
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

  @media screen and (max-width: 1024px) {
    padding-bottom: 137px;
    &__head {
      margin-bottom: 83px;
    }
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 94px;
    &__head {
      margin-bottom: 50px;
    }
  }
}
</style>
