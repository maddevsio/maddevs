<template>
  <section id="weUse" class="weUse">
    <div class="container">
      <div class="weUse_wrap">
        <h2>{{ $t('In the work most often we apply') }}</h2>
        <div class="weUse_wrap-list">
            <div class="weUse_wrap-list-item">
                <h3>{{ $t('Frontend') }}</h3>
                <p v-if="lang === 'en'">
                  For frontend we use with <span> <img src="../../assets/img/svg/weuse/javascript.svg" alt=""> Javascript</span>,
                  and its frameworks  <span> <img src="../../assets/img/svg/weuse/react-js.svg" alt=""> React</span>
                  and <span> <img src="../../assets/img/svg/weuse/vue.svg" alt=""> Vue</span>.
                  We also use <span> <img src="../../assets/img/svg/weuse/es-6.svg" alt=""> ES6</span>
                  and make bundles with <span><img src="../../assets/img/svg/weuse/webpack.svg" alt=""> Webpack</span>
                  and <span><img src="../../assets/img/svg/weuse/babel.png" alt=""> Babel</span>
                </p>
                <p v-else>
                  На фронтенде мы работаем <span> <img src="../../assets/img/svg/weuse/javascript.svg" alt=""> Javascript</span>,
                  сочетая его с фреймворками <span> <img src="../../assets/img/svg/weuse/react-js.svg" alt=""> React</span>
                  и <span> <img src="../../assets/img/svg/weuse/vue.svg" alt=""> Vue</span>.
                  Мы также используем <span><img src="../../assets/img/svg/weuse/es-6.svg" alt=""> ES6</span>
                  и разрабатываем фронтенд с помощью  <span><img src="../../assets/img/svg/weuse/webpack.svg" alt=""> Webpack</span>
                  и <span><img src="../../assets/img/svg/weuse/babel.png" alt=""> Babel</span>
                </p>
            </div>
            <div class="weUse_wrap-list-item">
                <h3>{{$t('Mobile development')}}</h3>
                <p v-if="lang === 'en'">
                  We develop mobile applications for both <span>iOS</span> and <span>Android</span>.
                  For the development of <span>iOS</span>
                  We use <img src="../../assets/img/svg/weuse/swift.svg" alt="">
                  and <span> <img src="../../assets/img/svg/weuse/objective.svg" alt=""> Objective-C</span>.
                  <span> <img src="../../assets/img/svg/weuse/java.svg" alt=""> Java</span>
                  and <span> <img src="../../assets/img/svg/weuse/kotlin.svg" alt=""> Kotlin</span> - For <span>Android</span>
                </p>
                <p v-else>
                  Мы занимаемся мобильной разработкой под <span>iOS</span> и <span>Android</span>.
                  Для разработки <span>iOS</span> приложений <span>Mad Devs</span> использует <img src="../../assets/img/svg/weuse/swift.svg" alt="">
                  и <span> <img src="../../assets/img/svg/weuse/objective.svg" alt=""> Objective-C</span>.
                  Для <span>Android</span> <span><img src="../../assets/img/svg/weuse/java.svg" alt=""> Java</span>
                  и <span> <img src="../../assets/img/svg/weuse/kotlin.svg" alt=""> Kotlin</span>
                </p>
            </div>
            <div class="weUse_wrap-list-item">
                <h3>{{$t('Backend')}}</h3>
                <p v-if="lang === 'en'">
                  We use <span><img src="../../assets/img/svg/weuse/pyton.svg" alt=""> Python</span>
                  with <span><img src="../../assets/img/svg/weuse/django.svg" alt=""> Django</span>
                  and <span><img src="../../assets/img/svg/weuse/flask.svg" alt=""> Flask</span> frameworks for backend in most of the projects.
                  Sometimes we code on <span><img src="../../assets/img/svg/weuse/php.svg" alt=""> PHP</span>
                  with <span><img src="../../assets/img/svg/weuse/symfony.svg" alt=""> Symfony</span>
                  and <span><img src="../../assets/img/svg/weuse/yii.svg" alt=""> Yii</span>.
                  We use <span> <img src="../../assets/img/svg/weuse/golang.svg" alt=""> Go</span>
                  if the project is highload. Some tasks can not be solved without <span><img src="../../assets/img/svg/weuse/javascript.svg" alt=""> Javascript</span>
                  and <span> <img src="../../assets/img/svg/weuse/node-js.svg" alt=""> Node.js</span>.
                </p>
                <p v-else>
                  Для большинства проектов на бекенде мы используем <span> <img src="../../assets/img/svg/weuse/pyton.svg" alt=""> Python</span>
                  с фреймворками <span> <img src="../../assets/img/svg/weuse/django.svg" alt=""> Django</span>
                  и <span> <img src="../../assets/img/svg/weuse/flask.svg" alt=""> Flask</span>.
                  Иногда пишем на <span> <img src="../../assets/img/svg/weuse/php.svg" alt=""> PHP</span>
                  с <span> <img src="../../assets/img/svg/weuse/symfony.svg" alt=""> Symfony</span>
                  и <span> <img src="../../assets/img/svg/weuse/yii.svg" alt=""> Yii</span>.
                  Там, где есть высокая нагрузка, мы используем <span> <img src="../../assets/img/svg/weuse/golang.svg" alt=""> Go</span>.
                  Есть задачи, которые не решить без помощи <span> <img src="../../assets/img/svg/weuse/javascript.svg" alt=""> Javascript</span>
                  и <span> <img src="../../assets/img/svg/weuse/node-js.svg" alt=""> Node.js</span>.
                </p>
            </div>
            <div class="weUse_wrap-list-item">
                <h3>{{$t('Infrastructure')}}</h3>
                <p v-if="lang === 'en'">
                  Our <span>DevOps</span> engineers <span><img src="../../assets/img/svg/weuse/terraform.png" alt=""> Terraform</span>,
                  <span><img src="../../assets/img/svg/weuse/cloudformation.png" alt=""> CloudFormation</span>
                  and <span><img src="../../assets/img/svg/weuse/ansible.svg" alt=""> Ansible</span>.
                  <span> <img src="../../assets/img/svg/weuse/jenkins.svg" alt=""> Jenkins</span>,
                  <span><img src="../../assets/img/svg/weuse/bamboo.svg" alt=""> Bamboo</span>,
                  <span><img src="../../assets/img/svg/weuse/team-city.svg" alt=""> TeamCity</span>,
                  <span><img src="../../assets/img/svg/weuse/travis.svg" alt=""> Travis CI</span>,
                  <span><img src="../../assets/img/svg/weuse/circle.svg" alt=""> Circle CI</span> and
                  <span><img src="../../assets/img/svg/weuse/aswcp.png" alt=""> AWS CodePipeline</span>
                  to set up <span>CI/CD</span> and guarantee the <span>HA</span> of the product
                  We have experience of setting up infrastructure in cloud services:
                  <span><img src="../../assets/img/svg/weuse/asw.svg" alt=""> AWS</span>,
                  <span><img src="../../assets/img/svg/weuse/digital-ocean.svg" alt=""> Digital Ocean</span>,
                  <span><img src="../../assets/img/svg/weuse/heroku.svg" alt=""> Heroku</span>,
                  <span><img src="../../assets/img/svg/weuse/azure.svg" alt=""> Azure</span>
                  and we operate with the following tools to collect application and system indicators:
                  <span><img src="../../assets/img/svg/weuse/senrty.svg" alt=""> Sentry</span>,
                  <span><img src="../../assets/img/svg/weuse/prometheus.png" alt=""> Prometheus</span>,
                  <span><img src="../../assets/img/svg/weuse/aws-cloudwatch.svg" alt=""> CloudWatch</span>,
                  <span><img src="../../assets/img/svg/weuse/elk.svg" alt=""> ELK</span>.
                </p>
                <p v-else>
                  При создании систем высокой доступности, девопсы Mad Devs используют
                  <span><img src="../../assets/img/svg/weuse/cloudformation.png" alt=""> CloudFormation</span>
                  и <span><img src="../../assets/img/svg/weuse/ansible.svg" alt=""> Ansible</span>.
                  <span> <img src="../../assets/img/svg/weuse/jenkins.svg" alt=""> Jenkins</span>,
                  <span><img src="../../assets/img/svg/weuse/bamboo.svg" alt=""> Bamboo</span>,
                  <span><img src="../../assets/img/svg/weuse/team-city.svg" alt=""> TeamCity</span>,
                  <span><img src="../../assets/img/svg/weuse/travis.svg" alt=""> Travis CI</span>,
                  <span><img src="../../assets/img/svg/weuse/circle.svg" alt=""> Circle CI</span> и
                  <span><img src="../../assets/img/svg/weuse/aswcp.png" alt=""> AWS CodePipeline</span>
                  для непрерывного тестирования и непрерывной поставки.
                  У нас есть опыт организации инфраструктуры в облачных сервисах:
                  <span><img src="../../assets/img/svg/weuse/asw.svg" alt=""> AWS</span>,
                  <span><img src="../../assets/img/svg/weuse/digital-ocean.svg" alt=""> Digital Ocean</span>,
                  <span><img src="../../assets/img/svg/weuse/heroku.svg" alt=""> Heroku</span>,
                  <span><img src="../../assets/img/svg/weuse/azure.svg" alt=""> Azure</span>
                  а также стек технологий для мониторинга и сбора системных метрик:
                  <span><img src="../../assets/img/svg/weuse/senrty.svg" alt=""> Sentry</span>,
                  <span><img src="../../assets/img/svg/weuse/prometheus.png" alt=""> Prometheus</span>,
                  <span><img src="../../assets/img/svg/weuse/aws-cloudwatch.svg" alt=""> CloudWatch</span>,
                  <span><img src="../../assets/img/svg/weuse/elk.svg" alt=""> ELK</span> и другие.
                </p>
            </div>
            <div class="weUse_wrap-list-item">
                <h3>{{$t('Project management')}}</h3>
                <p v-if="lang === 'en'">
                  Planning and tasks monitoring is done with
                  <span><img src="../../assets/img/svg/weuse/jira.svg" alt=""> JIRA</span>,
                  main communication goes through <span><img src="../../assets/img/svg/weuse/slack.svg" alt=""> Slack</span>
                  and calls via<span><img src="../../assets/img/svg/weuse/hangouts.svg" alt=""> Hangouts</span>,
                  <span><img src="../../assets/img/svg/weuse/zoom.svg" alt=""> Zoom</span>,
                  <span><img src="../../assets/img/svg/weuse/skype.svg" alt=""> Skype</span>.
                </p>
                <p v-else>
                  Планирование и отслеживание задач осуществляется с помощью
                  <span><img src="../../assets/img/svg/weuse/jira.svg" alt=""> JIRA</span>,
                  а коммуникация ведется в <span><img src="../../assets/img/svg/weuse/slack.svg" alt=""> Slack</span>
                  и через созваны в <span><img src="../../assets/img/svg/weuse/hangouts.svg" alt=""> Hangouts</span>,
                  <span><img src="../../assets/img/svg/weuse/zoom.svg" alt=""> Zoom</span>,
                  <span><img src="../../assets/img/svg/weuse/skype.svg" alt=""> Skype</span>.
                </p>
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
