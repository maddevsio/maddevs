<template>
  <div class="projects-countries container">
    <h2 class="projects-countries_title">
      Global projects in 20+ countries
    </h2>
    <p class="projects-countries_description">
      We build solutions for 35M+ users worldwide
    </p>
    <div class="projects-countries_img-wrap">
      <img
        :data-src="$getMediaFromS3('/images/Careers/svg/сountries.svg')"
        alt="lobal projects in 20+ countries"
        width="1240"
        height="558"
        class="projects-countries_img media_lazy"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsCountries',
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.projects-countries {
  &_title,
  &_description {
    letter-spacing: -0.04em;
    line-height: 72px;
    text-align: center;
    color: $text-color--white;
  }

  &_title {
    @include font('Inter', 60px, 800);
  }

  &_description {
    margin-bottom: 9px;
    @include font('Inter', 20px, 400);
  }

  &_img-wrap {
    margin-bottom: 25px;
  }

  &_img {
    width: 100%;
    height: 100%;
  }
}
</style>
