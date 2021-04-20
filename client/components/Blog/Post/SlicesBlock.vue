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
import CodeBlockSlice from '@/components/Blog/slices/CodeBlockSlice/index.vue'
import SectionIdSlice from '@/components/Blog/slices/SectionIdSlice'
import QuoteSlice from '@/components/Blog/slices/QuoteSlice.vue'
import TextSlice from '@/components/Blog/slices/TextSlice.vue'
import ImageCaptionSlice from '@/components/Blog/slices/ImageCaptionSlice.vue'
import EmbedSlice from '@/components/Blog/slices/EmbedSlice.vue'
import DividerSlice from '@/components/Blog/slices/DividerSlice'
import ImageAttributesSlice from '@/components/Blog/slices/ImageAttributesSlice'
import OrderedList from '@/components/Blog/slices/OrderedList'
import DoubleColumnBorderedSlice from '@/components/Blog/slices/DoubleColumnBorderedSlice'
import GithubGistSlice from '@/components/Blog/slices/GithubGistSlice'
import GallerySlice from '@/components/Blog/slices/GallerySlice'
import AuthorSlice from '@/components/Blog/slices/AuthorSlice'

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
