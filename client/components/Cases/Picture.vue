<template>
  <!-- Добавить цикл подключающий изображение на основе его имени в медиа дериктории взятое из родительского компонента -->
  <picture>
    <source
      class="multi-image"
      :srcset="[require(`@/assets/img/Cases/webp/${fileName}.webp`) + ' ', require(`@/assets/img/Cases/webp/${fileNameRetina}.webp`) + ' 2x']"
      type='image/webp'>
    >
    <img
      class="multi-image"
      :src="[require(`@/assets/img/Cases/jpg/${fileName}.jpg`)]"
      :srcset="[require(`@/assets/img/Cases/jpg/${fileNameRetina}.jpg`) + ' 2x']"
      alt=""
      loading="lazy"
    >
  </picture>
</template>


<script>
export default {
  name: 'Picture',
  props: {
    fileName: {
      type: String,
      default: ''
    },
    fileNameRetina: {
      type: String,
      default: ''
    }
  }
};
</script>
s
<style scoped>
  .multi-image {
    width: 100%;
    height: 100%;
  }
</style>
