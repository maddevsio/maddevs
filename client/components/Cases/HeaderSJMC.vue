<template>
  <div>
    <section class="case_header" id="case-header">
      <video
        class="case_main-video" 
        loop="true" muted="true" 
        autoplay="true"
        v-if="!isIphone"
      >
        <source :src="getPathToVideo" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="case_logotype sjmc-header"></div>
      <h1 class="case_header-title">The maintenance <br class="case_mobile-break"> of memory: <br> Sir John Monash <br class="case_mobile-break"> Centre</h1>
      <button class="case_play-button" type="button" @click="openFullscreen()">
        <div class="case_play-icon"></div>
        View video about SJMC
      </button>
      <ButtonMore class="case_more__button" id="read-our-case-btn">Read our case studies ↓</ButtonMore>
    </section>
    <SJMCVideo />
  </div>
</template>

<script>
import ButtonMore from '@/components/Cases/ButtonMore';
import SJMCVideo from '@/components/Cases/SJMCVideo';

export default {
  name: 'Header',
  components: {
    ButtonMore,
    SJMCVideo
  },
  data() {
    return {
      isIphone: false
    };
  },
  computed: {
    getPathToVideo: () => {
      return `${process.env.awsUrl}/sjmc/sjmc-main-video.b35a387.mp4`;
    }
  },
  mounted() {
    if(navigator.userAgent.match(/(iPhone)/i)) {
      this.isIphone = true;
    } else {
      this.isIphone = false;
    }
  },
  methods: {
    openFullscreen() {
      this.$nuxt.$emit('open-fullscreen');
    }
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

  @media screen and (max-width: 1024px) {
    &_play-button {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    &_logotype {
      width: 212.08px;
      height: 94.29px;
      margin-bottom: 57px;
    }
  }

  @media screen and (max-width: 520px) {
    &_mobile-break {
      display: block;
    }
  }
}
</style>
