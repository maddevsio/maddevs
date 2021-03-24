<template>
  <div class="featured-post">
    <div class="row featured-post__wrapper">
      <div class="col-12 col-lg-6 featured-post__main">
        <h1 class="featured-post__title background-grey animated" />
        <p class="featured-post__paragraph background-grey animated" />
        <div class="featured-post__data d-flex justify-content-between">
          <div class="featured-post__meta">
            <span class="created-at" />
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6 featured-post__image-wrapper">
        <div class="featured-post__image background-grey animated" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkeletonFeaturedPost',
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/_vars';

@keyframes SkeletonLoading {
  0% {
    background-position: -600px 0;
  }
  100% {
    background-position: calc(600px + 100%) 0;
  }
}

.animated {
  animation: 1.5s ease-in-out 1s infinite normal none running SkeletonLoading;
}

.background-grey {
  background-color: $bgcolor--black-light;
  background-image: linear-gradient(
    90deg,
    $bgcolor--black-lighten,
    $bgcolor--black-lighten-pale,
    $bgcolor--black-lighten
  );
}

.featured-post {
  color: $text-color--white-primary;
  text-decoration: none;
  display: block;

  &__wrapper {
    margin: 95px 0;
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
