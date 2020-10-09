<template>
  <section id="technologies-and-tools" class="technologies-and_tools">
    <div class="container">
      <div class="technologies-and_tools__content-wrap">
        <h2 class="technologies-and_tools__main-title">
          Technologies & Tools
        </h2>
        <div class="tech_legend">
          <div v-for="(item, key) in legend" :key="key" class="tech_legend__item"
               :class="`legend-${item.value.replace(/\W/g, '').toLowerCase()}`">
            {{ item.value }}
          </div>
        </div>
        <div class="tech_container">
          <div class="tech_item"
               :key="index"
               :data-index="index"
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
          technology: 'uxui'
        },
        {
          title: 'Adobe Suite',
          value: 'adobe',
          technology: 'uxui'
        },
        {
          title: 'Sketch',
          value: 'sketch',
          technology: 'uxui'
        },
        {
          title: 'InVision',
          value: 'invision',
          technology: 'uxui'
        },
        {
          title: 'Zeplin',
          value: 'zeplin',
          technology: 'uxui'
        },
        {
          title: 'Balsamic',
          value: 'balsamic',
          technology: 'uxui'
        },
        {
          title: 'Principle',
          value: 'principle-app',
          technology: 'uxui'
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
  'uxui': rgba(37, 33, 29, 1),
);

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
  grid-gap: 1px;
}

.tech_item {
  max-width: 102px;
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    white-space: nowrap;
    font-family: Poppins, sans-serif;
    font-size: 11px;
    line-height: 13px;
    color: rgba(255, 255, 255, 0.25);
    margin-top: 15px;
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
