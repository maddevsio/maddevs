<template>
  <div class="icons-list">
    <div class="icon-flex_group">
      <div class="icon-item jira">
        <TechIcon class-prefix="jira" title="Atlassian Jira"/>
      </div>
      <div class="icon-item">
        <TechIcon class-prefix="slack" title="Slack"/>
      </div>
    </div>
    <div class="icon-flex_group">
      <div class="icon-item">
        <TechIcon class-prefix="hangouts" title="Hangouts"/>
      </div>
      <div class="icon-item">
        <TechIcon class-prefix="skype" title="Skype"/>
      </div>
    </div>
  </div>
</template>

<script>
import TechIcon from '@/components/IconsGroup/tech-icon';

export default {
  name: 'ProjectManagement',
  components: {
    TechIcon
  }
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
