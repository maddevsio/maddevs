<template>
  <div class="icons-list">
    <div class="icon-flex_group">
      <div class="icon-item jira">
        <img src="../../assets/img/Technologies/svg/jira.svg" alt="Atlassian Jira">
        <span>Atlassian Jira</span>
      </div>
      <div class="icon-item">
         <img src="../../assets/img/Technologies/svg/slack.svg" alt="Slack">
         <span>Slack</span>
      </div>
    </div>
    <div class="icon-flex_group">
      <div class="icon-item">
        <img src="../../assets/img/Technologies/svg/hangouts.svg" alt="Hangouts">
        <span>Hangouts</span>
      </div>
      <div class="icon-item">
        <img src="../../assets/img/Technologies/svg/skype.svg" alt="Skype">
        <span>Skype</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectManagement'
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
