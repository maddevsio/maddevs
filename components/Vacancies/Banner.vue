<template>
  <section id="vacancies-banner" class="vacancies-banner">
    <div class="container vacancies-banner_wrap">
      <h1>👋 Привет, давай знакомиться.</h1>
      <p>Здесь всегда полно работы - скучно точно не будет!</p>
      <div class="vacancies-banner_type">
        <span>Итак, ты</span>
        <div class="vacancies-banner_staff-item" v-for="(type, i) in types" :key="i">{{ type }}</div>
        <span>и ты в правильной команде!</span>
      </div>
      <UIButton @UIButtonClick="openForm" />
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
  methods: {
    openForm() {}
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .vacancies-banner {
    width: 100%;
    padding-top: 185px;

    &_wrap {
      text-align: center;
    }
  }

  @media only screen and (max-width: 768px) {}
</style>

