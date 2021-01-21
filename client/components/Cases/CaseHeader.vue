<template>
  <section class="case_header">
    <!-- <video 
      class="case_main-video" 
      loop="true" 
      muted="true" 
      autoplay="true"
      v-if="!isIphone"
    >
      <source :src="getPathToVideo" type="video/mp4">
      Your browser does not support the video tag.
    </video> -->
    <div class="case_header-description">
      <div class="case_case-study-item">Case Study</div>
      <slot name="title"></slot>
      <slot name="description"></slot>
    </div>
    <div class="case_header-logo" :class="`case_${logo}-logo`"></div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/TextParagraph';
export default {
  name: 'Header',
  components: {
    TextParagraph
  },
  props: {
    logo: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isIphone: false
    };
  },
  computed: {
    getPathToVideo: () => {
      return `${process.env.awsUrl}/main.ef19480.mp4`;
    }
  },
  mounted() {
    if(navigator.userAgent.match(/(iPhone)/i)) {
      this.isIphone = true;
    } else {
      this.isIphone = false;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/styles/cases/header";
@import "../../assets/styles/cases/mixins";

.case {
  &_header {
    display: flex;
    flex-direction: row;

    &:after {
      display: none;
    }
  }

  &_header-title {
    @include title($text-color--white, 67.88px, -2px);
    margin-bottom: 10px;
    line-height: 112%;
    text-align: left;
    z-index: 1;
  }

  &_header-description {
    @include default_text($text-color--white, 17px, 166%, -0.035em, normal);
  }

  &_case-study-item {
    max-width: 88px;
    margin-bottom: 24px;
    padding: 4px 8px;
    letter-spacing: -0.035em;
    text-align: center;
    background-color: $bgcolor--red;
  }

  @media screen and (max-width: 1170px) {
    &_header {
      flex-direction: column-reverse;
    }
  }

  @media screen and (max-width: 655px) {
    &_header-title {
      @include title($text-color--white, 35px, -1px);
      line-height: 130%;
    }

    &_header-description,
    &_case-study-item {
      @include default_text($text-color--white, 16px, 150%, -0.02em, normal);
    }

    &_case-study-item {
      max-width: 85px;
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 370px) {
    &_header-title {
      font-size: 30px;
    }
    
    &_header-description,
    &_case-study-item {
      font-size: 13px;
    }
  }
}
</style>
