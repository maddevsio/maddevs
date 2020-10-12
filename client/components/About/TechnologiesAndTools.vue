<template>
  <section id="technologies-and-tools" class="technologies-and_tools">
    <div class="container">
      <div class="technologies-and_tools__content-wrap">
        <h2 class="technologies-and_tools__main-title">
          Technologies & Tools
        </h2>
        <div class="tech_legend">
          <div v-for="(item, key) in legend" :key="key" class="tech_legend__item"
               :class="(`legend-${item.value.replace(/\W/g, '').toLowerCase()}`)">
            {{ item.value }}
          </div>
        </div>
        <div class="tech_container">
          <div class="tech_item"
               :key="index"
               :class="(`${item.technology}-${item.value} ${item.technology}`)"
               v-for="(item, index) in technologies"
          >
            <span>{{ item.title }}</span>
          </div>
        </div>
        <div style="display:none;" class="technologies-and_tools__technologies-list">
          <div class="technologies-and_tools__flex-group">
            <TechnologiesItem
              :title="frontend.title"
              :paragraph="frontend.paragraph"
              class="technologies-frontend"
            />
            <TechnologiesItem
              :title="backend.title"
              :paragraph="backend.paragraph"
              class="technologies-backend"
            />
          </div>
          <div class="technologies-and_tools__flex-group">
            <div class="technologies-and_tools__sub-flex_group">
              <TechnologiesItem
                :title="mobile.title"
                :paragraph="mobile.paragraph"
                class="technologies-mobile"
              />
              <TechnologiesItem
                :title="projectManagement.title"
                :paragraph="projectManagement.paragraph"
                class="technologies-project-management"
              />
            </div>
            <InfrastructureTechnologiesItem/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TechnologiesItem from '@/components/About/TechnologiesItem';
import InfrastructureTechnologiesItem from '@/components/About/InfrastructureTechnologiesItem';

export default {
  name: 'TechnologiesAndTools',
  components: {
    TechnologiesItem,
    InfrastructureTechnologiesItem
  },
  data() {
    return {
      legend: [
        {
          value: 'DevOps'
        },
        {
          value: 'QA'
        },
        {
          value: 'Backend'
        },
        {
          value: 'Frontend'
        },
        {
          value: 'Mobile'
        },
        {
          value: 'PM'
        },
        {
          value: 'Infrastructure'
        },
        {
          value: 'UI/UX'
        }
      ],
      technologies: [
        {
          title: 'Ansible',
          value: 'ansible',
          technology: 'devops'
        },
        {
          title: 'Terraform',
          value: 'terraform',
          technology: 'devops'
        },
        {
          title: 'CloudFormation',
          value: 'cloud-formation',
          technology: 'devops'
        },
        {
          title: 'Jenkins',
          value: 'jenkins',
          technology: 'devops'
        },
        {
          title: 'Bamboo',
          value: 'bamboo',
          technology: 'devops'
        },
        {
          title: 'GitlabCI',
          value: 'gitlab',
          technology: 'devops'
        },
        {
          title: 'TravisCI',
          value: 'travis-ci',
          technology: 'devops'
        },
        {
          title: 'ELK',
          value: 'elastic',
          technology: 'devops'
        },
        {
          title: 'CircleCI',
          value: 'circle-ci',
          technology: 'devops'
        },
        {
          title: 'Sentry',
          value: 'sentry',
          technology: 'devops'
        },
        {
          title: 'CloudWatch',
          value: 'cloud-watch',
          technology: 'devops'
        },
        {
          title: 'Prometheus',
          value: 'prometheus',
          technology: 'devops'
        },
        {
          title: 'AWS',
          value: 'aws',
          technology: 'infrastructure'
        },
        {
          title: 'GCP',
          value: 'gsp',
          technology: 'infrastructure'
        },
        {
          title: 'Digital Ocean',
          value: 'digital-ocean',
          technology: 'infrastructure'
        },
        {
          title: 'Azure',
          value: 'azure',
          technology: 'infrastructure'
        },
        {
          title: 'CloudNative',
          value: 'cloud-native',
          technology: 'infrastructure'
        },
        {
          title: 'Heroku',
          value: 'heroku',
          technology: 'infrastructure'
        },
        {
          title: 'Netlify',
          value: 'netlify',
          technology: 'infrastructure'
        },
        {
          title: 'CloudFlare',
          value: 'cloudflare',
          technology: 'infrastructure'
        },
        {
          title: 'Kotlin',
          value: 'kotlin',
          technology: 'mobile'
        },
        {
          title: 'Java',
          value: 'java',
          technology: 'mobile'
        },
        {
          title: 'Objective-C',
          value: 'obj-c',
          technology: 'mobile'
        },
        {
          title: 'Swift',
          value: 'swift',
          technology: 'mobile'
        },
        {
          title: 'IOS',
          value: 'apple',
          technology: 'mobile'
        },
        {
          title: 'Android',
          value: 'android',
          technology: 'mobile'
        },
        {
          title: 'Jira',
          value: 'jira',
          technology: 'pm'
        },
        {
          title: 'Slack',
          value: 'slack',
          technology: 'pm'
        },
        {
          title: 'Meet',
          value: 'meet',
          technology: 'pm'
        },
        {
          title: 'Zoom',
          value: 'zoom',
          technology: 'pm'
        },
        {
          title: 'Miro',
          value: 'miro',
          technology: 'pm'
        },
        {
          title: 'Trello',
          value: 'trello',
          technology: 'pm'
        },
        {
          title: 'Loom',
          value: 'loom',
          technology: 'pm'
        },
        {
          title: 'Jira Assistant',
          value: 'jira-assistant',
          technology: 'pm'
        },
        {
          title: 'Service Desk',
          value: 'jira-service-desk',
          technology: 'pm'
        },
        {
          title: 'Basecamp',
          value: 'basecamp',
          technology: 'pm'
        },
        {
          title: 'Notion',
          value: 'notion',
          technology: 'pm'
        },
        {
          title: 'Zapier',
          value: 'zapier',
          technology: 'pm'
        },
        {
          title: 'Python',
          value: 'python',
          technology: 'backend'
        },
        {
          title: 'Go',
          value: 'go',
          technology: 'backend'
        },
        {
          title: 'Node.js',
          value: 'node',
          technology: 'backend'
        },
        {
          title: 'JavaScript',
          value: 'js',
          technology: 'backend'
        },
        {
          title: 'TypeScript',
          value: 'typescript',
          technology: 'backend'
        },
        {
          title: 'PHP',
          value: 'php',
          technology: 'backend'
        },
        {
          title: 'Ruby',
          value: 'ruby',
          technology: 'backend'
        },
        {
          title: 'C',
          value: 'c',
          technology: 'backend'
        },
        {
          title: 'C++',
          value: 'c-plus',
          technology: 'backend'
        },
        {
          title: 'Figma',
          value: 'figma',
          technology: 'uiux'
        },
        {
          title: 'Adobe Suite',
          value: 'adobe',
          technology: 'uiux'
        },
        {
          title: 'Sketch',
          value: 'sketch',
          technology: 'uiux'
        },
        {
          title: 'InVision',
          value: 'invision',
          technology: 'uiux'
        },
        {
          title: 'Zeplin',
          value: 'zeplin',
          technology: 'uiux'
        },
        {
          title: 'Balsamic',
          value: 'balsamic',
          technology: 'uiux'
        },
        {
          title: 'Principle',
          value: 'principle-app',
          technology: 'uiux'
        },
        {
          title: 'PostCSS',
          value: 'post-css',
          technology: 'frontend'
        },
        {
          title: 'TypeScript',
          value: 'typescript',
          technology: 'frontend'
        },
        {
          title: 'Angular',
          value: 'angular',
          technology: 'frontend'
        },
        {
          title: 'Webpack',
          value: 'webpack',
          technology: 'frontend'
        },
        {
          title: 'Next.js',
          value: 'next',
          technology: 'frontend'
        },
        {
          title: 'Nuxt.js',
          value: 'nuxt',
          technology: 'frontend'
        },
        {
          title: 'JavaScript',
          value: 'js',
          technology: 'frontend'
        },
        {
          title: 'React',
          value: 'react',
          technology: 'frontend'
        },
        {
          title: 'Babel',
          value: 'babel',
          technology: 'frontend'
        },
        {
          title: 'Vue',
          value: 'vue',
          technology: 'frontend'
        },
        {
          title: 'SASS',
          value: 'sass',
          technology: 'frontend'
        },
        {
          title: 'Jasmine',
          value: 'jasmine',
          technology: 'qa'
        },
        {
          title: 'Selenoid',
          value: 'selenoid',
          technology: 'qa'
        },
        {
          title: 'Appium',
          value: 'appium',
          technology: 'qa'
        },
        {
          title: 'Cucumber',
          value: 'cucumber',
          technology: 'qa'
        },
        {
          title: 'PyTest',
          value: 'pytest',
          technology: 'qa'
        },
        {
          title: 'Selenium',
          value: 'selenium',
          technology: 'qa'
        },
        {
          title: 'Selenium Grid',
          value: 'selenium-grid',
          technology: 'qa'
        }
      ],
      frontend: {
        title: 'Frontend',
        paragraph: 'We do frontend development at a fast pace, in accordance with ES6 standards. To create easy-to-maintain projects, we use current tools & technologies:'
      },
      mobile: {
        title: 'Mobile',
        paragraph: 'We don\'t just create mobile apps, we make them intuitive for super-smooth user journeys. Mad Devs do both iOs and Android development and perform audits of existing applications. You can turn to our mobile developers for any of the following programming languages:'
      },
      backend: {
        title: 'Backend',
        paragraph: 'We build reliable backends for the heavy workloads generated by millions of users. Our team has experience with nearly all the popular programming languages:'
      },
      projectManagement: {
        title: 'Project Management',
        paragraph: 'Our project managers can provide you with a detailed report on the workload of every team member. We use modern tools and solutions for task tracking, team sync-ups and our daily communication process:'
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';
@import '../../assets/styles/techIcons';

// establish Technical legends colors
$tech_legends: (
  'devops': rgba(40, 29, 29, 1),
  'qa': rgba(33, 33, 33, 1),
  'backend': rgba(31, 30, 40, 1),
  'frontend': rgba(40, 33, 44, 1),
  'mobile': rgba(26, 36, 36, 1),
  'pm': rgba(38, 38, 31, 1),
  'infrastructure': rgba(38, 32, 27, 1),
  'uiux': rgba(37, 33, 29, 1),
);

@mixin mediaMiddleScreen($property) {
  @media screen and (max-width: 1024px){
    order: $property;
  }
}

.tech_legend {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 43px;

  &__item {
    margin-right: 31px;
    color: #938F95;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.02em;
    display: flex;
    align-items: center;

    &::before {
      content: "";
      display: inline-block;
      width: 16px;
      min-width: 16px;
      height: 16px;
      border-radius: 2px;
      margin-right: 8px;
    }

    &:last-child {
      margin-right: 0;
    }
  }
  // loop, to style Legends
  @each $name, $color in $tech_legends {
    // selector based on class name
    .legend-#{$name}:before {
      background: $color;
    }
  }
}

.tech_container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1px 1px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(9, 1fr);
  }
}

.tech_item {
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  span {
    white-space: nowrap;
    font-family: Poppins, sans-serif;
    font-size: 11px;
    line-height: 13px;
    color: rgba(255, 255, 255, 0.25);
    margin-top: 15px;
    width: 100%;
    max-width: 90px;
    text-overflow: ellipsis;
    text-align: center;
    overflow: hidden;
  }

  @each $name, $color in $tech_legends {
    &.#{$name} {
      background: $color;

      &::before {
        content: '';
        width: 26px;
        height: 26px;
        display: block;
      }
    }
  }

  // Done
  &.qa-jasmine {
    order: 72;

    @include mediaMiddleScreen(54);
  }

  // Done
  &.qa-selenoid {
    order: 70;

    @include mediaMiddleScreen(52);
  }

  // Done
  &.qa-appium {
    order: 47;

    @include mediaMiddleScreen(50);
  }

  // Done
  &.qa-cucumber {
    order: 48;

    @include mediaMiddleScreen(51);
  }

  // Done
  &.qa-test-ng {
    order: 99;
  }

  // Done
  &.qa-pytest {
    order: 71;

    @include mediaMiddleScreen(53);
  }

  // Done
  &.qa-selenium {
    order: 60;

    @include mediaMiddleScreen(45);
  }

  // Done
  &.qa-selenium-grid {
    order: 59;

    @include mediaMiddleScreen(44);
  }

  // Done
  &.backend-python {
    order: 31;

    @include mediaMiddleScreen(32);
  }

  // Done
  &.backend-go {
    order: 32;

    @include mediaMiddleScreen(33);
  }

  // Done
  &.backend-node {
    order: 33;

    @include mediaMiddleScreen(34);
  }

  // Done
  &.backend-js {
    order: 34;

    @include mediaMiddleScreen(35);
  }

  // Done
  &.backend-typescript {
    order: 43;

    @include mediaMiddleScreen(36);
  }

  // Done
  &.backend-php {
    order: 44;

    @include mediaMiddleScreen(41);
  }

  // Done
  &.backend-ruby {
    order: 45;

    @include mediaMiddleScreen(42);
  }

  // Done
  &.backend-c-plus {
    order: 59;

    @include mediaMiddleScreen(25);
  }

  // Done
  &.backend-c {
    order: 46;

    @include mediaMiddleScreen(43);
  }

  // Done
  &.mobile-kotlin {
    order: 11;

    @include mediaMiddleScreen(19);
  }

  // Done
  &.mobile-java {
    order: 12;

    @include mediaMiddleScreen(22);
  }

  // Done
  &.mobile-obj-c {
    order: 35;

    @include mediaMiddleScreen(23);
  }

  // Done
  &.mobile-swift {
    order: 23;

    @include mediaMiddleScreen(20);
  }

  // Done
  &.mobile-apple {
    order: 36;

    @include mediaMiddleScreen(24);
  }

  // Done
  &.mobile-android {
    order: 24;

    @include mediaMiddleScreen(21);
  }

  // Done
  &.frontend-js {
    order: 65;

    @include mediaMiddleScreen(70);
  }

  // Done
  &.frontend-react {
    order: 66;

    @include mediaMiddleScreen(71);
  }

  // Done
  &.frontend-babel {
    order: 67;

    @include mediaMiddleScreen(72);
  }

  // Done
  &.frontend-vue {
    order: 68;

    @include mediaMiddleScreen(73);
  }

  // Done
  &.frontend-webpack {
    order: 55;

    @include mediaMiddleScreen(63);
  }

  // Done
  &.frontend-next {
    order: 56;

    @include mediaMiddleScreen(64);
  }

  // Done
  &.frontend-nuxt {
    order: 57;

    @include mediaMiddleScreen(65);
  }

  // Done
  &.frontend-sass {
    order: 69;

    @include mediaMiddleScreen(74);
  }

  // Done
  &.frontend-post-css {
    order: 52;

    @include mediaMiddleScreen(60);
  }

  // Done
  &.frontend-typescript {
    order: 53;

    @include mediaMiddleScreen(61);
  }

  // Done
  &.frontend-angular {
    order: 54;

    @include mediaMiddleScreen(62);
  }

  // Done
  &.devops-ansible {
    order: 1;
  }

  // Done
  &.devops-terraform {
    order: 2;
  }

  // Done
  &.devops-cloud-formation {
    order: 3;
  }

  // Done
  &.devops-jenkins {
    order: 4;
  }

  // Done
  &.devops-bamboo {
    order: 5;
  }

  // Done
  &.devops-gitlab {
    order: 6;
  }

  // Done
  &.devops-travis-ci {
    order: 13;

    @include mediaMiddleScreen(10);
  }

  // Done
  &.devops-circle-ci {
    order: 14;

    @include mediaMiddleScreen(11);
  }

  // Done
  &.devops-elastic {
    order: 15;

    @include mediaMiddleScreen(12);
  }

  // Done
  &.devops-sentry {
    order: 16;

    @include mediaMiddleScreen(13);
  }

  // Done
  &.devops-cloud-watch {
    order: 17;

    @include mediaMiddleScreen(14);
  }

  // Done
  &.devops-prometheus {
    order: 18;

    @include mediaMiddleScreen(15);
  }

  // Done
  &.infrastructure-aws {
    order: 7;
  }

  // Done
  &.infrastructure-gsp {
    order: 8;
  }

  // Done
  &.infrastructure-digital-ocean {
    order: 9;
  }

  // Done
  &.infrastructure-azure {
    order: 10;

    @include mediaMiddleScreen(27);
  }

  // Done
  &.infrastructure-heroku {
    order: 20;

    @include mediaMiddleScreen(17);
  }

  // Done
  &.infrastructure-netlify {
    order: 21;

    @include mediaMiddleScreen(18);
  }

  // Done
  &.infrastructure-cloudflare {
    order: 22;

    @include mediaMiddleScreen(26);
  }

  // Done
  &.infrastructure-cloud-native {
    order: 19;

    @include mediaMiddleScreen(16);
  }

  // Done
  &.pm-jira {
    order: 25;

    @include mediaMiddleScreen(28);
  }

  // Done
  &.pm-slack {
    order: 26;

    @include mediaMiddleScreen(29);
  }

  // Done
  &.pm-meet {
    order: 27;

    @include mediaMiddleScreen(30);
  }

  // Done
  &.pm-zoom {
    order: 28;

    @include mediaMiddleScreen(31);
  }

  // Done
  &.pm-miro {
    order: 29;

    @include mediaMiddleScreen(47);
  }

  // Done
  &.pm-jira-assistant {
    order: 38;

  }

  // Done
  &.pm-loom {
    order: 37;
  }

  // Done
  &.pm-jira-service-desk {
    order: 39;
  }

  // Done
  &.pm-basecamp {
    order: 40;
  }

  // Done
  &.pm-trello {
    order: 30;

    @include mediaMiddleScreen(46);
  }

  // Done
  &.pm-notion {
    order: 41;

    @include mediaMiddleScreen(48);
  }

  // Done
  &.pm-zapier {
    order: 42;

    @include mediaMiddleScreen(49);
  }

  // Done
  &.uiux-figma {
    order: 49;

    @include mediaMiddleScreen(57);
  }

  // Done
  &.uiux-sketch {
    order: 51;

    @include mediaMiddleScreen(59);
  }

  // Done
  &.uiux-adobe {
    order: 50;

    @include mediaMiddleScreen(58);
  }

  // Done
  &.uiux-frame {
    order: 99;
  }

  // Done
  &.uiux-invision {
    order: 61;

    @include mediaMiddleScreen(66);
  }

  // Done
  &.uiux-zeplin {
    order: 62;

    @include mediaMiddleScreen(67);
  }

  // Done
  &.uiux-balsamic {
    order: 63;

    @include mediaMiddleScreen(68);
  }

  // Done
  &.uiux-principle-app {
    order: 64;

    @include mediaMiddleScreen(69);
  }

  // Done
  &.other-confluence {
    order: 99;
  }

  // Done
  &.other-teamcity {
    order: 99;
  }

  // Done
  &.other-aws-code {
    order: 99;
  }

  // Done
  &.other-team {
    order: 99;
  }

  // Done
  &.other-skype {
    order: 99;
  }
}

.technologies-and_tools {
  padding-bottom: 38px;

  &__main-title {
    padding-bottom: 41px;
    color: $text-color--white;
    font-family: 'Poppins-Bold', sans-serif;
    font-size: 62px;
    line-height: 120%;
    text-align: center;
    font-weight: bold;
    letter-spacing: -1px;
  }

  &__technologies-list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__flex-group {
    display: flex;
    justify-content: space-between;

    div {
      max-width: 620px;
    }
  }
}

@media only screen and (max-width: 1475px) {
  .technologies-and_tools {
    &__flex-group {
      div {
        max-width: 585px;
      }
    }
  }
}

@media only screen and (max-width: 1440px) {
  .technologies-and_tools {
    padding-bottom: 5px;
  }
}

@media only screen and (max-width: 1420px) {
  .technologies-and_tools {
    &__flex-group {
      div {
        max-width: 505px;
      }
    }
  }
}

@media only screen and (max-width: 1280px) {
  .technologies-and_tools {
    padding-bottom: 37px;

    &__main-title {
      padding-bottom: 32px;
    }
  }
}

@media only screen and (max-width: 1180px) {
  .technologies-and_tools {
    &__flex-group {
      div {
        max-width: 435px;
      }
    }
  }
}

@media only screen and (max-width: 1024px) {
  .technologies-and_tools {
    &__flex-group {
      div {
        max-width: 375px;
      }
    }
  }
}

@media only screen and (max-width: 940px) {
  .technologies-and_tools {
    padding-bottom: 65px;

    &__flex-group {
      flex-direction: column;

      div {
        max-width: initial;
      }

      &:first-child {
        flex-direction: column-reverse;
      }
    }
  }
}

@media only screen and (max-width: 430px) {
  .technologies-and_tools {
    padding-bottom: 35px;
  }
}

@media only screen and (max-width: 350px) {
  .technologies-and_tools {
    padding-bottom: 0;
  }
}

</style>
