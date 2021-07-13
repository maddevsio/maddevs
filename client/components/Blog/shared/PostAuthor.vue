<template>
  <NuxtLink
    v-if="name"
    :event="disabled ? '' : 'click'"
    :to="link"
    :class="`post-author--${theme}-theme`"
    class="post-author"
  >
    <div
      v-if="thumbnailImage.url !== undefined"
      class="post-author__image"
    >
      <img
        :src="thumbnailImage.url"
        :alt="thumbnailImage.alt"
        width="36"
        height="36"
      >
    </div>
    <div
      v-else
      class="post-author__none-image"
    />
    <div class="post-author__info">
      <p
        class="post-author__name"
        :title="name"
      >
        {{ shortTitle }}
      </p>
      <span
        class="post-author__position"
        :title="position"
      >{{ position }}</span>
    </div>
  </NuxtLink>
</template>

<script>
import linkResolver from '@/plugins/link-resolver'

export default {
  name: 'PostAuthor',
  props: {
    uid: {
      type: String,
      default: '',
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    name: {
      type: String,
      default: '',
    },

    position: {
      type: String,
      default: '',
    },

    thumbnailImage: {
      type: Object,
      default: () => ({}),
    },

    theme: {
      type: String,
      default: 'light',
    },
  },

  head() {
    return {
      link: [
        {
          rel: 'preload',
          as: 'image',
          href: this.thumbnailImage.url,
        },
      ],
    }
  },

  computed: {
    link() {
      return linkResolver({ type: 'author', uid: this.uid })
    },

    shortTitle() {
      return this.name.substr(0, 100)
    },
  },
}
</script>

<style scoped lang="scss">
.post-author {
  max-width: 100%;
  display: inline-flex;
  align-items: center;
  &--dark-theme {
    .post-author {
      &__image,
      &__none-image {
        background-color: $bgcolor--black-light;
      }
      &__name {
        color: $text-color--white;
      }
    }
  }
  &--light-theme {
    .post-author {
      &__image,
      &__none-image {
        background-color: $bgcolor--silver;
      }
      &__name {
        color: $text-color--black;
      }
    }
  }

  &__image,
  &__none-image {
    width: 36px;
    min-width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
    -webkit-mask-image: -webkit-radial-gradient(white, black); // fix for problems with border-radius in Safari
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    max-width: 100%;
    margin-left: 9px;
    overflow: hidden;
  }

  &__name,
  &__position {
    @include font('Inter', 13px, 400);
    display: block;
    line-height: 129%;
    letter-spacing: -0.02em;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &__name {
    margin-bottom: 4px;
  }

  &__position {
    color: $text-color--grey-pale;
  }
}
</style>
