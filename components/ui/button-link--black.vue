<template>
  <a :href="this.data.link" class="mnd-button-link--black" target="_blank" rel="noreferrer">
    <img :src="this.icon" alt="Icon">
    {{ this.data.text }}
  </a>
</template>
<script>
export default {
  name: 'Banner',
  props: ['data'],
  data() {
    return {
      icon: require('../../assets/img/common/' + this.data.icon)
    };
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .mnd-button-link--black {
    max-width: 340px;
    max-height: 70px;
    min-height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 40px;
    border-radius: 5px;
    background-color: #1e1e1e;
    font-size: 24px;
    font-family: 'MADEEvolveSans-medium',
    sans-serif;
    color: $text-color--white;
    text-decoration: none;
    box-sizing: border-box;
    margin: 0 auto;
    margin-top: 40px;
    transition: all .2s ease;
    white-space: nowrap;

    &:hover {
      background-color: $bgcolor--black;
    }

    img {
      margin-right: 15px;
    }
  }
  @media only screen and (max-width: 480px) {
    .mnd-button-link--black {  
      width: 288px;
      height: 70px;
    }
  }
</style>
