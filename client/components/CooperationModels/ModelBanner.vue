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
@import '@/assets/styles/_vars';

.model-banner {
  padding: 168px 0 108px;
  color: $text-color--white-primary;
  &__title {
    font-size: 60px;
    line-height: 68px;
    letter-spacing: -0.04em;
    &--augmented-staff-members /deep/ span {
      color: $text-color--red-dark;
    }
    &--dedicated-project-based-team /deep/ span {
      color: $text-color--yellow;
    }
    &--temp-to-hire /deep/ span {
      color: $text-color--blue;
    }
    &--technical-assessment-and-consulting /deep/ span {
      color: $text-color--red-dark;
    }
    &--effective-team-supervision /deep/ span {
      color: $text-color--green-pale;
    }
    &--transferring-a-project /deep/ span {
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
}
</style>
