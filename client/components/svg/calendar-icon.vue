<template>
  <svg viewBox="0 0 46 51" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M41 5.25H38.75V0.75H34.25V5.25H11.75V0.75H7.25V5.25H5C2.525 5.25 0.5 7.275 0.5 9.75V45.75C0.5 48.225 2.525 50.25 5 50.25H41C43.475 50.25 45.5 48.225 45.5 45.75V9.75C45.5 7.275 43.475 5.25 41 5.25ZM41 45.75H5V16.5H41V45.75Z"/>
  </svg>
</template>

<script>
export default {
  name: 'CalendarIcon'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/get-vw';
  @import '../../assets/styles/_vars';

  svg {
    width: get-vw(46px); 
    height: get-vw(51px);
  }
</style>
