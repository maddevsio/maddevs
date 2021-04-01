<template>
  <section>
    <!-- Slice section template -->
    <section
      v-for="(slice, index) in slices"
      :key="'slice-' + index"
      :class="slice.slice_type === 'quote' ? 'quote' : ''"
    >
      <!-- Text slice template -->
      <template v-if="slice.slice_type === 'text'">
        <!-- Here :slice="slice" passes the data to the component -->
        <text-slice :slice="slice" />
      </template>
      <!-- Quote slice template -->
      <template v-else-if="slice.slice_type === 'quote'">
        <quote-slice :slice="slice" />
      </template>
      <!-- Image with caption slice template -->
      <template v-else-if="slice.slice_type === 'image_with_caption'">
        <image-caption-slice :slice="slice" />
      </template>
      <template v-else-if="slice.slice_type === 'image_with_attributes'">
        <image-attributes-slice :slice="slice" />
      </template>
      <template v-else-if="slice.slice_type === 'embed'">
        <embed-slice :slice="slice" />
      </template>
      <template v-else-if="slice.slice_type === 'codeblock'">
        <code-block-slice :slice="slice" />
      </template>
      <template v-else-if="slice.slice_type === 'divider'">
        <divider />
      </template>
      <template v-else-if="slice.slice_type === 'ordered_list'">
        <ordered-list :slice="slice" />
      </template>
      <template v-else-if="slice.slice_type === 'doublecolumn_bordered'">
        <double-column-bordered-slice :slice="slice" />
      </template>
      <template v-else-if="slice.slice_type === 'github_gist'">
        <github-gist-slice :slice="slice" />
      </template>
      <template v-else-if="slice.slice_type === 'image_gallery'">
        <gallery-slice :slice="slice" />
      </template>
      <template v-else-if="slice.slice_type === 'section_id'">
        <section-id-slice :slice="slice" />
      </template>
    </section>
  </section>
</template>

<script>
import CodeBlockSlice from '@/components/Blog/slices/CodeBlockSlice/index.vue'
import SectionIdSlice from '@/components/Blog/slices/SectionIdSlice'
import QuoteSlice from '~/components/Blog/slices/QuoteSlice.vue'
import TextSlice from '~/components/Blog/slices/TextSlice.vue'
import ImageCaptionSlice from '~/components/Blog/slices/ImageCaptionSlice.vue'
import EmbedSlice from '~/components/Blog/slices/EmbedSlice.vue'
import Divider from './slices/DividerSlice'
import ImageAttributesSlice from './slices/ImageAttributesSlice'
import OrderedList from './slices/OrderedList'
import DoubleColumnBorderedSlice from './slices/DoubleColumnBorderedSlice'
import GithubGistSlice from './slices/GithubGistSlice'
import GallerySlice from './slices/GallerySlice'

export default {
  name: 'SlicesBlock',
  components: {
    DoubleColumnBorderedSlice,
    OrderedList,
    ImageAttributesSlice,
    CodeBlockSlice,
    QuoteSlice,
    TextSlice,
    ImageCaptionSlice,
    EmbedSlice,
    Divider,
    GithubGistSlice,
    GallerySlice,
    SectionIdSlice,
  },

  props: {
    slices: {
      type: Array,
      required: true,
    },
  },
}
</script>
