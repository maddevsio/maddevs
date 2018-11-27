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
