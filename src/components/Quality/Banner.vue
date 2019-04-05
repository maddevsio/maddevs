<template>
  <section id="quality-banner" class="quality-banner">
    <div class="container">
      <h1>Мы несем <span>ответственность за качество</span> и юзабилити продукта</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/variables';

  .quality-banner {
    width: 100%;
    min-height: 610px;
    position: relative;
    background-color: $bgcolor--black;
    padding-top: 198px;
    box-sizing: border-box;

    h1 {
      width: 525px;
      font-size: 49px;
      color: $text-color--white;
      font-weight: lighter;
      font-family: 'MADEEvolveSans-light', sans-serif;
      line-height: 1.35;
      letter-spacing: -0.4px;

      span {
        font-weight: bold;
      }
    }
  }
</style>
