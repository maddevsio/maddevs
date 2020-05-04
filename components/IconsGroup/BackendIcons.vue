<template>
  <div class="icons-list">
    <div class="icon-flex_group">
      <div class="icon-item">
        <img src="../../assets/img/Technologies/svg/pyton.svg" alt="Python">
        <span>Python</span>
      </div>
      <div class="icon-item">
        <img src="../../assets/img/Technologies/svg/golang.svg" alt="Golang">
        <span>Go</span>
      </div>
    </div>
    <div class="icon-flex_group">
      <div class="icon-item">
        <img src="../../assets/img/Technologies/svg/javascript.svg" alt="JavaScript">
        <span>JavaScript</span>
      </div>
      <div class="icon-item">
        <img src="../../assets/img/Technologies/svg/php.svg" alt="PHP">
        <span>PHP</span>
      </div>
    </div>
    <div class="icon-flex_group">
      <div class="icon-item">
        <img src="../../assets/img/Technologies/svg/node-js.svg" alt="Node.js">
        <span>Node.js</span>
      </div>
      <div class="icon-item">
        <img src="../../assets/img/Technologies/svg/ruby.svg" alt="Ruby">
        <span>Ruby</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackendIcons'
};
</script>

<style lang="scss" scoped>

  @media only screen and (max-width: 520px) {
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
