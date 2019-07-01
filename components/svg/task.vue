<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
    <g fill="none" fill-rule="evenodd">
      <rect width="14" height="14" rx="2"/>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8l2.5 2L11 5"/>
    </g>
  </svg>
</template>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  svg {
    rect {
      fill: $jira-task;
    }

    path {
      stroke: $bgcolor--white;
    }
  }
</style>
