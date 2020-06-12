<template>
  <div class="icons-list">
    <div class="icon-flex_group">
      <div class="icon-item">
        <img src="../../assets/img/Technologies/svg/react-js.svg" alt="react-js">
        <span>React</span>
      </div>
      <div class="icon-item">
        <img src="../../assets/img/Technologies/svg/Babel.svg" alt="babel">
        <span>Babel</span>
      </div>
    </div>
    <div class="icon-flex_group">
      <div class="icon-item">
        <img src="../../assets/img/Technologies/svg/vue.svg" alt="vue-js">
        <span>Vue.js</span>
      </div>
      <div class="icon-item">
        <img src="../../assets/img/Technologies/svg/webpack.svg" alt="webpack">
        <span>Webpack</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FrontendIcons'
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

