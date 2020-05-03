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
  }
</style>
