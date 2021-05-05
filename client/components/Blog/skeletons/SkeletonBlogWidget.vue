<template>
  <div class="blog-post">
    <div class="blog-post__cover-image animated background-grey" />
    <div>
      <h2 class="blog-post__title animated background-grey" />
      <p class="blog-post__paragraph background-grey animated" />
      <div class="blog-post__meta">
        <span class="created-at background-grey" />
        <span class="tag" />
      </div>
      <div class="blog-post__author">
        <div class="blog-post__none-image background-grey" />
        <div class="blog-post__author-info background-grey">
          <p class="blog-post__author-name background-grey" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkeletonBlogWidget',
}
</script>

<style lang="scss" scoped>
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
  animation: 2.5s ease infinite SkeletonLoading;
}

.background-grey {
  background-color: $bgcolor--silver;
  background-image: linear-gradient(90deg, #EFEFF4 0%, #FFFFFF 30%, #EFEFF4 60%, #FFFFFF 100%);
  background-size: 400% 400%;
  background-position: center;
}

.blog-post {
  color: $text-color--black;
  text-decoration: none;

  &__cover-image {
    height: 220px;
    margin-bottom: 16px;
  }

  &__title {
    height: 56px;
    background-color: $bgcolor--silver;
    border-radius: 7px;
  }

  &__paragraph {
    margin-top: 15px;
    height: 90px;
  }

  &__author {
    display: flex;
  }

  &__none-image {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 20px;
  }

  &__author-name {
    height: 20px;
    width: 140px;
  }

  &__meta {
    display: flex;
    align-items: center;
    margin: 20px 0;
    font-family: 'Inter', sans-serif;
    font-weight: 400;

    .created-at {
      margin-right: 40px;
      color: $text-color--grey;
      width: 75px;
      height: 28px;
      animation: none;
    }

    .tag {
      background-color: $bgcolor--silver;
      padding: 4px 16px;
      transition: 0.2s;
      width: 140px;
      height: 20px;
    }
  }
}
</style>
