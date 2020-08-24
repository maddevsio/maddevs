<template>
  <svg viewBox="0 0 48 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27.25 0.25C16.0675 0.25 7 9.3175 7 20.5H0.25L9.0025 29.2525L9.16 29.5675L18.25 20.5H11.5C11.5 11.7925 18.5425 4.75 27.25 4.75C35.9575 4.75 43 11.7925 43 20.5C43 29.2075 35.9575 36.25 27.25 36.25C22.9075 36.25 18.97 34.4725 16.135 31.615L12.94 34.81C16.6075 38.4775 21.6475 40.75 27.25 40.75C38.4325 40.75 47.5 31.6825 47.5 20.5C47.5 9.3175 38.4325 0.25 27.25 0.25ZM25 11.5V22.75L34.63 28.465L36.25 25.7425L28.375 21.0625V11.5H25Z"/>
  </svg>
</template>

<script>
export default {
  name: 'RevertIcon'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/get-vw';

  svg {
    width: get-vw(48px); 
    height: get-vw(41px);
  }
</style>
