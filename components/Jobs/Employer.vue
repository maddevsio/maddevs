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
          <ButtonLink :data="{text: $t('btn-link--red'), link: 'mailto:hr@maddevs.io'}" />
      </div>
  </section>
</template>

<script>
import ButtonLink from '@/components/ui/button-link';

export default {
  name: 'Employer',
  components: {
    ButtonLink
  }
};
</script>

<style lang="scss" scoped>
.employer {
  padding: 120px 0 0;

  &_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: -20px;
    margin-top: 40px;
    margin-bottom: 80px;

    &-item {
      width: 300px;
      min-width: 300px;
      max-height: 320px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 30px;
      box-sizing: border-box;
      border-radius: 5px;
      box-shadow: 0 4px 10px 0 rgba(38, 36, 32, 0.14);
      margin: 20px;
      transition: all .2s ease;

      &:hover {
        box-shadow: 0 4px 5px 0 rgba(38, 36, 32, 0.08);
      }

      &__fake {
        width: 300px;
        min-width: 300px;
        max-height: 320px;
        margin: 20px;
      }

      img {
        margin-bottom: 25px;
      }

      h4 {
        max-width: 240px;
        text-align: center;
        min-height: 65px;
        margin-bottom: 8px;
        color: #2c1c1c;
        font-size: 24px;
        font-family: 'MADEEvolveSans-bold', sans-serif;
        line-height: 1.38;
      }

      p {
        width: 100%;
        text-align: center;
        line-height: 1.33;
        letter-spacing: 0.2px;
        font-size: 18px;
        font-family: 'MADEEvolveSans-regular',
          sans-serif;
        font-weight: normal;
        color: #595959;
      }
    }
  }

  .mnd-button-link {
    margin: 0 auto;
  }
}

@media only screen and (max-width: 1440px) {
  .employer {
    &_list-item {
        width: calc(25% - 40px);
        min-width: calc(25% - 40px);
        max-width: 100%;
        max-height: none;
        height: auto;
        &__fake {
          width: calc(25% - 40px);
          min-width: calc(25% - 40px);
          max-width: 100%;
          max-height: none;
          height: auto;
        } 
    }
  }
}
@media only screen and (max-width: 1366px) {
  .employer {
    &_list-item {
      width: calc(33% - 40px);
      min-width: calc(33% - 40px);

      &__fake {
        display: none;
      }
    }
  }
}
@media only screen and (max-width: 1024px) {
  .employer {
    &_list-item {
      width: calc(50% - 40px);
      min-width: calc(50% - 40px);

      &__fake {
        width: calc(50% - 40px);
        min-width: calc(50% - 40px);
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .employer {
    &_list-item {
      width: 100%;
      max-width: 100%;

      h4 {
        min-height: auto;
      }
    }
  }
}
@media only screen and (max-width: 480px) {
  .employer {
    padding-top: 80px;
  }
}
</style>

