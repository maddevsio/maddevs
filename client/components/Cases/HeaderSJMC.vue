<template>
  <section class="case_header">
    <!-- <video class="case_main-video" loop="true" muted="true" autoplay="true">
      <source src="" type="video/mp4">
      Your browser does not support the video tag.
    </video> -->
    <div class="case_logotype sjmc-header"></div>
    <h1 class="case_header-title">Sir John Monash <br class="case_mobile-break"> Centre’s <br class="case_desktop-break"> case</h1>
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

  &_mobile-break {
    display: none;
  }

  @media screen and (max-width: 768px) {
    &_logotype {
      width: 149.12px;
      height: 65.92px;
      margin-bottom: 27px;
    }

    &_play-button {
      margin-top: 25px;
    }

    &_play-icon {
      margin-right: 11px
    }

    &_mobile-break {
      display: block;
    }

    &_desktop-break {
      display: none;
    }
  }
}
</style>
