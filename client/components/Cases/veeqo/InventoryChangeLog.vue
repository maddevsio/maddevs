<template>
  <div class="case_container container_full background-color-silver m-48_bottom">
    <div class="case_image-wrapp">
      <Picture
        folder="veeqo"
        file="inventory-change-log"
        extension="png"
        alt="Inventory change log"
        :width="1440"
        :height="366"
        :background="false"
      />
    </div>
  </div>
</template>

<script>
import Picture from '@/components/Cases/shared/Picture'

export default {
  name: 'InventoryChangeLog',
  components: {
    Picture,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';
@import '@/assets/styles/cases/_mixins';

.case {
  &_container {
    max-height: 498px;
    overflow: hidden;
  }

  &_image-wrapp {
    min-width: 2386px;
    max-width: 2386px;
    padding-top: 110px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (max-width: 880px) {
    &_container {
      max-height: 443px;
    }

    &_image-wrapp {
      padding-top: 20px;
      left: unset;
      right: 754px;
      transform: none;
    }
  }
}
</style>
