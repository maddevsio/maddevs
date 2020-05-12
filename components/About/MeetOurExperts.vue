<template>
  <section id="meet-our-experts" class="meet-our_experts">
    <div class="container">
      <div class="meet-our_experts__main-title_wrap">
        <h2 class="meet-our_experts__main-title main-title">Meet our experts</h2>
      </div>
      <div class="meet-our_experts__our-experts_image-wrap">
        <img src="../../assets/img/Home/svg/experts/experts.svg" alt="Our experts">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MeetOurExperts'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .meet-our_experts {
    padding-bottom: 149px;
    background-color: $bgcolor--white;

    &__main-title {
      padding-bottom: 59px;
    }
  }
</style>
