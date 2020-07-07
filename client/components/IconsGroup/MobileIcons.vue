<template>
  <div class="icons-list">
    <div class="icon-flex_group">
      <div class="icon-item">
        <img src="../../assets/img/Technologies/svg/kotlin.svg" alt="Kotlin">
        <span>Kotlin</span>
      </div>
      <div class="icon-item">
         <img src="../../assets/img/Technologies/svg/java.svg" alt="Java">
         <span>Java</span>
      </div>
    </div>
    <div class="icon-flex_group">
      <div class="icon-item">
        <img src="../../assets/img/Technologies/svg/objective.svg" alt="Objective-C">
        <span>Objective-C</span>
      </div>
      <div class="icon-item">
        <img src="../../assets/img/Technologies/svg/swift.svg" alt="Swift">
        <span>Swift</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileIcons'
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
