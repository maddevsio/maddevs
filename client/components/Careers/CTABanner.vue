<template>
  <div class="careers-cta-banner_container container">
    <UIBanner
      title="Can’t see your next role?"
      text="If you don’t see a suitable vacancy, but you are sure we’re meant to be, drop us a line."
      :image="require(`@/assets/img/Careers/Daria.png`)"
      image-alt-text="Daria"
      man-name="Daria Utesheva"
      man-position="Head of HR Departament"
    >
      <a
        href="https://t.me/DianaHRDigital"
        target="_blank"
      >
        <UIButton class="careers-cta-banner__button">
          <img
            :data-src="require(`@/assets/img/Careers/svg/telegram--white.svg`)"
            width="20"
            height="17"
            class="img_lazy"
          >
          &nbsp;
          Telegram us
        </UIButton>
      </a>
      <ul class="careers-cta-banner__links">
        <li>
          <a
            href="#"
            target="_blank"
          >
            Headhunter
          </a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
          >
            Habr.com
          </a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
          >
            Linkedin
          </a>
        </li>
      </ul>
    </UIBanner>
  </div>
</template>

<script>
import UIBanner from '@/components/shared/UIBanner'
import UIButton from '@/components/shared/UIButton'

export default {
  name: 'CTABanner',
  components: {
    UIBanner,
    UIButton,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.careers-cta-banner {
  &_container {
    padding-bottom: 100px;
  }
  &__button {
    font-weight: normal;
    padding: 17px 31px;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: -0.02em;
    img {
      transform: translateY(2.5px);
    }
    @media screen and (max-width: 900px) {
      font-size: 16px;
    }
  }
  &__links {
    margin-top: 24.5px;
    display: flex;
    li {
      margin-right: 11.5px;
      a {
        letter-spacing: -0.013em;
        font-size: 14px;
        line-height: 19px;
        color: $text-color--black-oil;
        text-decoration: underline;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
