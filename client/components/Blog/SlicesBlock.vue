<template>
  <section>
    <!-- Slice section template -->
    <section v-for="(slice, index) in slices" :key="'slice-' + index" :class="slice.slice_type === 'quote' ? 'quote' : ''">
      <!-- Text slice template -->
      <template v-if="slice.slice_type === 'text'">
        <!-- Here :slice="slice" passes the data to the component -->
        <text-slice :slice="slice"></text-slice>
      </template>
      <!-- Quote slice template -->
      <template v-else-if="slice.slice_type === 'quote'">
        <quote-slice :slice="slice"></quote-slice>
      </template>
      <!-- Image with caption slice template -->
      <template v-else-if="slice.slice_type === 'image_with_caption'">
        <image-caption-slice :slice="slice"></image-caption-slice>
      </template>
      <template v-else-if="slice.slice_type === 'embed'">
        <embed-slice :slice="slice"></embed-slice>
      </template>
      <template v-else-if="slice.slice_type === 'codeblock'">
        <code-block-slice :slice="slice"></code-block-slice>
      </template>
    </section>
  </section>
</template>

<script>
import QuoteSlice from '~/components/Blog/slices/QuoteSlice.vue';
import TextSlice from '~/components/Blog/slices/TextSlice.vue';
import ImageCaptionSlice from '~/components/Blog/slices/ImageCaptionSlice.vue';
import EmbedSlice from '~/components/Blog/slices/EmbedSlice.vue';
import CodeBlockSlice from './slices/CodeBlockSlice';

export default {
  props: ['slices'],
  name: 'slices-block',
  components: {
    CodeBlockSlice,
    QuoteSlice,
    TextSlice,
    ImageCaptionSlice,
    EmbedSlice
  }
};
</script>

<style scoped lang="scss">
  @import '../../assets/styles/_vars';

  .quote {

  }

</style>
