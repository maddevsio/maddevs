<template>
  <section id="employer" class="employer">
      <div class="container">
          <h2 class="sec-title">{{ $t('employer-title') }}</h2>
          <div class="employer_list">
              <div class="employer_list-item">
                  <img src="../../assets/img/Jobs/svg/Employer/managment.svg" alt="Managment">
                  <h4>{{ $t('employer-subtitle1') }}</h4>
                  <p>{{ $t('employer-subdesc1') }}</p>
              </div>
              <div class="employer_list-item">
                  <img src="../../assets/img/Jobs/svg/Employer/events.svg" alt="Events">
                  <h4>{{ $t('employer-subtitle2') }}</h4>
                  <p>{{ $t('employer-subdesc2') }}</p>
              </div>
              <div class="employer_list-item">
                  <img src="../../assets/img/Jobs/svg/Employer/office.svg" alt="Office">
                  <h4>{{ $t('employer-subtitle3') }}</h4>
                  <p>{{ $t('employer-subdesc3') }}</p>
              </div>
              <div class="employer_list-item">
                  <img src="../../assets/img/Jobs/svg/Employer/lunches.svg" alt="Lunches">
                  <h4>{{ $t('employer-subtitle4') }}</h4>
                  <p>{{ $t('employer-subdesc4') }}</p>
              </div>
              <!-- fake -->
              <div class="employer_list-item__fake"></div>
              <div class="employer_list-item">
                  <img src="../../assets/img/Jobs/svg/Employer/frendly.svg" alt="Frendly">
                  <h4>{{ $t('employer-subtitle5') }}</h4>
                  <p>{{ $t('employer-subdesc5') }}</p>
              </div>
              <div class="employer_list-item">
                  <img src="../../assets/img/Jobs/svg/Employer/girl.svg" alt="Girl">
                  <h4>{{ $t('employer-subtitle6') }}</h4>
                  <p>{{ $t('employer-subdesc6') }}</p>
              </div>
              <!-- fake -->
              <div class="employer_list-item__fake"></div>
          </div>
          <ButtonLink :data="this.button" />
      </div>
  </section>
</template>

<script>
import ButtonLink from '../blocks/button-link';

export default {
  name: 'Employer',
  data() {
    return {
      button: {
        text: 'Send Your CV',
        link: 'mailto:hr@maddevs.io'
      }
    };
  },
  components: {
    ButtonLink
  }
};
</script>
