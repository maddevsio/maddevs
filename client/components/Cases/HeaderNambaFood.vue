<template>
  <section class="case_header">
    <video 
      class="case_main-video" 
      loop="true" 
      muted="true" 
      autoplay="true"
      v-if="!isIphone"
    >
      <source :src="getPathToVideo" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="case_logotype nambafood"></div>
    <h1 class="case_header-title">Namba Food <br> Top Delivery Service <br class="case_text-break"> in <br class="case_text-break-mobile"> Central Asia</h1>
    <ButtonMore class="case_more__button">Read our case studies ↓</ButtonMore>
  </section>
</template>

<script>
import ButtonMore from '@/components/Cases/ButtonMore';
export default {
  name: 'Header',
  components: {
    ButtonMore
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
    &:before {
      background-image: url("../../assets/img/Cases/nambafood/jpg/blank.jpg");
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
    background-color: $bgcolor--pink;
  }

  &_text-break-mobile {
    display: none;
  }

  @media screen and (max-width: 768px) {
    &_logotype {
      width: 103.51px;
      height: 92.75px;
      margin-bottom: 46px;
    }
  }

  @media screen and (max-width: 440px) {
    &_header-title {
      max-width: 290px;
    }

    &_text-break {
      display: none;
    }

    &_text-break-mobile {
      display: block;
    }
  }
}
</style>
