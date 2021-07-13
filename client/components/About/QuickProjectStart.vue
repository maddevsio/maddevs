<template>
  <section
    id="quick-project-start"
    class="quick-project-start"
  >
    <div class="container">
      <h2 class="quick-project-start__main-title">
        Quick Project Start
      </h2>
      <div class="quick-project-start__content-list">
        <div
          v-for="(step, idx) in steps"
          :key="step.name"
          class="quick-project-start__list-item"
        >
          <div class="quick-project-start__icons-group">
            <img
              :data-src="require(`@/assets/img/Home/svg/qickProjectIcons/${step.name}.svg`)"
              :alt="step.name"
              width="52"
              height="73"
              class="quick-project-start__main-icon img_lazy"
            >
            <img
              v-if="idx !== steps.length - 1"
              :data-src="require(`@/assets/img/Home/svg/qickProjectIcons/arrow.svg`)"
              width="165"
              height="65"
              class="quick-project-start__arrow-icon img_lazy"
              alt="Arrow"
            >
          </div>
          <div class="quick-project-start__list-item-text-wrapper">
            <h3 class="quick-project-start__title">
              {{ step.name }}
            </h3>
            <p class="quick-project-start__description">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
      <UIModalTriggerButton
        label="Submit your project"
        color="red"
        class="quick-project-start__button"
        @click="$refs.modalOrderProjectFromUs.show()"
      />
    </div>
    <!-- this id should be unique, because it used for google analytics -->
    <ModalOrderProjectFromUs
      id="order-project-from-us-modal"
      ref="modalOrderProjectFromUs"
      :location="'\'Submit your project\' button, about page'"
    />
  </section>
</template>

<script>
import { steps } from '@/data/quickProjectStart'
import UIModalTriggerButton from '@/components/shared/UIModalTriggerButton'

export default {
  name: 'QuickProjectStart',
  components: {
    UIModalTriggerButton,
    ModalOrderProjectFromUs: () => import('@/components/core/modals/ModalOrderProjectFromUs'),
  },

  data() {
    return {
      steps,
      modalWindowName: 'order-project-from-us-modal',
    }
  },
}
</script>

<style lang="scss" scoped>
.quick-project-start {
  text-align: center;
  padding-bottom: 157px;

  @media screen and (max-width: 834px) {
    padding-bottom: 74px;
  }

  @media screen and (max-width: 578px) {
    padding-bottom: 95px;
  }

  &__main-title {
    @include h2-title;
    color: $text-color--white;
  }

  &__content-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 80px;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-gap: 10px;
    }
  }

  &__list-item,
  &__icons-group {
    display: flex;
  }

  &__list-item {
    flex-direction: column;
    align-items: center;
  }

  &__main-icon,
  &__arrow-icon {
    display: block;
    height: 65px;
  }

  &__main-icon {
    width: 32px;
    margin-bottom: 8px;
    padding: 0 10px;
  }

  &__arrow-icon {
    width: 16vw;
    max-width: 165px;
    position: absolute;
    margin-left: 4.7vw;
    margin-bottom: 3px;
    opacity: 0.3;

    @media screen and (max-width: 1280px) {
      width: 10vw;
      margin-left: 5.7vw;
    }
  }

  &__title {
    @include font('Poppins', 32px, 700);
    line-height: 32px;
    letter-spacing: -1px;
    text-transform: capitalize;
    color: $text-color--red;
  }

  &__description {
    @include font('Inter', 14px, 400);
    margin-top: 8px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.02em;
    color: $quick-project-description-color;
  }

  &__button {
    @include font('Inter', 16px, 400);
    width: 100%;
    height: 56px;
    margin-top: 47px;
    line-height: 24px;
    letter-spacing: -0.02em;
  }
}

@media only screen and (max-width: 960px) {
  .quick-project-start {
    &__title {
      font-size: 18px;
      line-height: 21px;
    }

    &__description {
      margin-top: 4px;
      font-size: 10px;
      line-height: 15px;
    }

    &__main-icon {
      width: 24px;
    }

    &__arrow-icon {
      width: 8vw;
      max-width: 84px;
      margin-left: 7.5vw;
    }

    &__button {
      height: 48px;
      font-size: 14px;
      margin-top: 37px;
    }
  }
}

@media only screen and (max-width: 767px) {
  .quick-project-start {
    text-align: left;

    &__main-title {
      text-align: center;
    }

    &__list-item {
      flex-direction: row;
      align-items: flex-start;
    }

    &__list-item-text-wrapper {
      margin-top: 16px;
      margin-left: 13px;
    }

    &__title {
      font-size: 27px;
      line-height: 32px;
    }

    &__description {
      font-size: 14px;
      line-height: 20px;
      text-align: left;
    }

    &__main-icon {
      width: 28px;
    }

    &__arrow-icon {
      display: none;
    }

    &__button {
      margin-top: 40px;
      color: $text-color--white;
      background-color: $bgcolor--red;
    }
  }
}
</style>
