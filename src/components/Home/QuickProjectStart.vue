<template>
  <section id="quick" class="quick">
    <div class="container">
      <h2 class="sec-title">{{$t('quick-title')}}</h2>
      <div class="quick-list">
        <div class="quick-list_item" data-text="1">
          <img src="../../assets/img/Home/svg/Quick/phone.svg" alt="Phone">
          <h4>{{$t('quick-subtitle1')}}</h4>
          <p>{{$t('quick-desc1')}}</p>
        </div>
        <div class="quick-list_item" data-text="2">
          <img src="../../assets/img/Home/svg/Quick/brain.svg" alt="Brain">
          <h4>{{$t('quick-subtitle2')}}</h4>
          <p>{{$t('quick-desc2')}}</p>
        </div>
        <div class="quick-list_item" data-text="3">
          <img src="../../assets/img/Home/svg/Quick/doc.svg" alt="Proposal">
          <h4>{{$t('quick-subtitle3')}}</h4>
          <p>{{$t('quick-desc3')}}</p>
        </div>
        <div class="quick-list_item" data-text="4">
          <img src="../../assets/img/Home/svg/Quick/team.svg" alt="Team">
          <h4>{{$t('quick-subtitle4')}}</h4>
          <p>{{$t('quick-desc4')}}</p>
        </div>
        <div class="quick-list_item" data-text="5">
          <img src="../../assets/img/Home/svg/Quick/flag.svg" alt="Getting started">
          <h4>{{$t('quick-subtitle5')}}</h4>
          <p>{{$t('quick-desc5')}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'quick-project-start'
};
</script>
