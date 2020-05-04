<template>
  <div id="quick-project-start" class="quick-project_start">
    <div class="container">
      <div class="quick-project_start__title-wrap">
        <h2 class="quick-project_start__main-title main-title">Quick Project Start</h2>
      </div>
      <div class="quick-project_start__content-wrap">
        <div class="quick-project_start__content-items_list">
          <div class="quick-project_start__content-item" v-for="(item, i) in itemsTextContent" :key="i">
            <div class="quick-project_start__icon-item">
              <img :src="require(`@/assets/img/Home/svg/Quick/${item.title}.svg`)" class="quick-project_start__image-item" :alt="item.title">
            </div>
            <div class="quick-project_start__text-item">
              <h4 class="quick-project_start__title sub-title">{{ item.title }}</h4>
              <p class="quick-project_start__paragraph paragraph">{{ item.paragraph }}</p>
            </div>
          </div>
        </div>
      </div>
      <buttonTrigger :buttonInnerText="buttonInnerText" class="red"/>
    </div>
  </div>
</template>

<script>
import buttonTrigger from '@/components/ui/button-trigger';

export default {
  name: 'QuickProjectStart',
  components: {
    buttonTrigger
  },
  data() {
    return {
      itemsTextContent: [
        {
          title: 'contact',
          paragraph: 'Submit your project requestor project idea to us.'
        },
        {
          title: 'analysis',
          paragraph: 'We will contact you to clarify your project requirements.'
        },
        {
          title: 'proposal',
          paragraph: 'We will provide you with our free, non-binding bid or a tailored proposal.'
        },
        {
          title: 'team',
          paragraph: 'We will assemble and prepare a team for your project.'
        },
        {
          title: 'start',
          paragraph: 'You will get to know our team and we will organise the process.'
        }
      ],
      buttonInnerText: 'Order a project from us'
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .quick-project_start {
    text-align: center;

    button {
      width: 100%;
      margin-top: 123px;
    }

    &__main-title {
      padding-bottom: 105px;
      color: $text-color--white;
    }

    &__content-items_list {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__content-item {
      max-width: 240px;
      display: flex;
      flex-direction: column;

      &:nth-child(3),
      &:nth-child(5) {
        margin-bottom: -22px;
      }
    }

    &__icon-item {
      padding-bottom: 22px;
    }

    &__title {
      text-transform: capitalize;
      color: $text-color--red;
    }

    &__paragraph {
      color: $text-color--grey-light;
    }
  }
</style>
