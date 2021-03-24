<template>
  <section id="technologies-and-tools" class="technologies-and_tools">
    <div class="container">
      <div class="technologies-and_tools__content-wrap">
        <h2 class="technologies-and_tools__main-title">Technologies <span>&</span>&nbsp;<span>Tools</span></h2>
        <div :class="`tech_legend-${activeLegend}`" class="tech_legend">
          <div
            v-for="(item, key) in legend"
            :key="key"
            :class="`legend-${item.value.replace(/\W/g, '').toLowerCase()}`"
            class="tech_legend__item"
            @click="selectLegend(`${item.value.replace(/\W/g, '').toLowerCase()}`)"
          >
            {{ item.value }}
          </div>
        </div>
        <div :class="activeLegend" class="tech_container">
          <div
            v-for="(item, index) in technologies"
            :key="index"
            :class="`${item.technology}-${item.value} ${item.technology}`"
            class="tech_item"
          >
            <img
              :data-src="require(`@/assets/img/Home/svg/technologies/${item.value}.svg`)"
              :alt="item.title"
              width="26"
              height="26"
              class="img_lazy"
            />
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TechnologiesAndTools',
  data() {
    return {
      legend: [
        {
          value: 'DevOps',
        },
        {
          value: 'QA',
        },
        {
          value: 'Backend',
        },
        {
          value: 'Frontend',
        },
        {
          value: 'Mobile',
        },
        {
          value: 'PM',
        },
        {
          value: 'Infrastructure',
        },
        {
          value: 'UI/UX',
        },
      ],

      technologies: [
        {
          title: 'Ansible',
          value: 'ansible',
          technology: 'devops',
        },
        {
          title: 'Terraform',
          value: 'terraform',
          technology: 'devops',
        },
        {
          title: 'CloudFormation',
          value: 'cloud-formation',
          technology: 'devops',
        },
        {
          title: 'Jenkins',
          value: 'jenkins',
          technology: 'devops',
        },
        {
          title: 'Bamboo',
          value: 'bamboo',
          technology: 'devops',
        },
        {
          title: 'GitlabCI',
          value: 'gitlab',
          technology: 'devops',
        },
        {
          title: 'TravisCI',
          value: 'travis-ci',
          technology: 'devops',
        },
        {
          title: 'ELK',
          value: 'elastic',
          technology: 'devops',
        },
        {
          title: 'CircleCI',
          value: 'circle-ci',
          technology: 'devops',
        },
        {
          title: 'Sentry',
          value: 'sentry',
          technology: 'devops',
        },
        {
          title: 'CloudWatch',
          value: 'cloud-watch',
          technology: 'devops',
        },
        {
          title: 'Prometheus',
          value: 'prometheus',
          technology: 'devops',
        },
        {
          title: 'AWS',
          value: 'aws',
          technology: 'infrastructure',
        },
        {
          title: 'GCP',
          value: 'gcp',
          technology: 'infrastructure',
        },
        {
          title: 'Digital Ocean',
          value: 'digital-ocean',
          technology: 'infrastructure',
        },
        {
          title: 'Azure',
          value: 'azure',
          technology: 'infrastructure',
        },
        {
          title: 'CloudNative',
          value: 'cloud-native',
          technology: 'infrastructure',
        },
        {
          title: 'Heroku',
          value: 'heroku',
          technology: 'infrastructure',
        },
        {
          title: 'Netlify',
          value: 'netlify',
          technology: 'infrastructure',
        },
        {
          title: 'CloudFlare',
          value: 'cloudflare',
          technology: 'infrastructure',
        },
        {
          title: 'Kotlin',
          value: 'kotlin',
          technology: 'mobile',
        },
        {
          title: 'Java',
          value: 'java',
          technology: 'mobile',
        },
        {
          title: 'Objective-C',
          value: 'obj-c',
          technology: 'mobile',
        },
        {
          title: 'Swift',
          value: 'swift',
          technology: 'mobile',
        },
        {
          title: 'IOS',
          value: 'apple',
          technology: 'mobile',
        },
        {
          title: 'Android',
          value: 'android',
          technology: 'mobile',
        },
        {
          title: 'Jira',
          value: 'jira',
          technology: 'pm',
        },
        {
          title: 'Slack',
          value: 'slack',
          technology: 'pm',
        },
        {
          title: 'Meet',
          value: 'meet',
          technology: 'pm',
        },
        {
          title: 'Zoom',
          value: 'zoom',
          technology: 'pm',
        },
        {
          title: 'Miro',
          value: 'miro',
          technology: 'pm',
        },
        {
          title: 'Trello',
          value: 'trello',
          technology: 'pm',
        },
        {
          title: 'Loom',
          value: 'loom',
          technology: 'pm',
        },
        {
          title: 'Jira Assistant',
          value: 'jira-assistant',
          technology: 'pm',
        },
        {
          title: 'Service Desk',
          value: 'service-desk',
          technology: 'pm',
        },
        {
          title: 'Basecamp',
          value: 'basecamp',
          technology: 'pm',
        },
        {
          title: 'Notion',
          value: 'notion',
          technology: 'pm',
        },
        {
          title: 'Zapier',
          value: 'zapier',
          technology: 'pm',
        },
        {
          title: 'Python',
          value: 'python',
          technology: 'backend',
        },
        {
          title: 'Go',
          value: 'go',
          technology: 'backend',
        },
        {
          title: 'Node.js',
          value: 'node',
          technology: 'backend',
        },
        {
          title: 'JavaScript',
          value: 'js',
          technology: 'backend',
        },
        {
          title: 'TypeScript',
          value: 'typescript',
          technology: 'backend',
        },
        {
          title: 'PHP',
          value: 'php',
          technology: 'backend',
        },
        {
          title: 'Ruby',
          value: 'ruby',
          technology: 'backend',
        },
        {
          title: 'C',
          value: 'c',
          technology: 'backend',
        },
        {
          title: 'C++',
          value: 'c-plus',
          technology: 'backend',
        },
        {
          title: 'Figma',
          value: 'figma',
          technology: 'uiux',
        },
        {
          title: 'Adobe Suite',
          value: 'adobe',
          technology: 'uiux',
        },
        {
          title: 'Sketch',
          value: 'sketch',
          technology: 'uiux',
        },
        {
          title: 'InVision',
          value: 'invision',
          technology: 'uiux',
        },
        {
          title: 'Zeplin',
          value: 'zeplin',
          technology: 'uiux',
        },
        {
          title: 'Balsamic',
          value: 'balsamic',
          technology: 'uiux',
        },
        {
          title: 'Principle',
          value: 'principle-app',
          technology: 'uiux',
        },
        {
          title: 'PostCSS',
          value: 'post-css',
          technology: 'frontend',
        },
        {
          title: 'TypeScript',
          value: 'typescript',
          technology: 'frontend',
        },
        {
          title: 'Angular',
          value: 'angular',
          technology: 'frontend',
        },
        {
          title: 'Webpack',
          value: 'webpack',
          technology: 'frontend',
        },
        {
          title: 'Next.js',
          value: 'next',
          technology: 'frontend',
        },
        {
          title: 'Nuxt.js',
          value: 'nuxt',
          technology: 'frontend',
        },
        {
          title: 'JavaScript',
          value: 'js',
          technology: 'frontend',
        },
        {
          title: 'React',
          value: 'react',
          technology: 'frontend',
        },
        {
          title: 'Babel',
          value: 'babel',
          technology: 'frontend',
        },
        {
          title: 'Vue',
          value: 'vue',
          technology: 'frontend',
        },
        {
          title: 'SASS',
          value: 'sass',
          technology: 'frontend',
        },
        {
          title: 'Jasmine',
          value: 'jasmine',
          technology: 'qa',
        },
        {
          title: 'Selenoid',
          value: 'selenoid',
          technology: 'qa',
        },
        {
          title: 'Appium',
          value: 'appium',
          technology: 'qa',
        },
        {
          title: 'Cucumber',
          value: 'cucumber',
          technology: 'qa',
        },
        {
          title: 'PyTest',
          value: 'pytest',
          technology: 'qa',
        },
        {
          title: 'Selenium',
          value: 'selenium',
          technology: 'qa',
        },
        {
          title: 'Selenium Grid',
          value: 'selenium-grid',
          technology: 'qa',
        },
      ],

      activeLegend: '',
    };
  },

  methods: {
    selectLegend(e) {
      if (e === this.activeLegend) {
        this.activeLegend = '';
      } else {
        this.activeLegend = e;
      }
      this.$nextTick(() => this.refreshImg());
    },

    refreshImg() {
      const lazySvg = [].slice.call(document.querySelectorAll('img.img_lazy'));
      lazySvg.forEach(svg => {
        /* eslint-disable */
        svg.src = svg.dataset.src;
        svg.classList.remove('img_lazy');
        /* eslint-enable */
      });
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/styles/vars';

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
  @media screen and (max-width: 1024px) {
    order: $property;
  }
}

@mixin mediaMobileScreen($property) {
  @media screen and (max-width: 568px) {
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
    color: #938f95;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.02em;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;

    &::before {
      content: '';
      display: inline-block;
      width: 16px;
      min-width: 16px;
      height: 16px;
      border-radius: 2px;
      margin-right: 8px;
    }

    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      width: 8px;
      min-width: 8px;
      height: 8px;
      border-radius: 50%;
      margin-right: 8px;
      top: 7px;
      left: 4px;
      background: #938f95;
      opacity: 0;
      transition: opacity 0.2s;
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

    &-#{$name} {
      .legend-#{$name}:after {
        opacity: 1;
      }
    }
  }

  @media screen and (max-width: 976px) {
    max-width: 460px;
    margin: auto auto 10px;
    flex-wrap: wrap;

    &__item {
      margin-right: 9px;
      margin-left: 9px;
      color: #938f95;
      font-size: 12px;
      line-height: 18px;
      display: flex;
      align-items: center;
      margin-bottom: 14px;

      &::after {
        top: 5px;
      }
    }
  }

  @media screen and (max-width: 390px) {
    margin-left: -7px;
    justify-content: space-between;

    &__item {
      margin-right: 0;
      margin-left: 7px;
    }
  }

  @media screen and (max-width: 330px) {
    margin-left: 0;

    &__item {
      font-size: 10px;
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

  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @each $name, $color in $tech_legends {
    // selector based on class name
    &.#{$name} {
      .tech_item:not(.#{$name}) {
        opacity: 0.4;
      }
    }
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
  transition: opacity 0.2s linear;

  @media screen and (max-width: 976px) {
    height: 74px;
  }

  @media screen and (max-width: 668px) {
    height: 54px;
    justify-content: flex-end;
  }

  img {
    width: 26px;
    height: 26px;

    @media screen and (max-width: 976px) {
      width: 20px;
      height: 20px;
    }
  }

  span {
    white-space: nowrap;
    font-family: 'Poppins-Regular', sans-serif;
    font-size: 11px;
    line-height: 13px;
    color: rgba(255, 255, 255, 0.25);
    margin-top: 15px;
    display: block;
    width: 100%;
    max-width: 90px;
    text-overflow: ellipsis;
    text-align: center;
    overflow: hidden;

    @media screen and (max-width: 1370px) {
      max-width: 60px;
    }

    @media screen and (max-width: 1090px) {
      max-width: 40px;
    }

    @media screen and (max-width: 976px) {
      font-size: 8px;
      line-height: 13px;
      margin-top: 11px;
      max-width: 65px;
    }

    @media screen and (max-width: 850px) {
      max-width: 45px;
    }

    @media screen and (max-width: 668px) {
      margin-top: 9px;
      margin-bottom: 3px;
      max-width: 25px;
    }

    @media screen and (max-width: 576px) {
      max-width: 50px;
    }

    @media screen and (max-width: 420px) {
      max-width: 30px;
    }
  }

  @each $name, $color in $tech_legends {
    &.#{$name} {
      background: $color;
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

    @include mediaMobileScreen(44);
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

    @include mediaMobileScreen(58);
  }

  // Done
  &.qa-selenium-grid {
    order: 59;

    @include mediaMiddleScreen(44);

    @include mediaMobileScreen(57);
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

    @include mediaMobileScreen(32);
  }

  // Done
  &.backend-node {
    order: 33;

    @include mediaMiddleScreen(34);

    @include mediaMobileScreen(53);
  }

  // Done
  &.backend-js {
    order: 34;

    @include mediaMiddleScreen(35);

    @include mediaMobileScreen(44);
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

    @include mediaMobileScreen(52);
  }

  // Done
  &.backend-c-plus {
    order: 58;

    @include mediaMiddleScreen(25);

    @include mediaMobileScreen(44);
  }

  // Done
  &.backend-c {
    order: 46;

    @include mediaMiddleScreen(43);

    @include mediaMobileScreen(44);
  }

  // Done
  &.mobile-kotlin {
    order: 11;

    @include mediaMiddleScreen(19);

    @include mediaMobileScreen(16);
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

    @include mediaMobileScreen(17);
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

    @include mediaMobileScreen(18);
  }

  // Done
  &.frontend-js {
    order: 65;

    @include mediaMiddleScreen(70);

    @include mediaMobileScreen(66);
  }

  // Done
  &.frontend-react {
    order: 66;

    @include mediaMiddleScreen(71);

    @include mediaMobileScreen(67);
  }

  // Done
  &.frontend-babel {
    order: 67;

    @include mediaMiddleScreen(72);

    @include mediaMobileScreen(68);
  }

  // Done
  &.frontend-vue {
    order: 68;

    @include mediaMiddleScreen(73);

    @include mediaMobileScreen(69);
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

    @include mediaMobileScreen(70);
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

    @include mediaMobileScreen(7);
  }

  // Done
  &.devops-circle-ci {
    order: 14;

    @include mediaMiddleScreen(11);

    @include mediaMobileScreen(8);
  }

  // Done
  &.devops-elastic {
    order: 15;

    @include mediaMiddleScreen(12);

    @include mediaMobileScreen(9);
  }

  // Done
  &.devops-sentry {
    order: 16;

    @include mediaMiddleScreen(13);

    @include mediaMobileScreen(10);
  }

  // Done
  &.devops-cloud-watch {
    order: 17;

    @include mediaMiddleScreen(14);

    @include mediaMobileScreen(11);
  }

  // Done
  &.devops-prometheus {
    order: 18;

    @include mediaMiddleScreen(15);

    @include mediaMobileScreen(12);
  }

  // Done
  &.infrastructure-aws {
    order: 7;

    @include mediaMobileScreen(13);
  }

  // Done
  &.infrastructure-gcp {
    order: 8;

    @include mediaMobileScreen(14);
  }

  // Done
  &.infrastructure-digital-ocean {
    order: 9;

    @include mediaMobileScreen(15);
  }

  // Done
  &.infrastructure-azure {
    order: 10;

    @include mediaMiddleScreen(27);

    @include mediaMobileScreen(26);
  }

  // Done
  &.infrastructure-heroku {
    order: 20;

    @include mediaMiddleScreen(17);

    @include mediaMobileScreen(20);
  }

  // Done
  &.infrastructure-netlify {
    order: 21;

    @include mediaMiddleScreen(18);

    @include mediaMobileScreen(21);
  }

  // Done
  &.infrastructure-cloudflare {
    order: 22;

    @include mediaMiddleScreen(26);

    @include mediaMobileScreen(25);
  }

  // Done
  &.infrastructure-cloud-native {
    order: 19;

    @include mediaMiddleScreen(16);

    @include mediaMobileScreen(19);
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

    @include mediaMobileScreen(43);
  }

  // Done
  &.pm-jira-assistant {
    order: 38;

    @include mediaMobileScreen(34);
  }

  // Done
  &.pm-loom {
    order: 37;

    @include mediaMobileScreen(33);
  }

  // Done
  &.pm-service-desk {
    order: 39;

    @include mediaMobileScreen(35);
  }

  // Done
  &.pm-basecamp {
    order: 40;

    @include mediaMobileScreen(36);
  }

  // Done
  &.pm-trello {
    order: 30;

    @include mediaMiddleScreen(46);

    @include mediaMobileScreen(42);
  }

  // Done
  &.pm-notion {
    order: 41;

    @include mediaMiddleScreen(48);

    @include mediaMobileScreen(43);
  }

  // Done
  &.pm-zapier {
    order: 42;

    @include mediaMiddleScreen(49);

    @include mediaMobileScreen(44);
  }

  // Done
  &.uiux-figma {
    order: 49;

    @include mediaMiddleScreen(57);

    @include mediaMobileScreen(99);
  }

  // Done
  &.uiux-sketch {
    order: 51;

    @include mediaMiddleScreen(59);

    @include mediaMobileScreen(99);
  }

  // Done
  &.uiux-adobe {
    order: 50;

    @include mediaMiddleScreen(58);

    @include mediaMobileScreen(99);
  }

  // Done
  &.uiux-frame {
    order: 99;
  }

  // Done
  &.uiux-invision {
    order: 61;

    @include mediaMiddleScreen(66);

    @include mediaMobileScreen(99);
  }

  // Done
  &.uiux-zeplin {
    order: 62;

    @include mediaMiddleScreen(67);

    @include mediaMobileScreen(99);
  }

  // Done
  &.uiux-balsamic {
    order: 63;

    @include mediaMiddleScreen(68);

    @include mediaMobileScreen(99);
  }

  // Done
  &.uiux-principle-app {
    order: 64;

    @include mediaMiddleScreen(69);

    @include mediaMobileScreen(99);
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
  &__main-title {
    @include h2_title;

    color: $text-color--white;
    text-align: center;
  }

  &__technologies-list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
