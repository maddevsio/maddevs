<template>
  <div class="container">
    <div class="current-author">
      <img
        :src="blogAuthor.image.url"
        :alt="blogAuthor.image.alt"
        width="170"
        height="170"
        class="current-author__image"
      >
      <h1 class="current-author__name">
        {{ blogAuthor.name }}
      </h1>
      <p class="current-author__position">
        {{ blogAuthor.position }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AuthorSection',

  computed: {
    ...mapGetters(['blogAuthor']),
  },
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/_vars';

  .current-author {
    margin-top: 82px;
    margin-bottom: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $text-color--white-primary;

    &__image {
      width: 165px;
      height: 165px;
      border-radius: 50%;
      overflow: hidden;
      object-fit: cover;
      background-color: $bgcolor--grey-pale;
      -webkit-mask-image: -webkit-radial-gradient(white, black); // fix for problems with border-radius in Safari
    }

    &__name {
      margin-top: 29px;
      margin-bottom: 8px;
      font-size: 41.5px;
      line-height: 130%;
      letter-spacing: -0.04em;
    }

    &__position {
      font-size: 17px;
      line-height: 166%;
      letter-spacing: -0.035em;
      color: $text-color--grey-pale;
    }
  }
</style>
