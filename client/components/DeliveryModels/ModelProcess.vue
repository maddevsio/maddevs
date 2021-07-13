<template>
  <div class="model-process">
    <h2 class="model-process__title">
      {{ title }}
    </h2>
    <ul
      v-if="steps.length > 0"
      class="model-process__steps"
    >
      <li
        v-for="(step, i) in steps"
        :key="step.title"
        class="model-process__step"
      >
        <div class="model-process__step-meta">
          <span
            v-if="step.title === 'Extras'"
            class="model-process__step-count model-process__step-count--extra"
            v-html="'❤'"
          />
          <span
            v-else
            class="model-process__step-count"
          >
            {{ i + 1 }}
          </span>
          <p
            class="model-process__step-title"
            :class="step.title === 'Extras' ? 'model-process__step-title--extra' : null"
          >
            {{ step.title }}
          </p>
        </div>
        <div
          v-if="step.content && step.content.length > 0"
          class="model-process__step-text"
        >
          <p
            v-for="paragraph in step.content"
            :key="paragraph"
          >
            {{ paragraph }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ModalProcess',
  props: {
    title: {
      type: String,
      default: '',
    },

    steps: {
      type: Array,
      default: () => ([]),
    },
  },
}
</script>

<style lang="scss" scoped>
.model-process {
  padding-bottom: 96px;
  &__title {
    padding-bottom: 49px;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.05em;
    border-bottom: 1px solid $bgcolor--black-oil;
  }
  &__steps {
    margin-top: 8px;
  }
  &__step {
    display: flex;
    justify-content: space-between;
    padding: 61px 0;
    border-bottom: 1px solid $border-color--grey-20-percent;
    &-meta {
      display: flex;
    }
    &-count {
      margin-right: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      min-width: 28px;
      height: 28px;
      border: 1px solid $bgcolor--black-oil;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.013em;
      border-radius: 50%;
      &--extra {
        color: $text-color--red;
        border-color: $border-color--red;
      }
    }
    &-title {
      @include font('Inter', 24px, 600);
      line-height: 29px;
      letter-spacing: -0.013em;
      max-width: 210px;
      &--extra {
        color: $text-color--red;
      }
    }
    &-text {
      font-size: 17px;
      line-height: 28px;
      letter-spacing: -0.013em;
      flex: 1;
      max-width: 520px;
      margin-left: 40px;
      p {
        margin-bottom: 20px;
        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
    &:last-of-type {
      border: 0px;
      padding-bottom: 0;
    }
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    &__title {
      font-size: 35px;
      line-height: 45px;
      letter-spacing: -1.4px;
      padding-bottom: 35px;
    }
    &__step {
      padding: 50px 0;
      flex-direction: column;
      &-meta {
        margin-bottom: 20px;
      }
      &-title {
        max-width: 100%;
      }
      &-count {
        font-size: 13px;
        &--extra {
          font-size: 11px;
        }
      }
      &-text {
        max-width: 100%;
        font-size: 16px;
        p {
          margin-bottom: 15px;
        }
      }
    }
  }
}
</style>
