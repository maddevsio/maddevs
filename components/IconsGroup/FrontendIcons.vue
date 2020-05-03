<template>
  <div class="icons-list" :class="className">
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
  name: 'FrontendIcons',
  props: {
    className: {
      type: String,
      default: 'class name'
    }
  }
};
</script>
