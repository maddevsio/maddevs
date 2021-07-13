<template>
  <section class="container_full background-color-blue m-96_bottom media-m-48_bottom p-48_top media-p-41_top p-56_bottom media-p-41_bottom">
    <div class="container_regular">
      <h3 class="case_title_h2 case_title case_text-align-center m-10_bottom media-m-16_bottom">
        Result
      </h3>
      <TextParagraph class="case_description case_text-align-center m-12_top m-66_bottom media-m-41_bottom">
        We call it a win-win situation between the development team and the customer’s business.
      </TextParagraph>
      <div class="case_cards-container">
        <div class="case_card">
          <img
            :data-src="$getMediaFromS3(`/images/Cases/veeqo/svg/time.svg`)"
            alt="Significantly Reduced Test Time."
            width="66"
            height="66"
            class="case_card-icon case_time-icon media_lazy"
          >
          <h4 class="case_title_h4 case_card-title">
            Significantly reduced test time
          </h4>
        </div>
        <div
          v-prlx="animationSettings"
          class="case_card case_card-anim"
        >
          <img
            :data-src="$getMediaFromS3(`/images/Cases/veeqo/svg/dollar.svg`)"
            alt="Decreased Cost of CI Maintenance."
            width="66"
            height="66"
            class="case_card-icon case_dollar-icon media_lazy"
          >
          <h4 class="case_title_h4 case_card-title">
            Decreased cost of CI maintenance
          </h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'

export default {
  name: 'ContinuousIntegrationResult',
  components: {
    TextParagraph,
  },

  data() {
    return {
      animationSettings: {
        reverse: true,
        limit: {
          min: -20,
          max: 20,
        },

        mobileMaxWidth: 621,
        fromBottom: true,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.case {
  &_title,
  &_description,
  &_card-title {
    color: $text-color--white;
  }

  &_description {
    max-width: 455px;
    margin-left: auto;
    margin-right: auto;
  }

  &_no-wrap {
    white-space: nowrap;
  }

  &_cards-container {
    @include grid(repeat(2, 332px), auto, 30px, 0);
    justify-content: center;

    @media screen and (max-width: 880px) {
      @include grid(repeat(2, 1fr), auto, 20px, 0);
    }
  }

  &_card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 52px 14px;
    background: $bgcolor--blue-veeqo;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: center;
  }

  &_card-anim {
    position: relative;
    top: 20px;
  }

  &_card-icon {
    display: block;
    margin-bottom: 40px;
  }

  &_time-icon {
    width: 107.03px;
    height: 111px;
  }

  &_dollar-icon {
    width: 166px;
    height: 90px;
  }

  @media screen and (max-width: 768px) {
    &_card {
      padding-top: 45px;
      padding-bottom: 40px;
    }
  }

  @media screen and (max-width: 620px) {
    &_cards-container {
      @include grid(repeat(1, 1fr), auto, 0, 16px);
    }

    &_card-anim {
      top: 0;
    }
  }
}
</style>
