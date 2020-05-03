<template>
  <div class="icons-list">
    <div class="icon-flex_group">
      <div class="icon-item">
        <img src="../../assets/img/Technologies/svg/asw.svg" alt="AWS">
        <span>AWS</span>
      </div>
      <div class="icon-item">
        <img src="../../assets/img/Technologies/svg/digital-ocean.svg" alt="Digital Ocean">
        <span>Digital Ocean</span>
      </div>
    </div>
    <div class="icon-flex_group">
      <div class="icon-item">
        <img src="../../assets/img/Technologies/svg/heroku.svg" alt="Heroku">
        <span>Heroku</span>
      </div>
      <div class="icon-item">
        <img src="../../assets/img/Technologies/svg/azure.svg" alt="Azure">
        <span>Azure</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfrastructureFirstIconsGroup'
};
</script>

<style lang="scss" scoped>

  @media only screen and (max-width: 520px) {
    .icons-list {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }

    .icon-flex_group {
      &:first-child {
        .icon-item {
          &:first-child {
            padding-right: 95px;
          }
        }
      }

      &:last-child {
        .icon-item {
          &:first-child {
            padding-right: 80px;
          }
        }
      }
    }
  }
</style>
