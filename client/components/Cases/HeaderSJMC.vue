<template>
  <section class="case_header">
    <!-- <video class="case_main-video" loop="true" muted="true" autoplay="true">
      <source src="" type="video/mp4">
      Your browser does not support the video tag.
    </video> -->
    <div class="case_logotype sjmc-header"></div>
    <h1 class="case_header-title">Sir John Monash Centre’s <br> case</h1>
    <button class="case_play-button" type="button">
      <div class="case_play-icon"></div>
      View video about SJMC
    </button>
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

  &_logotype,
  &_play-button {
    z-index: 1;
  }

  &_play-button {
    display: flex;
    align-items: center;
    margin-top: 59px;
    padding: 0;
    border: 0;
    background: none;
    @include default_text($text-color--white-primary, 13px, 166%, -0.02em, normal);
    cursor: pointer;
  }

  &_play-icon {
    @include play-header;
    width: 14px;
    height: 14px;
    margin-right: 16px
  }

  &_logotype {
    @include sjmc-header;
    width: 278.36px;
    height: 124.33px;
    margin-bottom: 63px;
  }

  &_more__button {
    background-color: $bgcolor--gold;
  }
}
</style>
