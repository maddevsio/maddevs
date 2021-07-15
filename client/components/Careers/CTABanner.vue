<template>
  <div
    class="careers-cta-banner_container container"
  >
    <UIBanner
      title="Can’t find your <br /> next role?"
      text="If you don’t see a suitable vacancy, but are sure that we’re meant to be, drop us a line."
      :image="require(`@/assets/img/Careers/Daria.png`)"
      image-alt-text="Daria"
      man-name="Daria Utesheva"
      man-position="Head of HR Departament"
    >
      <a
        href="https://t.me/DianaHRDigital"
        target="_blank"
      >
        <UIButton>
          <img
            :data-src="require(`@/assets/img/Careers/svg/telegram--white.svg`)"
            width="20"
            height="17"
            alt="Telegram"
            class="img_lazy"
          >
          &nbsp;
          Telegram us
        </UIButton>
      </a>
      <ul class="careers-cta-banner__links">
        <li>
          <a
            href="https://career.habr.com/companies/maddevs/cp/vacancies/"
            target="_blank"
          >
            Headhunter
          </a>
        </li>
        <li>
          <a
            href="https://novosibirsk.hh.ru/employer/2861993/"
            target="_blank"
          >
            Habr.com
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/mad-devs/"
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
    /deep/ .ui-button {
      width: 193px;
      height: 52px;
      font-weight: 400;
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

  @media screen and (max-width: 768px) {
    &_container {
      padding-bottom: 44px;
    }
  }
}
</style>
