<template>
  <div
    id="introduction-container"
    class="blog-post__introduction-container"
  >
    <slot name="beforeTitle" />
    <h1
      :id="createAnchorID(title)"
      class="blog-post__blog-title title"
    >
      {{ title }}
    </h1>
    <p class="blog-post__blog-sub-title">
      {{ subtitle }}
    </p>
    <slot name="afterTitle" />
    <div
      v-if="coverImageUrl"
      class="blog-post__introduction-image"
      :class="imageBackgroundClass"
    >
      <img
        :src="compressedImage"
        :width="coverImageWidth"
        :height="coverImageHeight"
        :alt="coverImageAltText"
      >
    </div>
  </div>
</template>

<script>
import mainMixins from '@/mixins/mainMixins'
import extractFileExtension from '@/helpers/extractFileExtension'

export default {
  name: 'Common',

  mixins: [mainMixins],

  props: {
    title: {
      type: String,
      required: true,
    },

    subtitle: {
      type: String,
      required: false,
      default: '',
    },

    coverImageUrl: {
      type: String,
      default: '',
    },

    coverImageAltText: {
      type: String,
      default: '',
    },

    coverImageWidth: {
      type: Number,
      default: 983,
    },

    coverImageHeight: {
      type: Number,
      default: 534,
    },
  },

  computed: {
    compressedImage() {
      const imageWithoutCrop = this.coverImageUrl.split('?auto')[0] // get image without crop and default compress params
      const compressedImage = `${imageWithoutCrop}?q=50` // set custome compress params
      return compressedImage
    },

    imageBackgroundClass() {
      const allowedExtensions = ['jpeg', 'jpg']
      const extension = extractFileExtension(this.coverImageUrl)
      return allowedExtensions.includes(extension) ? 'blog-post__introduction-image--with-background' : ''
    },
  },

  head() {
    return {
      link: [
        {
          rel: 'preload',
          as: 'image',
          href: this.compressedImage,
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.blog-post {
  &__blog-title {
    @include font('Poppins', 52px, 400);
    line-height: 67px;
    letter-spacing: -2px;
    color: $text-color--white;
  }

  &__blog-sub-title {
    @include font('Inter', 17px, 300);
    margin-bottom: 36px;
    color: $text-color--white-primary;
    letter-spacing: 0.2px;
    font-size: 17px;
    line-height: 28px;
  }

  &__introduction-image {
    width: 983px;
    margin-left: -82.5px;
    &--with-background {
      background-color: $bgcolor--silver;
    }
    img {
      width: 100%;
      height: auto;
      display: block;
      vertical-align: middle;
    }
  }
}

@media screen and (max-width: 1024px) {
  .blog-post {
    &__introduction-container {
      padding-top: 120px;
      background-color: $bgcolor--black;
    }

    &__blog-title {
      padding: 0 24px;
      font-size: 35px;
      line-height: 45px;
      letter-spacing: -1px;
    }

    &__blog-sub-title {
      padding: 0 24px;
    }

    &__introduction-image {
      width: 100%;
      margin: 0;
      img {
        vertical-align: bottom;
      }
    }
  }
}
</style>
