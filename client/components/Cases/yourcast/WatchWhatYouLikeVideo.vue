<template>
  <section class="container_full m-48_bottom media-m-24_bottom background-color-black-primary">
    <div class="case_image-wrapp">
      <Picture
        :shadow="false"
        :lazy="false"
        :radius="false"
        :background="false"
        :width="305"
        :height="609.19"
        folder="yourcast"
        file="iphone-xs-max"
        extension="png"
        alt="iPhone XS Max Gold"
      />
    </div>
  </section>
</template>

<script>
import Picture from '@/components/Cases/shared/Picture'

export default {
  name: 'WatchWhatYouLikeVideo',
  components: {
    Picture,
  },
}
</script>

<style lang="scss" scoped>
  .case {
    &_image-wrapp {
      max-width: 305px;
      max-height: 609.19px;
      margin: auto;
      padding: 35px 35px 0;
    }
  }
</style>
