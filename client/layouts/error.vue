<template>
  <div class="error-page">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      fill="#fff"
      viewBox="0 0 48 48"
    >
      <path
        d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
      />
    </svg>
    <h1 class="error-page__title title-md">
      Page not found
    </h1>
    <nuxt-link
      to="/"
      class="error-page__to-home-page paragraph"
    >
      Back to the home page
    </nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'error-layout',
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_vars';
.error-page {
  width: max-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  &__title,
  &__to-home-page {
    color: $text-color--white;
  }
  &__to-home-page {
    display: block;
    margin-top: 15px;
  }
}
</style>
