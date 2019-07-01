<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
    <defs>
      <circle id="a" cx="16" cy="16" r="16"/>
    </defs>
    <g fill="none" fill-rule="evenodd">
      <mask id="b">
        <use xlink:href="#a"/>
      </mask>
      <use xlink:href="#a"/>
      <g mask="url(#b)">
        <path fill-rule="nonzero" d="M16 10c-3.04 0-5.5 2.46-5.5 5.5S12.96 21 16 21s5.5-2.46 5.5-5.5S19.04 10 16 10zm-4.082 12.934C6.724 24.507 5 28.777 5 28.777V32h22v-3.223s-1.724-4.27-6.918-5.843C19.797 24.937 18.079 26.5 16 26.5c-2.079 0-3.797-1.563-4.082-3.566z"/>
      </g>
    </g>
  </svg>
</template>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  svg {
    g {
      mask {
        fill: $bgcolor--white;
      }

      use {
        fill: $bgcolor--blue;
      }

      g {
        fill: $bgcolor--white;
      }
    }
  }
</style>
