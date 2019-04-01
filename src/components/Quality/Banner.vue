<template>
  <section id="quality-banner" class="quality-banner">
    <div class="container">
      <h1>Мы несем ответственность за качество и юзабилити продукта</h1>
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
  }
</style>
