<template>
   <section id="advantages" class="advantages">
         <div class="container">
            <h2 class="sec-title">{{ $t('advantages-title') }}</h2>
            <p>{{ $t('advantages-desc') }}</p>
            <div class="advantages_list">
               <div class="advantages_list-item">
                  <img src="../../assets/img/Jobs/svg/Advantages/cash.svg" alt="Cash">
                  <h4>{{ $t('advantages-subtitle1') }}</h4>
               </div>
               <div class="advantages_list-item">
                  <img src="../../assets/img/Jobs/svg/Advantages/rocket.svg" alt="Rocket">
                  <h4>{{ $t('advantages-subtitle2') }}</h4>
               </div>
               <div class="advantages_list-item">
                  <img src="../../assets/img/Jobs/svg/Advantages/pet.svg" alt="Pet">
                  <h4>{{ $t('advantages-subtitle3') }}</h4>
               </div>
               <div class="advantages_list-item">
                  <img src="../../assets/img/Jobs/svg/Advantages/remote.svg" alt="Remote">
                  <h4>{{ $t('advantages-subtitle4') }}</h4>
               </div>
               <div class="advantages_list-item">
                  <img src="../../assets/img/Jobs/svg/Advantages/commu.svg" alt="Communication">
                  <h4>{{ $t('advantages-subtitle5') }}</h4>
               </div>
               <div class="advantages_list-item">
                  <img src="../../assets/img/Jobs/svg/Advantages/schedule.svg" alt="Schedule">
                  <h4>{{ $t('advantages-subtitle6') }}</h4>
               </div>
            </div>
         </div>
   </section>
</template>

<script>
export default {
  name: 'Advantages',
};
</script>

<style lang="scss" scoped>
.advantages {
  padding: 120px 0 0;
  p {
    max-width: 710px;
    font-size: 28px;
    color: #000;
    font-family: 'MADEEvolveSans-regular', sans-serif;
    line-height: 1.5;
    margin: 30px auto 0;
    text-align: center;
  }
  &_list {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 40px;
    margin-bottom: -40px;
    &-item {
      max-width: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 40px;
      img {
        width: 62px;
        height: 62px;
      }
      h4 {
        font-size: 22px;
        font-family: 'MADEEvolveSans-bold',
        sans-serif;
        line-height: 1.33;
        text-align: center;
        color: #000;
        margin-top: 18px;
        white-space: pre;
      }
    }
  }
}
@media only screen and (max-width: 1024px) {
  .advantages {
    &_list {
      &-item {
        width: 33%;
        max-width: 33%;
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .advantages {
    p {
      font-size: 28px;
      margin-top: 12px;
    }

    &_list {
      &-item {
        h4 {
          font-size: 16px;
        }
      }
    }
  }
}
@media only screen and (max-width: 480px) {
  .advantages {
    padding: 80px 0 0;

    p {
      font-size: 24px;
    }

    &_list {
      &-item {
        width: 50%;
        max-width: 50%;
      }
    }
  }
}
</style>

