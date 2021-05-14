<template>
  <div
    class="featured-post"
    :class="theme"
  >
    <div class="row featured-post__wrapper">
      <div class="col-12 col-lg-6 featured-post__main">
        <h2
          class="featured-post__title background-grey animated"
          :class="theme"
        />
        <p
          class="featured-post__paragraph background-grey animated"
          :class="theme"
        />
        <div class="featured-post__data d-flex justify-content-between">
          <div class="featured-post__meta">
            <span class="created-at" />
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6 featured-post__image-wrapper">
        <div
          class="featured-post__image background-grey animated"
          :class="theme"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkeletonFeaturedPost',
  props: {
    theme: {
      type: String,
      default: 'dark',
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../../assets/styles/_vars';
@keyframes SkeletonLoading {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 80% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
.animated {
  animation: 2s ease infinite SkeletonLoading;
}

.background-grey {
  &.dark {
    background: $bgcolor--skeleton-gradient-dark;
    background-size: 500% 500%;
  }
  &.light {
    background-color: $bgcolor--silver;
    background-image: linear-gradient(90deg, $bgcolor--grey-extra-dark, $bgcolor--silver, $bgcolor--grey-extra-dark);
    background-size: 500% 500%;
  }
}
.featured-post {
  text-decoration: none;
  display: block;
  &.dark {
    color: $text-color--white-primary;
  }
  &.light {
    color: $text-color--black;
  }
  &__wrapper {
    align-items: center;
  }
  &__title {
    margin-bottom: 15px;
    height: 67px;
    border-radius: 7px;
  }
  &__paragraph {
    margin-bottom: 44px;
    height: 56px;
    border-radius: 7px;
  }
  &__image-wrapper {
    text-align: right;
    margin-top: 0;
  }
  &__image {
    width: 540px;
    max-width: 100%;
    height: 293px;
    display: inline-block;
  }
}
@media only screen and (max-width: 991px) {
  .featured-post {
    &__main {
      order: 2;
    }
    &__paragraph {
      margin-bottom: 38px;
    }
    &__data {
      display: block;
      /deep/ .blog-post__author {
        margin-bottom: 16px;
      }
    }
    &__meta {
      justify-content: space-between;
      /deep/ .post-tag {
        padding: 8px 16px;
        line-height: 22px;
        margin-left: 0;
      }
    }
    &__image-wrapper {
      order: 1;
      margin-bottom: 16px;
      text-align: center;
    }
    &__image {
      width: 100%;
      height: 42vw;
    }
  }
}
</style>
