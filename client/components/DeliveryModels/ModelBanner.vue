<template>
  <div class="model-banner">
    <h1
      class="model-banner__title"
      :class="`model-banner__title--${uid}`"
      v-html="title"
    />
    <p
      v-if="subtitle"
      class="model-banner__subtitle"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ModelBanner',
  props: {
    uid: {
      type: String,
      default: '',
    },

    title: {
      type: String,
      default: '',
    },

    subtitle: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.model-banner {
  padding: 168px 0 108px;
  color: $text-color--white-primary;
  &__title {
    font-size: 60px;
    line-height: 68px;
    letter-spacing: -0.04em;
    &--staff-augmentation /deep/ span {
      color: $text-color--red-dark;
    }
    &--dedicated-team /deep/ span {
      color: $text-color--yellow;
    }
    &--temp-to-hire /deep/ span {
      color: $text-color--blue;
    }
    &--technical-assessment /deep/ span {
      color: $text-color--red-dark;
    }
    &--team-supervision /deep/ span {
      color: $text-color--green-pale;
    }
    &--transferring-projects /deep/ span {
      color: $text-color--purple;
    }
  }
  &__subtitle {
    margin-top: 67px;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.013em;
    font-weight: 600;
  }

  @media screen and (max-width: 768px) {
    padding: 105px 0 85px;
    &__title {
      font-size: 52px;
      line-height: 64px;
      letter-spacing: -3px;
    }
    &__subtitle {
      margin-top: 50px;
      font-size: 18px;
      line-height: 28px;
    }
  }

  @media screen and (max-width: 576px) {
    &__title {
      font-size: 35px;
      line-height: 45px;
      letter-spacing: -1.4px;
    }
    &__subtitle {
      margin-top: 45px;
      font-size: 16px;
      line-height: 26px;
    }
  }
}
</style>
