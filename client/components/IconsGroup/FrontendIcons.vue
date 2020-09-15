<template>
  <div class="icons-list">
    <div class="icon-flex_group">
      <div class="icon-item">
        <TechIcon class-prefix="react" title="React"/>
      </div>
      <div class="icon-item">
        <TechIcon class-prefix="babel" title="Babel"/>
      </div>
    </div>
    <div class="icon-flex_group">
      <div class="icon-item">
        <TechIcon class-prefix="vue" title="Vue"/>
      </div>
      <div class="icon-item">
        <TechIcon class-prefix="webpack" title="Webpack"/>
      </div>
    </div>
  </div>
</template>

<script>
import TechIcon from '@/components/IconsGroup/tech-icon';

export default {
  name: 'FrontendIcons',
  components: {
    TechIcon
  }
};
</script>

<style lang="scss" scoped>

  @media only screen and (max-width: 640px) {
    .technologies-frontend {
      .icons-list {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
      }

      .icon-flex_group {
        &:first-child {
          .icon-item {
            &:first-child {
              padding-right: 90px;
            }
          }
        }

        &:last-child {
          flex-direction: row-reverse;
          justify-content: flex-end;

          .icon-item {
            &:last-child {
              padding-right: 63px;
            }
          }
        }
      }
    }
  }
</style>

