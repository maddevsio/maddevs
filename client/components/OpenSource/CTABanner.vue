<template>
  <div
    class="open-source-cta"
    data-aos="fade-up"
  >
    <div class="container">
      <div class="open-source-cta__head">
        <TitleDesc title="Contribute <br /> to open source" />
      </div>
      <UIBanner
        title="Develop with <br /> Mad Devs"
        text="Showcase your work, give feedback <br /> to others, and learn from each other."
        :image="$getMediaFromS3('/images/OpenSource/png/team.png')"
        image-alt-text="Team"
      >
        <a
          href="https://github.com/maddevsio"
          target="_blank"
        >
          <UIButton>
            Contribute
          </UIButton>
        </a>
      </UIBanner>
    </div>
  </div>
</template>

<script>
import TitleDesc from '@/components/OpenSource/shared/TitleDesc'
import UIBanner from '@/components/shared/UIBanner'
import UIButton from '@/components/shared/UIButton'

export default {
  name: 'CTABanner',
  components: {
    TitleDesc,
    UIBanner,
    UIButton,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.open-source-cta {
  padding-bottom: 107px;
  &__head {
    margin-bottom: 55px;
  }

  /deep/ .cta-banner {
    min-height: 543px;
    &__image {
      right: 0;
      height: 87%;
    }
  }

  /deep/ .ui-button {
    width: 220px;
    height: 52px;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: -0.02em;
    @media screen and (max-width: 900px) {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 1380px) {
    /deep/ .cta-banner {
      min-height: auto;
    }
  }

  @media screen and (max-width: 1090px) {
    /deep/ .cta-banner {
      align-items: center;
      justify-content: space-between;
      padding: 40px 32px 0;
      &__info {
        text-align: center;
        align-items: center;
      }
      &__image {
        margin-top: 70px;
        position: static;
        width: 85%;
        height: auto;
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 27px;
    &__head {
      margin-bottom: 25px;
    }

    /deep/ .cta-banner {
      &__image {
        width: calc(100% + 48px);
      }
    }
  }
}
</style>
