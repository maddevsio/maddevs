<template>
  <div class="icons-list">
    <div class="icon-flex_group">
      <TechIcon v-for="(icon, i) in icons" :key="i" :class-prefix="icon.prefix" :title="icon.title"/>
    </div>
  </div>
</template>

<script>
import TechIcon from './tech-icon';

export default {
  name: 'ProjectManagement',
  components: {TechIcon},
  data() {
    return {
      icons: [
        {
          title: 'Atlassian Jira',
          prefix: 'jira'
        },
        {
          title: 'Slack',
          prefix: 'slack'
        },
        {
          title: 'Hangouts',
          prefix: 'hangouts'
        },
        {
          title: 'Skype',
          prefix: 'skype'
        }
      ]
    };}
};
</script>

<style lang="scss" scoped>

  @media only screen and (max-width: 640px) {
    .icons-list {
      max-width: 310px;
    }

    .jira {
      margin-left: -4px;
    }
  }
</style>
