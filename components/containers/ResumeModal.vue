<template>
  <section class="resume-modal">
    <div class="resume-modal_header">

    </div>
    <div class="resume-modal_content">
      <div class="resume-modal_content-item resume-modal_content-types">
        <span>Итак, ты</span>
        <button
          :class="{ 'active-type': vacancies_type === type }"
          v-for="(type, i) in types"
          :key="i"
          @click="selectType(type)"
        >{{ type }}</button>
      </div>
      <UIInput class="resume-modal_content-item" label="Имя и фамилия*" placeholder="Как тебя зовут?" />
      <UIInput class="resume-modal_content-item" label="Место проживания*" placeholder="Где живёшь?" />
      <UIInput class="resume-modal_content-item" label="Ссылка на резюме" placeholder="Ссылка на LinkedIn/Мой Круг" />
      <UISelect class="resume-modal_content-item" :options="selectOptions" label="Желаемая должность*" placeholder="Выбери должность"/>
      <UIInputFile class="resume-modal_content-item" label="Резюме*" placeholder="Файл не выбран..." btnText="Выбрать файл"/>
    </div>
  </section>  
</template>

<script>
import UIInput from '@/components/ui/UIInput';
import UIInputFile from '@/components/ui/UIInputFile';
import UISelect from '@/components/ui/UISelect';

export default {
  name: 'ResumeModal',
  components: { UIInput, UIInputFile, UISelect },
  data() {
    return {
      selectOptions: [
        {
          active: false,
          text: 'IOS Developer'
        },
        {
          active: false,
          text: 'Frontend Developer'
        },
        {
          active: false,
          text: 'Prooject Manager'
        }
      ],
      types: ['Senior', 'Middle', 'Junior', 'Intern']
    };
  },
  computed: {
    vacancies_type() {
      return this.$store.getters.vacancies_type;
    }
  },
  methods: {
    selectType(type) {
      this.$store.dispatch('SET_VACANCIES_TYPE', type);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .resume-modal {
    position: relative;
    padding: 32px;
    box-sizing: border-box;
    z-index: 999;

    &_content {
      &-item {
        margin-bottom: 24px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      &-types {
        span {
          font-size: 16px;
          line-height: 16px;
          font-family: 'MADEEvolveSans-regular', sans-serif;
        }

        button {
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
  }
</style>
