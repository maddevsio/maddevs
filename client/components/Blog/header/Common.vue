<template>
  <div class="blog-post__introduction-container">
    <slot name="beforeTitle" />
    <h1 class="blog-post__blog-title title">
      {{ title }}
    </h1>
    <p class="blog-post__blog-sub-title">
      {{ subtitle }}
    </p>
    <slot name="afterTitle" />
    <img
      v-if="coverImageUrl"
      :src="coverImageUrl"
      :class="getImageClass"
      :alt="coverImageAltText"
      :width="coverImageWidth"
      :height="coverImageHeight"
      class="blog-post__introduction-image"
    >
  </div>
</template>

<script>
import extractFileExtension from '@/helpers/extractFileExtension'

export default {
  name: 'Common',
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
      default: 982,
    },

    coverImageHeight: {
      type: Number,
      default: 533,
    },
  },

  computed: {
    getImageClass() {
      const allowedExtensions = ['jpeg', 'jpg']
      const extension = extractFileExtension(this.coverImageUrl)
      return allowedExtensions.includes(extension) ? 'blog-post__introduction-image--with-background' : ''
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../../assets/styles/vars';

.blog-post {
  &__blog-title {
    font-size: 52px;
    line-height: 67px;
    letter-spacing: -2px;
    color: $text-color--white;
    font-family: 'Poppins-Medium', sans-serif;
  }

  &__blog-sub-title {
    margin-bottom: 36px;
    font-family: Inter, sans-serif;
    color: $text-color--white-primary;
    letter-spacing: 0.2px;
    font-size: 17px;
    font-weight: 300;
    line-height: 28px;
  }

  &__introduction-image {
    display: block;
    max-width: 983px;
    height: auto;
    margin-left: -10%;
    vertical-align: middle;
    &--with-background {
      background-color: $bgcolor--silver;
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
      max-width: 100%;
      margin: 0;
      vertical-align: bottom;
    }
  }
}
</style>
