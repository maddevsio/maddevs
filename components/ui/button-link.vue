<template>
  <a :href="this.data.link" class="mnd-button-link" target="_blank" rel="noreferrer">
    {{ this.data.text }}
  </a>
</template>

<script>
export default {
  name: 'Banner',
  props: ['data']
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .mnd-button-link {
    width: 340px;
    max-height: 70px;
    min-height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $accent-color--red;
    border-radius: 5px;
    color: $text-color--white;
    font-size: 24px;
    font-family: 'MADEEvolveSans-medium', sans-serif;
    font-weight: normal;
    text-decoration: none;
    padding: 20px 40px;
    box-sizing: border-box;
    transition: all .2s ease;
    &:hover {
      background-color: rgb(202, 34, 40);
    }
  }

  @media only screen and (max-width: 480px) {
    .mnd-button-link {
      width: 288px;
      height: 70px;
    }
  }
</style>

