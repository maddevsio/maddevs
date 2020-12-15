<template>
  <section class="case_header">
    <!-- <video class="case_main-video" loop="true" muted="true" autoplay="true">
      <source src="" type="video/mp4">
      Your browser does not support the video tag.
    </video> -->
    <div class="case_logotype nambafood"></div>
    <h1 class="case_header-title">Sir John Monash Centre’s <br> case</h1>
    <ButtonMore class="case_more__button">Read our case studies ↓</ButtonMore>
  </section>
</template>

<script>
import ButtonMore from '@/components/Cases/ButtonMore';
export default {
  name: 'Header',
  components: {
    ButtonMore
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/styles/cases/header";
@import "../../assets/styles/cases/mixins";

.case {
  &_header {
    &:before {
      background-image: url("../../assets/img/Cases/sjmc/jpg/sjmc-main-video-preview.jpg");
    }
  }

  &_logotype {
    @include nambafood-header;
    width: 127px;
    height: 114px;
    margin-bottom: 54px;
    z-index: 1;
  }

  &_more__button {
    background-color: $bgcolor--gold;
  }
}
</style>
