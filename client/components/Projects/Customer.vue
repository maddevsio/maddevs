<template>
  <div class="icon-wrapper">
    <div :class="`icon-wrapper__${customer.className}`" class="icon-wrapper__icon"></div>
  </div>
</template>

<script>
export default {
  name: 'Customer',
  props: {
    customer: {
      type: Object,
      required: true,
      default: () => ({
        className: '',
      }),
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';
@import '../../assets/styles/_ourValuedIcons';

.icon-wrapper {
  min-height: 111px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $our-valued-icon-background;

  &__icon {
    width: 143px;
    height: 64px;
    display: block;
  }

  &__godee-icon {
    @include godee-icon;
  }

  &__guardrails-icon {
    @include guardrails-icon;
  }

  &__teacherly-icon {
    @include teacherly-icon;
  }

  &__triggermesh-icon {
    @include triggermesh-icon;
  }

  &__clutch-icon {
    @include clutch-icon;
  }

  &__eatigo-icon {
    @include eatigo-icon;
  }

  &__veeqo-icon {
    @include veeqo-icon;
  }

  &__admitad-icon {
    @include admitad-icon;
  }

  &__iotsploit-icon {
    @include iotsploit-icon;
  }

  &__sir-jonas-icon {
    @include sir-jonas-icon;
  }

  &__progressay-icon {
    @include progressay-icon;
  }

  &__kickoico-icon {
    @include kickoico-icon;
  }

  &__nambafood-icon {
    @include nambafood-icon;
  }

  &__showmebishkek-icon {
    @include showmebishkek-icon;
  }

  &__mythril-icon {
    @include mythril-icon;
  }

  &__seso-icon {
    @include seso-icon;
  }

  &__tengri-icon {
    @include tengri-icon;
  }

  &__peklo-icon {
    @include peklo-icon;
  }

  @media only screen and (max-width: 1024px) {
    min-height: 81px;

    &__icon {
      width: 75px;
      height: 33px;
    }
  }
}
</style>
