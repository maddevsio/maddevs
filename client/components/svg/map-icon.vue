<template>
  <svg viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40.125 0.25L39.765 0.3175L27.75 4.975L14.25 0.25L1.56 4.525C1.0875 4.6825 0.75 5.0875 0.75 5.605V39.625C0.75 40.255 1.245 40.75 1.875 40.75L2.235 40.6825L14.25 36.025L27.75 40.75L40.44 36.475C40.9125 36.3175 41.25 35.9125 41.25 35.395V1.375C41.25 0.745 40.755 0.25 40.125 0.25ZM27.75 36.25L14.25 31.5025V4.75L27.75 9.4975V36.25Z"/>
  </svg>
</template>

<script>
export default {
  name: 'MapIcon'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/get-vw';

  svg {
    width: get-vw(42px); 
    height: get-vw(41px);
  }
</style>
