<template>
  <common-header
    :title="$prismic.asText(document.title)"
    :subtitle="$prismic.asText(document.subtitle)"
    :coverImageUrl="document.featured_image.url"
  >
    <template v-slot:beforeTitle>
      <div class="row">
        <div class="col-6">
          <div class="cluster__name">Cluster name</div>
          <div class="cluster__navigation-select">
            navigation-select
          </div>
        </div>
        <div class="col-6">
          <div class="cluster__navigation-buttons">
            navigation buttons
          </div>
        </div>
      </div>
    </template>
  </common-header>
</template>

<script>
import CommonHeader from '@/components/Blog/header/Common';

export default {
  name: 'CustomerUniversity',
  components: {
    CommonHeader
  },
  props: {
    document: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">

</style>
