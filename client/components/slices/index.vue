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
        <TextSlice
          :slice="slice"
          :html-serializer="serializer"
        />
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
    slicesType: {
      type: String,
      default: null,
    },

    slices: {
      type: Array,
      required: true,
    },
  },

  computed: {
    serializer() {
      if (this.slicesType === 'post') return this.htmlSerializer
      return null
    },
  },

  methods: {
    htmlSerializer(type, element, content, children) {
      const text = children.join('')
      if (type === 'heading2') {
        return this.createAnchorTag('h2', text)
      }
      if (type === 'heading3') {
        return this.createAnchorTag('h3', text)
      }
      if (type === 'heading4') {
        return this.createAnchorTag('h4', text)
      }
      if (type === 'heading5') {
        return this.createAnchorTag('h5', text)
      }
      if (type === 'heading6') {
        return this.createAnchorTag('h6', text)
      }
      return null
    },

    createAnchorID(text) {
      if (!text || typeof text !== 'string') return null
      const formattedText = text.trim().toLowerCase().replace(/&amp;|[|&;$%@"<>()+,?!]/g, '').replace(/\s+/g, '-')
      return formattedText
    },

    createAnchorTag(tag, text) {
      return `
        <div id="${this.createAnchorID(text)}" class="anchor_title">
          <${tag} class="anchor_title-h">${text}</${tag}>
          <div class="anchor_copy-link">
            <button data-id="${this.createAnchorID(text)}" class="copy-link">
              <img src="${require('@/assets/img/common/anchor.svg')}" alt="Anchor" />
            </button>
            <div class="anchor_copy-link-tooltip">Copy link</div>
          </div>
        </div>
      `
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';
@import '@/assets/styles/cases/_mixins.scss';

/deep/ h1,
/deep/ h2,
/deep/ h3,
/deep/ h4,
/deep/ h5,
/deep/ h6 {
  margin-top: 48px;
  margin-bottom: 12px;
}

/deep/ h1 {
  @include title($text-color--black-oil, 38px, -0.04em);
  display: none; // h1 tag should not be used
}
/deep/ h2 {
  @include title($text-color--black-oil, 32px, -0.04em);
}
/deep/ h3 {
  @include title($text-color--black-oil, 26px, -0.04em);
}
/deep/ h4 {
  @include title($text-color--black-oil, 21px, -0.04em);
}
/deep/ h5 {
  @include title($text-color--black-oil, 17px, -0.04em);
}
/deep/ h6 {
  @include title($text-color--black-oil, 14px, -0.04em);
}

/deep/ a {
  text-decoration: underline;
  color: inherit;
  font-family: inherit;
  font-weight: inherit;
}

/deep/ img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}

/deep/ hr {
  border-bottom: none;
  border-left: none;
  border-right: none;
  border-top: 1px solid $border-color--grey-20-percent;
  margin: 48px 0;
}

/deep/ strong {
  font-weight: 700;
}

/deep/ ul,
/deep/ ol {
  padding-left: 18px;
}

/deep/ ul {
  list-style: disc;
}

/deep/ ol {
  list-style: decimal;
}

/deep/ p,
/deep/ li {
  font-size: 17px;
  line-height: 28px;
  letter-spacing: -0.02em;
}

/deep/ li {
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
}

/deep/ p {
  margin: 12px 0;
  & + p {
    margin-top: 24px;
  }
}

/deep/ .inline-code {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 15px;
  font-weight: 400;
  background: $bgcolor--grey-light;
  padding: 0 4px;
  border-radius: 3px;
  display: inline-block;
  line-height: 129%;
}

/deep/ pre {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 14px;
  font-weight: 400;
  padding: 20px;
  overflow: auto;
  background: $bgcolor--grey-light;
  border-radius: 2px;
  line-height: 24px;
}

/deep/ .anchor_title {
  position: relative;

  .anchor_copy-link {
    button {
      display: none;
      position: absolute;
      left: -36px;
      top: 50%;
      transform: translateY(-50%);
      padding: 12px;
      cursor: pointer;
      border: 0;
      background-color: transparent;

      img {
        width: 16px;
        height: 16px;
        user-select: none;
        pointer-events: none;
      }
    }

    &-tooltip {
      display: none;
      position: absolute;
      left: -102px;
      top: 50%;
      transform: translateY(-50%);
      background-color: #F4F4F4;
      padding: 4px 8px;
      box-sizing: border-box;
      border-radius: 4px;
      border: 0;
      line-height: 18px;
      color: #101113;
      transition: all 0.1s ease;
      @include font('Inter', 12px, 400);
    }

    &:hover {
      .anchor_copy-link-tooltip {
        display: block;
      }
    }
  }

  &:hover {
    .anchor_copy-link button {
      display: block;
    }
  }
}

@media only screen and (max-width: 1024px) {
  /deep/ h2 {
    font-size: 26px;
    line-height: 33px;
  }

  /deep/ h5 {
    font-size: 20px;
    line-height: 27px;
  }

  /deep/ p {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
