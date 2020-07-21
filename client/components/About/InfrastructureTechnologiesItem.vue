<template>
  <div class="infrastructure-content technologies-item">
    <h4 class="infrastructure-content__title sub-title">Infrastructure</h4>
    <p class="infrastructure-content__paragraph paragraph">
      We have helped our customers save up to 50% on infrastructure by optimising their cloud-resource consumption. We know how to get the best value for money, whichever cloud service provider you choose:
    </p>
    <div class="icons-list">
      <div class="icon-flex_group">
        <TechIcon v-for="(icon, i) in firstGroup" :key="i" :class-prefix="icon.prefix" :title="icon.title"/>
      </div>
    </div>
    <p class="infrastructure-content__paragraph paragraph">
      Mad Devs infrastructure leads also have expertise with a wide range of tools for tools сonfiguration, СI/CD and monitoring:
    </p>
    <div class="icons-list">
      <div class="icon-flex_group">
        <TechIcon v-for="(icon, i) in secondGroup" :key="i" :class-prefix="icon.prefix" :title="icon.title"/>
      </div>
    </div>
  </div>
</template>

<script>

import TechIcon from '../IconsGroup/tech-icon';
export default {
  name: 'InfrastructureTechnologiesItem',
  components: {
    TechIcon
  },
  data() {
    return {
      firstGroup: [
        {
          title: 'ASW',
          prefix: 'asw'
        },
        {
          title: 'Digital Ocean',
          prefix: 'digital-ocean'
        },
        {
          title: 'Heroku',
          prefix: 'heroku'
        },
        {
          title: 'Azure',
          prefix: 'azure'
        }
      ],
      secondGroup: [
        {
          title: 'Ansible',
          prefix: 'ansible'
        },
        {
          title: 'Terraform',
          prefix: 'terraform'
        },
        {
          title: 'CloudFormation',
          prefix: 'cloudformation'
        },
        {
          title: 'Jenkins',
          prefix: 'jenkins'
        },
        {
          title: 'Bamboo',
          prefix: 'bamboo'
        },
        {
          title: 'TeamCity',
          prefix: 'team-city'
        },
        {
          title: 'Travis CI',
          prefix: 'travis'
        },
        {
          title: 'AWS CodePipeline',
          prefix: 'aswcp'
        },
        {
          title: 'Circle CI',
          prefix: 'circle'
        },
        {
          title: 'ELK',
          prefix: 'elk'
        },
        {
          title: 'Sentry',
          prefix: 'senrty'
        },
        {
          title: 'Prometheus',
          prefix: 'prometheus'
        },
        {
          title: 'Amazon CloudWatch',
          prefix: 'amazon-cloudwatch'
        }
      ]
    };}
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .infrastructure-content {
    &__title,
    &__paragraph {
      color: $text-color--grey;
    }

    /deep/.icon-flex_group {
      display: flex;
      flex-wrap: wrap;
    }

    /deep/.icon-item {
      padding-bottom: 15px;
      padding-right: 15px;
    }

    /deep/.icons-list {
      padding: 13px 0;
    }
  }

  @media only screen and (max-width: 640px) {
    .infrastructure-content {
      /deep/.icons-list {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
      }

      /deep/.icon-item {
        padding-right: 0;
      }

      /deep/.aws {
        padding-right: 86px;
      }

      /deep/.heroku {
        padding-right: 77px;
        margin-left: -4px;
      }

      /deep/.digital-ocean {
        padding-right: 0;
      }
    }
  }
</style>
