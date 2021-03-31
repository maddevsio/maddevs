<template>
  <div class="card-content">
    <div :class="`card-content_${iconName}-icon`" class="card-content_icon"></div>
    <h4 class="case_title_h4 card-content_title">{{ title }}</h4>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CardGoDeeFeature',
  props: {
    iconName: {
      type: String,
      default: '',
    },

    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../../../assets/styles/cases/_mixins';

.card-content {
  &_title {
    margin-bottom: 10px;
  }

  &_icon {
    width: 51.94px;
    height: 51.94px;
    margin-bottom: 13px;
  }

  &_live-chat-icon {
    @include live-chat;
  }

  &_trip-request-icon {
    @include trip-request;
  }

  &_gps-icon {
    @include gps;
  }

  &_live-location-tacking-icon {
    @include live-location-tacking;
  }

  &_payment-method-icon {
    @include payment-method;
  }

  &_referrals-icon {
    @include referrals;
  }

  &_possible-routes-icon {
    @include possible-routes;
  }

  @media screen and (max-width: 768px) {
    &_title,
    &_icon {
      margin-bottom: 8px;
    }
  }
}
</style>
