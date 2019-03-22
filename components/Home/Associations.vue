<template>
  <section id="associations" class="associations">
    <div class="container">
      <div class="associations-wrap">
        <h2 class="sec-title">{{$t('Membership in associations')}}</h2>
        <div class="associations-wrap_list">
          <div class="associations-wrap_list-item htp">
            <img src="../../assets/img/Home/svg/associations/pht.svg" alt="">
          </div>
          <div class="associations-wrap_list-item kssda">
            <img src="../../assets/img/Home/svg/associations/kssda.svg" alt="">
          </div>
          <div class="associations-wrap_list-item amcham">
            <img src="../../assets/img/Home/svg/associations/amcham.svg" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'associations'
};
</script>

<style lang="scss" scoped>
.associations {
  padding: 60px 0 120px;
  &-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    &_list {
      width: 100%;
      max-width: 870px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 65px;
    }
  }
}
</style>

