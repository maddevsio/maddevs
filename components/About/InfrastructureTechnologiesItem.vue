<template>
  <div class="infrastructure-content">
    <h4 class="infrastructure-content__title sub-title">Infrastructure</h4>
    <p class="infrastructure-content__paragraph paragraph">
      We have helped our customers save up to 50% on infrastructure by optimising their cloud-resource consumption. We know how to get the best value for money, whichever cloud service provider you choose:
    </p>
    <InfrastructureFirstIconsGroup />
    <p class="infrastructure-content__paragraph paragraph">
      Mad Devs infrastructure leads also have expertise with a with a wide range of tools for tools сonfiguration, СI/CD and monitoring:
    </p>
    <InfrastructureSecondIconsGroup />
  </div>
</template>

<script>
import InfrastructureFirstIconsGroup from '@/components/IconsGroup/InfrastructureFirstIconsGroup';
import InfrastructureSecondIconsGroup from '@/components/IconsGroup/InfrastructureSecondIconsGroup';

export default {
  name: 'InfrastructureTechnologiesItem',
  components: {
    InfrastructureFirstIconsGroup,
    InfrastructureSecondIconsGroup
  }
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
