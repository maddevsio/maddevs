<template>
  <section>
    <!-- Slice section template -->
    <section
      v-for="(slice, index) in slices"
      :key="'slice-' + index"
      data-testid="test-slice-post"
      :class="slice.slice_type === 'quote' ? 'quote' : ''"
    >
      <!-- Text slice template -->
      <template v-if="slice.slice_type === 'text'">
        <!-- Here :slice="slice" passes the data to the component -->
        <TextSlice :slice="slice" />
      </template>
      <!-- Quote slice template -->
      <template v-else-if="slice.slice_type === 'quote'">
        <QuoteSlice :slice="slice" />
      </template>
      <!-- Image with caption slice template -->
      <template v-else-if="slice.slice_type === 'image_with_caption'">
        <ImageCaptionSlice :slice="slice" />
      </template>
      <template v-else-if="slice.slice_type === 'image_with_attributes'">
        <ImageAttributesSlice :slice="slice" />
      </template>
      <template v-else-if="slice.slice_type === 'embed'">
        <EmbedSlice :slice="slice" />
      </template>
      <template v-else-if="slice.slice_type === 'codeblock'">
        <CodeBlockSlice :slice="slice" />
      </template>
      <template v-else-if="slice.slice_type === 'divider'">
        <DividerSlice />
      </template>
      <template v-else-if="slice.slice_type === 'ordered_list'">
        <OrderedList :slice="slice" />
      </template>
      <template v-else-if="slice.slice_type === 'doublecolumn_bordered'">
        <DoubleColumnBorderedSlice :slice="slice" />
      </template>
      <template v-else-if="slice.slice_type === 'github_gist'">
        <GithubGistSlice :slice="slice" />
      </template>
      <template v-else-if="slice.slice_type === 'image_gallery'">
        <GallerySlice :slice="slice" />
      </template>
      <template v-else-if="slice.slice_type === 'section_id'">
        <SectionIdSlice :slice="slice" />
      </template>
      <template v-else-if="slice.slice_type === 'author'">
        <AuthorSlice :slice="slice" />
      </template>
    </section>
  </section>
</template>

<script>
import CodeBlockSlice from '@/components/slices/CodeBlockSlice/index.vue'
import SectionIdSlice from '@/components/slices/SectionIdSlice'
import QuoteSlice from '@/components/slices/QuoteSlice.vue'
import TextSlice from '@/components/slices/TextSlice.vue'
import ImageCaptionSlice from '@/components/slices/ImageCaptionSlice.vue'
import EmbedSlice from '@/components/slices/EmbedSlice.vue'
import DividerSlice from '@/components/slices/DividerSlice'
import ImageAttributesSlice from '@/components/slices/ImageAttributesSlice'
import OrderedList from '@/components/slices/OrderedList'
import DoubleColumnBorderedSlice from '@/components/slices/DoubleColumnBorderedSlice'
import GithubGistSlice from '@/components/slices/GithubGistSlice'
import GallerySlice from '@/components/slices/GallerySlice'
import AuthorSlice from '@/components/slices/AuthorSlice'

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
    DividerSlice,
    GithubGistSlice,
    GallerySlice,
    SectionIdSlice,
    AuthorSlice,
  },

  props: {
    slices: {
      type: Array,
      required: true,
    },
  },
}
</script>
