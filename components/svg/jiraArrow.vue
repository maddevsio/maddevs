<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12">
    <g fill="none" fill-rule="evenodd" transform="translate(-2 -1)">
      <rect width="14" height="14" rx="2"/>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l4-4 4 4M7 12V2"/>
    </g>
  </svg>
</template>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  svg {
    path {
      stroke: $jira-arrow--red;
    }
  }
</style>
