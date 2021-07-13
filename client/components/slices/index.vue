<template>
  <section>
    <!-- Slice section template -->
    <section
      v-for="(slice, index) in slices"
      :key="'slice-' + index"
      data-testid="test-slice-post"
      :class="slice.slice_type === 'quote' ? 'quote' : ''"
    >
      <!-- Common slices start -->
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
      <!-- Common slices end -->

      <!-- Careers slices start -->
      <template v-else-if="slice.slice_type === 'vacancy_text'">
        <VacancyText
          :slice="slice"
          :html-serializer="serializer"
        />
      </template>
      <!-- Careers slices end -->
    </section>
  </section>
</template>

<script>
// Common slices
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

// Careers slices
import VacancyText from '@/components/slices/Careers/VacancyText'

import linkResolver from '@/plugins/link-resolver'
import mainMixins from '@/mixins/mainMixins'
import convertTagsToText from '@/helpers/convertTagsToText'

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
    VacancyText,
  },

  mixins: [mainMixins],

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
      const types = ['post', 'customer_university']
      if (types.includes(this.slicesType)) return this.htmlSerializer
      return null
    },
  },

  methods: {
    htmlSerializer(type, element, content, children) {
      const { Elements } = this.$prismic.dom.RichText
      const { Link } = this.$prismic.dom
      let text = children.join('')

      if (type === Elements.preformatted) {
        // the second parameter of function excludes tags
        text = convertTagsToText(text, ['br'])
      } else {
        text = text.replace(/`(.*?)`/g, (_, inlineCode) => {
          // the second parameter of function excludes tags
          const formattedCode = convertTagsToText(inlineCode, ['strong', 'em', 'a'])
          return `<code class="inline-code">${formattedCode}</code>`
        })
      }

      switch (type) {
        case Elements.heading1: return this.createAnchorTag('h1', text)
        case Elements.heading2: return this.createAnchorTag('h2', text)
        case Elements.heading3: return this.createAnchorTag('h3', text)
        case Elements.heading4: return this.createAnchorTag('h4', text)
        case Elements.heading5: return this.createAnchorTag('h5', text)
        case Elements.heading6: return this.createAnchorTag('h6', text)
        case Elements.paragraph: return `<p>${text}</p>`
        case Elements.preformatted: return `<pre>${text}</pre>`
        case Elements.strong: return `<strong>${text}</strong>`
        case Elements.em: return `<em>${text}</em>`
        case Elements.listItem: return `<li>${text}</li>`
        case Elements.oListItem: return `<li>${text}</li>`
        case Elements.list: return `<ul>${text}</ul>`
        case Elements.oList: return `<ol>${text}</ol>`
        case Elements.image:
          // eslint-disable-next-line
          const linkUrl = element.linkTo ? Link.url(element.linkTo, linkResolver) : null
          // eslint-disable-next-line
          const linkTarget = element.linkTo && element.linkTo.target ? `target="${element.linkTo.target}" rel="noopener"` : ''
          // eslint-disable-next-line
          const wrapperClassList = [element.label || '', 'block-img']
          // eslint-disable-next-line
          const img = `<img src="${element.url}" alt="${element.alt || ''}" copyright="${element.copyright || ''}">`
          return (`
            <p class="${wrapperClassList.join(' ')}">
              ${linkUrl ? `<a ${linkTarget} href="${linkUrl}">${img}</a>` : img}
            </p>
          `)
        case Elements.embed:
          return (`
            <div data-oembed="${element.oembed.embed_url}"
              data-oembed-type="${element.oembed.type}"
              data-oembed-provider="${element.oembed.provider_name}"
            >
              ${element.oembed.html}
            </div>
          `)
        case Elements.hyperlink:
          // eslint-disable-next-line
          const target = element.data.target ? `target="${element.data.target}" rel="noopener"` : ''
          // eslint-disable-next-line
          const url = Link.url(element.data, linkResolver)
          return `<a ${target} href="${url}">${text}</a>`
        case Elements.label:
          // eslint-disable-next-line
          const label = element.data.label ? ` class="${element.data.label}"` : ''
          return `<span ${label}>${text}</span>`
        case Elements.span: return content ? content.replace(/\n/g, '<br />') : ''
        default: return null
      }
    },

    createAnchorTag(tag, text) {
      return `
        <div id="${this.createAnchorID(text)}" class="anchor_title">
          <${tag} class="anchor_title-h">${text}</${tag}>
          <div class="anchor_copy-link">
            <button data-id="${this.createAnchorID(text)}" class="copy-link">
              <img src="${require('@/assets/img/common/anchor.svg')}" alt="Anchor" width="16" height="16" />
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
