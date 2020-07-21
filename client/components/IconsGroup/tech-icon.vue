<template>
  <div class="tech-icon">
    <span :class="`tech-icon__logo tech-icon__logo--${classPrefix}`"/>
    <p class="tech-icon__name">{{title}}</p>
  </div>
</template>

<script>
export default {
  name: 'tech-icon',
  props: {
    title: {
      type: String,
      default: ''
    },
    classPrefix: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .tech-icon {
    display: flex;
    align-items: center;
    padding-bottom: 1vw;
    padding-right: 1vw;

    &__name {
      color: $text-color--grey;
      font-size: 1vw;
      margin-left: 0.3vw;
      font-family: 'Hoves-Regular';
    }

    &__logo {
      display: inline-block;
      height: 1.6vw;
      width: 1.6vw;
      background-repeat: no-repeat;
      margin: 0;
      background-size: contain;

      &--react {
        background-image: url(../../assets/img/Technologies/svg/react-js.svg);
      }

      &--babel {
        background-image: url(../../assets/img/Technologies/svg/babel.svg);
      }

      &--vue {
        background-image: url(../../assets/img/Technologies/svg/vue.svg);
      }

      &--webpack {
        background-image: url(../../assets/img/Technologies/svg/webpack.svg);
      }

      &--python {
        background-image: url(../../assets/img/Technologies/svg/pyton.svg);
      }

      &--javascript {
        background-image: url(../../assets/img/Technologies/svg/javascript.svg);
      }

      &--php {
        background-image: url(../../assets/img/Technologies/svg/php.svg);
      }

      &--node-js {
        background-image: url(../../assets/img/Technologies/svg/node-js.svg);
      }

      &--ruby {
        background-image: url(../../assets/img/Technologies/svg/ruby.svg);
      }

      &--golang {
        background-image: url(../../assets/img/Technologies/svg/golang.svg);
      }

      &--objective {
        background-image: url(../../assets/img/Technologies/svg/objective.svg);
      }

      &--java {
        background-image: url(../../assets/img/Technologies/svg/java.svg);
      }

      &--swift {
        background-image: url(../../assets/img/Technologies/svg/swift.svg);
      }

      &--kotlin {
        background-image: url(../../assets/img/Technologies/svg/kotlin.svg);
      }

      &--hangouts {
        background-image: url(../../assets/img/Technologies/svg/hangouts.svg);
      }

      &--jira {
        background-image: url(../../assets/img/Technologies/svg/jira.svg);
      }

      &--skype {
        background-image: url(../../assets/img/Technologies/svg/skype.svg);
      }

      &--slack {
        background-image: url(../../assets/img/Technologies/svg/slack.svg);
      }
    }
  }
</style>
