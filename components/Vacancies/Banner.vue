<template>
  <section id="vacancies-banner" class="vacancies-banner">
    <div class="container vacancies-banner_wrap">
      <h1>👋 Привет, давай знакомиться.</h1>
      <p>Здесь всегда полно работы - скучно точно не будет!</p>
      <div class="vacancies-banner_type">
        <span>Итак, ты</span>
        <button
          class="vacancies-banner_type-item"
          :class="{ 'active-type': vacancies_type === type }"
          v-for="(type, i) in types"
          :key="i"
          @click="selectType(type)"
        >{{ type }}</button>
        <span>и ты в правильной команде!</span>
      </div>
      <UIButton @UIButtonClick="openForm" text="Отправить резюме"/>
    </div>
  </section>
</template>

<script>
import UIButton from '@/components/ui/UIButton';

export default {
  name: 'Banner',
  components: { UIButton },
  data() {
    return {
      types: ['Senior', 'Middle', 'Junior', 'Intern']
    };
  },
  computed: {
    vacancies_type() {
      return this.$store.getters.vacancies_type;
    }
  },
  methods: {
    openForm() {
      this.$modal.show('resume-form');
    },
    selectType(type) {
      this.$store.dispatch('SET_VACANCIES_TYPE', type);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .vacancies-banner {
    width: 100%;
    padding: 185px 0 100px;

    &_wrap {
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        margin-bottom: 16px;
        font-size: 52px;
        line-height: 86px;
        font-family: 'MADEEvolveSans-regular', sans-serif;
        color: $text-color--black;
        font-weight: normal;
      }

      p {
        max-width: 640px;
        font-size: 40px;
        line-height: 52px;
        font-family: 'MADEEvolveSans-regular', sans-serif;
        margin-bottom: 30px;
        text-align: center;
        color: $text-color--black;
      }
    }

    &_type {
      max-width: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 60px;

      span {
        font-size: 28px;
        line-height: 42px;
        font-family: 'MADEEvolveSans-regular', sans-serif;
      }

      &-item {
        margin-left: 12px;
        padding: 6px 16px;
        border: 1px solid $border-color--grey;
        border-radius: $default-border-radius;
        font-size: 16px;
        line-height: 20px;
        color: $text-color--black;
        cursor: pointer;
        background-color: transparent;
        font-family: 'MADEEvolveSans-regular', sans-serif;
      }
    }
  }

  .active-type {
    background-color: $bgcolor--yellow;
  }

  @media only screen and (max-width: 768px) {}
</style>

