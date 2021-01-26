<template>
  <div class="card-content background-color-silver">
    <div class="card-content_left-item">
      <h4 class="case_title_h4 m-12_bottom card-content_description-title">Prim's algorithm</h4>
      <TextParagraph>
        Prim's algorithm is used to effectively connect the dots on a map. This is how a trip request list is transformed into a map, where new potential routes are displayed for easier overview. The algorithm connects the dots and the map’s possible routes. Our aim is to connect as many dots as possible while keeping the longevity under 20 km.
      </TextParagraph>
    </div>
    <div class="card-content_right-item">
      <Picture 
        pictureFolder="godee"
        fileName="primalg"
        fileExtension="jpg"
        alt=""
        :boxShadow="true"
        :lazyLoading="true"
        :borderRadius="true"
      />
    </div>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/TextParagraph';
import Picture from '@/components/Cases/Picture';

export default {
  name: 'CardGoDeePrimsAlgorithm',
  components: {
    TextParagraph,
    Picture
  }
};
</script>

<style scoped lang="scss">
  @import '../../../assets/styles/cases/_mixins';

  .card-content {
    display: flex;
    justify-content: space-between;
    padding: 33px 118px 36px 104px;
    border-radius: 8px;

    &_left-item {
      width: 468px;
    }

    &_right-item {
      margin: -22px 0;
      max-width: 254px;
      max-height: 262px;
    }
  }
</style>
