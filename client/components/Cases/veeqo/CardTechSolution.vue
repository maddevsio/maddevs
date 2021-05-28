<template>
  <Card class="card-content background-color-silver">
    <img
      v-if="icon"
      :data-src="$getMediaFromS3(`/images/Cases/veeqo/svg/${icon}.svg`)"
      :alt="alt"
      width="51.94"
      height="51.94"
      class="card-content_icon img_lazy"
    >
    <TextParagraph>
      {{ description }}
    </TextParagraph>
  </Card>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Card from '@/components/Cases/shared/Card'

export default {
  name: 'CardTechSolution',
  components: {
    TextParagraph,
    Card,
  },

  props: {
    icon: {
      type: String,
      default: null,
    },

    description: {
      type: String,
      default: '',
    },

    alt: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
.card-content {
  &_icon {
    width: 51.94px;
    height: 51.94px;
    display: block;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 768px) {
    &_icon {
      margin-bottom: 8px;
    }
  }
}
</style>
