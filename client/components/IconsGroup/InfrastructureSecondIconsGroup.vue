<template>
  <ul class="icons-list">
    <li class="icon-item" v-for="(icon, i) in secondGroup" :key="i">
      <TechIcon :class-prefix="icon.prefix" :title="icon.title"/>
    </li>
  </ul>
</template>

<script>
import TechIcon from '@/components/IconsGroup/tech-icon';

export default {
  name: 'InfrastructureSecondIconsGroup',
  components: {
    TechIcon
  },
  data() {
    return {
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
        },
        {
          title: 'GitLab CI',
          prefix: 'gitlab-ci'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
  .icons-list {
    display: flex;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 640px) {
    .icons-list {
      max-width: 325px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    .icon-item {
      padding-right: 0;

      &:nth-child(3) {
        grid-column-start: 2;
        grid-row-start: 2;
      }

      &:nth-child(6) {
        grid-column-start: 1;
        grid-row-start: 3;
      }

      &:nth-child(7) {
        grid-column-start: 1;
        grid-row-start: 4;
      }

      &:nth-child(8) {
        grid-row-start: 3;
      }

      &:nth-child(9) {
        grid-row-start: 6;
      }

      &:nth-child(10) {
        grid-column-start: 2;
        grid-row-start: 6;
      }

      &:nth-child(11) {
        grid-row-start: 5;
      }

      &:nth-child(12) {
        grid-column-start: 2;
        grid-row-start: 5;
      }

      &:nth-child(13) {
        grid-column-start: 2;
        grid-row-start: 4;
      }
    }
  }
</style>
