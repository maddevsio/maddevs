<template>
  <section id="weUse" class="weUse">
    <div class="container">
      <div class="weUse_wrap">
        <h2 class="sec-title">{{ $t('Technical Expertise') }}</h2>
        <div class="weUse_wrap-list">

          <!-- Left column -->
          <div class="weUse_wrap-list_column">
            <div class="weUse_wrap-list-item">
                <h3>{{ $t('Frontend') }}</h3>
                <p v-if="lang === 'en'">
                  {{ $t('For frontend we use') }} <span> <img src="../../assets/img/Home/svg/weuse/javascript.svg" alt=""> Javascript</span>,
                  {{ $t('and its frameworks') }}  <span> <img src="../../assets/img/Home/svg/weuse/react-js.svg" alt=""> React</span>
                  {{ $t('and') }} <span> <img src="../../assets/img/Home/svg/weuse/vue.svg" alt=""> Vue</span>.
                  {{ $t('We also use') }} <span> <img src="../../assets/img/Home/svg/weuse/es-6.svg" alt=""> ES6</span>
                  {{ $t('and make bundles with') }} <span><img src="../../assets/img/Home/svg/weuse/webpack.svg" alt=""> Webpack</span>
                  {{ $t('and') }} <span><img src="../../assets/img/Home/svg/weuse/Babel.svg" alt=""> Babel</span>
                </p>
                <p v-else>
                  {{ $t('For frontend we use') }} <span> <img src="../../assets/img/Home/svg/weuse/javascript.svg" alt=""> Javascript</span>,
                  {{ $t('and its frameworks') }} <span> <img src="../../assets/img/Home/svg/weuse/react-js.svg" alt=""> React</span>
                  {{ $t('and') }} <span> <img src="../../assets/img/Home/svg/weuse/vue.svg" alt=""> Vue</span>.
                  {{ $t('We also use') }} <span><img src="../../assets/img/Home/svg/weuse/es-6.svg" alt=""> ES6</span>
                  {{ $t('and make bundles with') }} <span><img src="../../assets/img/Home/svg/weuse/webpack.svg" alt=""> Webpack</span>
                  {{ $t('and') }} <span><img src="../../assets/img/Home/svg/weuse/Babel.svg" alt=""> Babel</span>
                </p>
            </div>
            <div class="weUse_wrap-list-item">
              <h3>{{$t('Mobile development')}}</h3>
              <p v-if="lang === 'en'">
                {{ $t('We develop mobile applications for both') }} <span>iOS</span>
                {{ $t('and') }} <span>Android</span>.
                {{ $t('For the development of') }} <span>iOS</span> <span><img src="../../assets/img/Home/svg/weuse/md.svg" alt=""> Mad Devs</span>
                {{ $t('uses') }} <span><img src="../../assets/img/Home/svg/weuse/swift.svg" alt=""> Swift</span>
                {{ $t('and') }} <span> <img src="../../assets/img/Home/svg/weuse/objective.svg" alt=""> Objective-C</span>.
                <span> <img src="../../assets/img/Home/svg/weuse/java.svg" alt=""> Java</span>
                {{ $t('and') }} <span> <img src="../../assets/img/Home/svg/weuse/kotlin.svg" alt=""> Kotlin</span> -
                {{ $t('For') }} <span>Android</span>
              </p>
              <p v-else>
                {{ $t('We develop mobile applications for both') }} <span>iOS</span> {{ $t('and') }} <span>Android</span>.
                {{ $t('For the development of') }} <span>iOS</span>
                {{ $t('applications') }} <span><img src="../../assets/img/Home/svg/weuse/md.svg" alt=""> Mad Devs</span>
                {{ $t('uses') }} <span><img src="../../assets/img/Home/svg/weuse/swift.svg" alt=""> Swift</span>
                {{ $t('and') }} <span> <img src="../../assets/img/Home/svg/weuse/objective.svg" alt=""> Objective-C</span>.
                {{ $t('For') }} <span>Android</span> <span><img src="../../assets/img/Home/svg/weuse/java.svg" alt=""> Java</span>
                {{ $t('and') }} <span> <img src="../../assets/img/Home/svg/weuse/kotlin.svg" alt=""> Kotlin</span>
              </p>
            </div>
            <div class="weUse_wrap-list-item">
                <h3>{{$t('Project management')}}</h3>
                <p v-if="lang === 'en'">
                  {{ $t('Planning and tasks monitoring is done with') }}
                  <span><img src="../../assets/img/Home/svg/weuse/jira.svg" alt=""> JIRA</span>,
                  {{ $t("main communication goes through") }} <span><img src="../../assets/img/Home/svg/weuse/slack.svg" alt=""> Slack</span>
                  {{ $t('and calls via') }}<span><img src="../../assets/img/Home/svg/weuse/hangouts.svg" alt=""> Hangouts</span>,
                  <span><img src="../../assets/img/Home/svg/weuse/zoom.svg" alt=""> Zoom</span>,
                  <span><img src="../../assets/img/Home/svg/weuse/skype.svg" alt=""> Skype</span>.
                </p>
                <p v-else>
                  {{ $t('Planning and tasks monitoring is done with') }}
                  <span><img src="../../assets/img/Home/svg/weuse/jira.svg" alt=""> JIRA</span>,
                  {{ $t("main communication goes through") }} <span><img src="../../assets/img/Home/svg/weuse/slack.svg" alt=""> Slack</span>
                  {{ $t('and calls via') }} <span><img src="../../assets/img/Home/svg/weuse/hangouts.svg" alt=""> Hangouts</span>,
                  <span><img src="../../assets/img/Home/svg/weuse/zoom.svg" alt=""> Zoom</span>,
                  <span><img src="../../assets/img/Home/svg/weuse/skype.svg" alt=""> Skype</span>.
                </p>
            </div>
          </div>

          <!-- Right column -->
          <div class="weUse_wrap-list_column">
            <div class="weUse_wrap-list-item">
                <h3>{{$t('Backend')}}</h3>
                <p v-if="lang === 'en'">
                  {{ $t('We use') }} <span><img src="../../assets/img/Home/svg/weuse/pyton.svg" alt=""> Python</span>
                  {{ $t('with') }} <span><img src="../../assets/img/Home/svg/weuse/django.svg" alt=""> Django</span>
                  {{ $t('and') }} <span><img src="../../assets/img/Home/svg/weuse/flask.svg" alt=""> Flask</span>
                  {{ $t('frameworks for backend in most of the projects. Sometimes we code on') }} <span><img src="../../assets/img/Home/svg/weuse/php.svg" alt=""> PHP</span>
                  {{ $t('with') }} <span><img src="../../assets/img/Home/svg/weuse/symfony.svg" alt=""> Symfony</span>
                  {{ $t('and') }} <span><img src="../../assets/img/Home/svg/weuse/yii.svg" alt=""> Yii</span>.
                  {{ $t('We use') }} <span> <img src="../../assets/img/Home/svg/weuse/golang.svg" alt=""> Go</span>
                  {{ $t('if the project is highload. Some tasks can not be solved without') }} <span><img src="../../assets/img/Home/svg/weuse/javascript.svg" alt=""> Javascript</span>
                  {{ $t('and') }} <span> <img src="../../assets/img/Home/svg/weuse/node-js.svg" alt=""> Node.js</span>.
                  {{ $t('Also, we love') }} <span><img src="../../assets/img/Home/svg/weuse/ruby.svg" alt=""> Ruby</span>
                  {{ $t('and') }} <span><img src="../../assets/img/Home/svg/weuse/rails.png" alt=""> Rails</span>.
                </p>
                <p v-else>
                  {{ $t('We use') }} <span> <img src="../../assets/img/Home/svg/weuse/pyton.svg" alt=""> Python</span>
                  {{ $t('with frameworks') }} <span> <img src="../../assets/img/Home/svg/weuse/django.svg" alt=""> Django</span>
                  {{ $t('and') }} <span> <img src="../../assets/img/Home/svg/weuse/flask.svg" alt=""> Flask</span>.
                  {{ $t('Sometimes we write on') }} <span> <img src="../../assets/img/Home/svg/weuse/php.svg" alt=""> PHP</span>
                  {{ $t('with') }} <span> <img src="../../assets/img/Home/svg/weuse/symfony.svg" alt=""> Symfony</span>
                  {{ $t('and') }} <span> <img src="../../assets/img/Home/svg/weuse/yii.svg" alt=""> Yii</span>.
                  {{ $t('frameworks for backend') }} <span> <img src="../../assets/img/Home/svg/weuse/golang.svg" alt=""> Go</span>.
                  Есть задачи, которые не решить без помощи{{ $t('and') }} <span> <img src="../../assets/img/Home/svg/weuse/javascript.svg" alt=""> Javascript</span>
                  {{ $t('and') }} <span> <img src="../../assets/img/Home/svg/weuse/node-js.svg" alt=""> Node.js</span>.
                  {{ $t('Also, we love') }} <span><img src="../../assets/img/Home/svg/weuse/ruby.svg" alt=""> Ruby</span>
                  {{ $t('and') }} <span><img src="../../assets/img/Home/svg/weuse/rails.png" alt=""> Rails</span>.
                </p>
            </div>
            <div class="weUse_wrap-list-item">
                <h3>{{$t('Infrastructure')}}</h3>
                <p v-if="lang === 'en'">
                  {{ $t('Our') }} <span>DevOps</span>
                  {{ $t('engineers use') }} <span><img src="../../assets/img/Home/svg/weuse/terraform.svg" alt=""> Terraform</span>,
                  <span><img src="../../assets/img/Home/svg/weuse/cloudformation.png" alt=""> CloudFormation</span>
                  {{ $t('and') }} <span><img src="../../assets/img/Home/svg/weuse/ansible.svg" alt=""> Ansible</span>.
                  <span> <img src="../../assets/img/Home/svg/weuse/jenkins.svg" alt=""> Jenkins</span>,
                  <span><img src="../../assets/img/Home/svg/weuse/bamboo.svg" alt=""> Bamboo</span>,
                  <span><img src="../../assets/img/Home/svg/weuse/team-city.svg" alt=""> TeamCity</span>,
                  <span><img src="../../assets/img/Home/svg/weuse/travis.svg" alt=""> Travis CI</span>,
                  <span><img src="../../assets/img/Home/svg/weuse/circle.svg" alt=""> Circle CI</span>
                  {{ $t('and') }} <span><img srcset="../../assets/img/Home/png/we-use/aswcp@2x.png 2x" src="../../assets/img/Home/png/we-use/aswcp.png" alt=""> AWS CodePipeline</span>
                  {{ $t('to set up') }} <span>CI/CD</span>
                  {{ $t('and guarantee the HA of the product') }}:
                  <span><img src="../../assets/img/Home/svg/weuse/asw.svg" alt=""> AWS</span>,
                  <span><img src="../../assets/img/Home/svg/weuse/digital-ocean.svg" alt=""> Digital Ocean</span>,
                  <span><img src="../../assets/img/Home/svg/weuse/heroku.svg" alt=""> Heroku</span>,
                  <span><img src="../../assets/img/Home/svg/weuse/azure.svg" alt=""> Azure</span>
                  {{ $t('and we operate with the following tools to collect application and system indicators') }}:
                  <span><img src="../../assets/img/Home/svg/weuse/senrty.svg" alt=""> Sentry</span>,
                  <span><img src="../../assets/img/Home/svg/weuse/prometheus.svg" alt=""> Prometheus</span>,
                  <span><img src="../../assets/img/Home/svg/weuse/aws-cloudwatch.svg" alt=""> Amazon CloudWatch</span>,
                  <span><img src="../../assets/img/Home/svg/weuse/elk.svg" alt=""> ELK</span>.
                </p>
                <p v-else>
                  {{ $t('engineers use') }}
                  <span><img src="../../assets/img/Home/svg/weuse/terraform.svg" alt=""> Terraform</span>,
                  <span><img src="../../assets/img/Home/svg/weuse/cloudformation.png" alt=""> CloudFormation</span>
                  {{ $t('and') }} <span><img src="../../assets/img/Home/svg/weuse/ansible.svg" alt=""> Ansible</span>.
                  <span> <img src="../../assets/img/Home/svg/weuse/jenkins.svg" alt=""> Jenkins</span>,
                  <span><img src="../../assets/img/Home/svg/weuse/bamboo.svg" alt=""> Bamboo</span>,
                  <span><img src="../../assets/img/Home/svg/weuse/team-city.svg" alt=""> TeamCity</span>,
                  <span><img src="../../assets/img/Home/svg/weuse/travis.svg" alt=""> Travis CI</span>,
                  <span><img src="../../assets/img/Home/svg/weuse/circle.svg" alt=""> Circle CI</span> и
                  <span><img srcset="../../assets/img/Home/png/we-use/aswcp@2x.png 2x" src="../../assets/img/Home/png/we-use/aswcp.png" alt=""> AWS CodePipeline</span>
                  {{ $t('and guarantee the HA of the product') }}:
                  <span><img src="../../assets/img/Home/svg/weuse/asw.svg" alt=""> AWS</span>,
                  <span><img src="../../assets/img/Home/svg/weuse/digital-ocean.svg" alt=""> Digital Ocean</span>,
                  <span><img src="../../assets/img/Home/svg/weuse/heroku.svg" alt=""> Heroku</span>,
                  <span><img src="../../assets/img/Home/svg/weuse/azure.svg" alt=""> Azure</span>
                  {{ $t('and we operate with the following') }}:
                  <span><img src="../../assets/img/Home/svg/weuse/senrty.svg" alt=""> Sentry</span>,
                  <span><img src="../../assets/img/Home/svg/weuse/prometheus.svg" alt=""> Prometheus</span>,
                  <span><img src="../../assets/img/Home/svg/weuse/aws-cloudwatch.svg" alt=""> Amazon CloudWatch</span>,
                  <span><img src="../../assets/img/Home/svg/weuse/elk.svg" alt=""> ELK</span>
                  {{ $t('and more') }}.
                </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import i18n from 'i18next';
export default {
  name: 'we-use',
  data() {
    return {
      lang: i18n.language
    };
  },
  updated() {
    this.lang = i18n.language;
  },
};
</script>
