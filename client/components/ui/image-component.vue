<template>
 <picture>
<!--  <source :class={className} :src='require(`@/assets/img/Home/jxr/experts/${name}.jxr`)' type='image/vnd.ms-photo'>-->
<!--  <source :class={className} :src='require(`@/assets/img/Home/jp2/experts/${name}.jp2`)' type='image/jp2'>-->
  <source :class="className" :srcset="[require(`@/assets/img/Home/webp/experts/${name}.webp`) + ' ', require(`@/assets/img/Home/webp/experts/${nameRetina}.webp`) + ' 2x']" type='image/webp'>
  <img :src="[require(`@/assets/img/Home/png/experts/${name}.png`)]" :srcset="[require(`@/assets/img/Home/png/experts/${nameRetina}.png`) + ' 2x']" :alt={name}>
 </picture>
</template>

<script>
export default {
  name: 'ImageComponent',
  props: {
    name: {
      type: String
    },
    className: {
      type: String
    },
    nameRetina: {
      type: String
    }
  }
};
</script>

