<template>
  <div class="icons-list">
    <div class="icon-flex_group">
      <div class="icon-item">
        <TechIcon class-prefix="python" title="Python"/>
      </div>
      <div class="icon-item">
        <TechIcon class-prefix="golang" title="Go"/>
      </div>
    </div>
    <div class="icon-flex_group">
      <div class="icon-item">
        <TechIcon class-prefix="javascript" title="JavaScript"/>
      </div>
      <div class="icon-item">
        <TechIcon class-prefix="php" title="PHP"/>
      </div>
    </div>
    <div class="icon-flex_group">
      <div class="icon-item">
        <TechIcon class-prefix="node-js" title="Node.js"/>
      </div>
      <div class="icon-item">
        <TechIcon class-prefix="ruby" title="Ruby"/>
      </div>
    </div>
  </div>
</template>

<script>
import TechIcon from '@/components/IconsGroup/tech-icon';

export default {
  name: 'BackendIcons',
  components: {
    TechIcon
  }
};
</script>

<style lang="scss" scoped>

  @media only screen and (max-width: 640px) {
    .technologies-backend {
      .icons-list {
        display: grid;
        grid-template-columns: repeat(2, 160px);
      }

      .icon-flex_group {
        flex-direction: column;

        &:last-child {
          flex-direction: row;
          flex-wrap: nowrap;

          .icon-item {
            &:last-child {
              padding-left: 63px;
            }
          }
        }
      }
    }
  }
</style>
