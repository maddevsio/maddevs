<template>
  <div class="icons-list">
    <div class="icon-flex_group">
      <div class="icon-item">
        <TechIcon class-prefix="kotlin" title="Kotlin"/>
      </div>
      <div class="icon-item">
        <TechIcon class-prefix="java" title="Java"/>
      </div>
    </div>
    <div class="icon-flex_group">
      <div class="icon-item">
        <TechIcon class-prefix="objective" title="Objective-C"/>
      </div>
      <div class="icon-item">
        <TechIcon class-prefix="swift" title="Swift"/>
      </div>
    </div>
  </div>
</template>

<script>
import TechIcon from '@/components/IconsGroup/tech-icon';

export default {
  name: 'MobileIcons',
  components: {
    TechIcon
  }
};
</script>

<style lang="scss" scoped>

  @media only screen and (max-width: 640px) {
    .technologies-mobile {
      .icons-list {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
      }

      .icon-flex_group {
        &:first-child {
          .icon-item {
            &:first-child {
              padding-right: 86px;
            }
          }
        }

        &:last-child {
          flex-direction: row-reverse;
          justify-content: flex-end;

          .icon-item {
            &:last-child {
              padding-right: 87px;
            }
          }
        }
      }
    }
  }
</style>
