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
    background-color: #111213;

    &:after {
      display: none;
    }
  }

  &_header-title {
    @include title($text-color--white, 67.88px, -2px);
    margin-right: 155px;
    margin-bottom: 10px;
    line-height: 112%;
    text-align: left;
    z-index: 1;
  }

  &_header-description {
    color: $text-color--white;
  }

  &_case-study-item {
    max-width: 88px;
    margin-bottom: 24px;
    padding: 4px 8px;
    letter-spacing: -0.035em;
    text-align: center;
    background-color: $bgcolor--red;
  }

  &_godee-logo {
    @include godee-logo;
    width: 292px;
    height: 130px;
    z-index: 1;
  }
}
</style>
