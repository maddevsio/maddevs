<template>
  <section id="quickProjectStart" class="quickProjectStart">
    <div class="container">
      <h2 class="quickProjectStart__main-title">Quick Project Start</h2>
      <div class="quickProjectStart__content-list row">
        <div class="quickProjectStart__list-item col-xl-2 col-lg-2 col-md-2"
             :class="`quickProjectStart__list-item_${item.title}`" v-for="(item, i) in sectionContent" :key="i">
          <div class="quickProjectStart__icons-group">
            <div class="quickProjectStart__main-icon" :class="`quickProjectStart__${item.iconClassName}`"/>
            <div class="quickProjectStart__arrow-icon" :class="`quickProjectStart__arrow-icon_${item.title}`"/>
          </div>
          <div class="quickProjectStart__list-item-text-wrapper">
            <h3 class="quickProjectStart__title">{{ item.title }}</h3>
            <p class="quickProjectStart__description">{{ item.description }}</p>
          </div>
        </div>
      </div>
      <UIButtonModalTrigger
        class="quickProjectStart__button"
        :buttonInnerText="buttonInnerText"
        @onClick="$refs.orderProjectFromUsModal.show()"
        :isRed="true"
      />
    </div>
    <Modal ref="orderProjectFromUsModal">
      <orderProjectFromUsModal />
    </Modal>
  </section>
</template>

<script>
import UIButtonModalTrigger from '@/components/ui/UIButtonModalTrigger';
import Modal from '@/containers/Modal';

export default {
  name: 'QuickProjectStart',
  components: {
    UIButtonModalTrigger,
    Modal,
    orderProjectFromUsModal: () => import('@/components/Modals/order-project-from-us-modal')
  },
  data() {
    return {
      sectionContent: [
        {
          title: 'contact',
          description: 'Submit your project request or project idea to us.',
          iconClassName: 'quick-contact'
        },
        {
          title: 'analysis',
          description: 'We will contact you to clarify your project requirements.',
          iconClassName: 'quick-analysis'
        },
        {
          title: 'proposal',
          description: 'We will provide you with our free, non-binding bid or a tailored proposal.',
          iconClassName: 'quick-proposal'
        },
        {
          title: 'team',
          description: 'We will assemble and prepare a team for your project.',
          iconClassName: 'quick-team'
        },
        {
          title: 'start',
          description: 'You will get to know the team and we’ll start the project work.',
          iconClassName: 'quick-start'
        }
      ],
      modalWindowName: 'order-project-from-us-modal',
      buttonInnerText: 'Submit your project'
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';
@import '../../assets/styles/_quickProjectIcons';

.quickProjectStart {
  text-align: center;
  padding-bottom: 157px;

  @media screen and (max-width: 834px) {
    padding-bottom: 74px;
  }

  @media screen and (max-width: 578px) {
    padding-bottom: 95px;
  }

  &__main-title {
    @include h2_title;
    color: $text-color--white;
  }

  &__content-list {
    justify-content: space-between;
  }

  &__list-item,
  &__icons-group {
    display: flex;
  }

  &__list-item {
    flex-direction: column;
    align-items: center;

    &_contact {
      padding: 0 15px;
    }
  }

  &__main-icon,
  &__arrow-icon {
    display: block;
    height: 65px;
  }

  &__main-icon {
    width: 48px;
    margin-bottom: 8px;
  }

  &__arrow-icon {
    width: 16vw;
    max-width: 233px;
    position: absolute;
    margin-left: 2.7vw;
    margin-bottom: 3px;

    @include quick-arrow;

    &_start {
      display: none;
    }
  }

  &__title {
    font-family: 'Poppins-Bold', sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    letter-spacing: -1px;
    text-transform: capitalize;
    color: $text-color--red;
  }

  &__description,
  &__button {
    font-family: 'Poppins-Regular', sans-serif;
  }

  &__description {
    margin-top: 8px;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.02em;
    color: $quick-project-description-color;
  }

  &__button {
    width: 100%;
    height: 56px;
    margin-top: 47px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.02em;
  }

  &__quick-contact {
    @include quick-contact;
  }

  &__quick-analysis {
    @include quick-analysis;
  }

  &__quick-proposal {
    @include quick-proposal;
  }

  &__quick-team {
    @include quick-team;
  }

  &__quick-start {
    @include quick-start;
  }
}

@media only screen and (max-width: 960px) {
  .quickProjectStart {
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
      width: 45px;
      height: 55px;
    }

    &__arrow-icon {
      width: 11vw;
      max-width: 84px;
      margin-left: 6vw;
      @include quick-arrow-bright;
    }

    &__button {
      height: 48px;
      font-size: 14px;
      margin-top: 37px;
    }
  }
}


@media only screen and (max-width: 767px) {
  .quickProjectStart {
    text-align: left;

    &__main-title {
      text-align: center;
    }

    &__list-item {
      flex-direction: row;
      align-items: flex-start;
      margin-top: 10px;
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
      width: 48px;
      height: 65px;
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
