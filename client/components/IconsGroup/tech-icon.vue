<template>
  <div class="tech-icon">
    <span :class="`tech-icon__logo tech-icon__logo--${classPrefix}`"/>
    <p class="tech-icon__name paragraph">{{title}}</p>
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
    padding-right: 4px;

    &__name {
      color: $text-color--grey;
      margin-left: 1px;
      font-family: 'Hoves-Regular', sans-serif;
    }

    &__logo {
      display: inline-block;
      height: 24px;
      width: 24px;
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
        background-image: url(../../assets/img/Technologies/png/jira.png);
      }

      &--skype {
        background-image: url(../../assets/img/Technologies/svg/skype.svg);
      }

      &--slack {
        background-image: url(../../assets/img/Technologies/svg/slack.svg);
      }

      &--asw {
        background-image: url(../../assets/img/Technologies/svg/asw.svg);
      }

      &--digital-ocean {
        background-image: url(../../assets/img/Technologies/svg/digital-ocean.svg);
      }

      &--heroku {
        background-image: url(../../assets/img/Technologies/svg/heroku.svg);
      }

      &--azure {
        background-image: url(../../assets/img/Technologies/svg/azure.svg);
      }

      &--ansible {
        background-image: url(../../assets/img/Technologies/svg/ansible.svg);
      }

      &--terraform {
        background-image: url(../../assets/img/Technologies/svg/terraform.svg);
      }

      &--cloudformation {
        background-image: url(../../assets/img/Technologies/svg/cloudformation.svg);
      }

      &--jenkins {
        background-image: url(../../assets/img/Technologies/svg/jenkins.svg);
      }

      &--bamboo {
        background-image: url(../../assets/img/Technologies/svg/bamboo.svg);
      }

      &--team-city {
        background-image: url(../../assets/img/Technologies/svg/team-city.svg);
      }

      &--travis {
        background-image: url(../../assets/img/Technologies/svg/travis.svg);
      }

      &--aswcp {
        background-image: url(../../assets/img/Technologies/svg/aswcp.png);
      }

      &--circle {
        background-image: url(../../assets/img/Technologies/svg/circle.svg);
      }

      &--elk {
        background-image: url(../../assets/img/Technologies/svg/elk.svg);
      }

      &--senrty {
        background-image: url(../../assets/img/Technologies/svg/senrty.svg);
      }

      &--prometheus {
        background-image: url(../../assets/img/Technologies/svg/prometheus.svg);
      }

      &--amazon-cloudwatch {
        background-image: url(../../assets/img/Technologies/svg/amazon-cloudwatch.svg);
      }

      &--basecamp {
        background-image: url(../../assets/img/Technologies/png/basecamp.png);
      }

      &--confluence {
        background-image: url(../../assets/img/Technologies/svg/confluence.svg);
      }

      &--trello {
        background-image: url(../../assets/img/Technologies/png/trello.png);
      }

      &--notion {
        background-image: url(../../assets/img/Technologies/png/notion.png);
      }

      &--google-meet {
        background-image: url(../../assets/img/Technologies/svg/google-meet.svg);
      }

      &--zoom {
        background-image: url(../../assets/img/Technologies/png/zoom.png);
      }

      &--microsoft-teams {
        background-image: url(../../assets/img/Technologies/png/microsoft-teams.png);
      }

      &--cpp {
        background-image: url(../../assets/img/Technologies/png/cpp.png);
      }

      &--gitlab-ci {
        background-image: url(../../assets/img/Technologies/png/gitlab-ci.png);
      }
    }
  }

</style>
