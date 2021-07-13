<template>
  <div class="footer-contacts">
    <div class="footer-contacts__head-content">
      <div class="footer-contacts__contact-item">
        <p class="footer-contacts__contact-title">
          Text us:
        </p>
        <a
          :href="`mailto:${mailLink}`"
          class="footer-contacts__contact-link footer-contacts__contact-mail"
        >{{
          mailLink
        }}</a>
      </div>
      <div class="footer-contacts__contact-item">
        <div class="footer-contacts__contact-title-wrapper">
          <div class="footer-contacts__contact-title-flag">
            <img
              :data-src="require(`@/assets/img/Home/flags/uk.svg`)"
              width="19"
              height="14"
              class="img_lazy"
              alt="United Kingdom"
            >
          </div>
          <p class="footer-contacts__contact-title">
            Call us:
          </p>
        </div>
        <a
          href="tel:+442039848555"
          class="footer-contacts__contact-link footer-contacts__contact-phone-number"
        >+44 20 3984 8555</a>
      </div>
    </div>
    <div class="footer-contacts__lists-wrapper">
      <ul class="footer-contacts__messengers-list">
        <li
          v-for="messenger in messengers"
          :key="messenger.key"
        >
          <a
            :href="messenger.url"
            target="_blank"
            class="footer-contacts__messenger-item-wrapper"
          >
            <img
              :data-src="require(`@/assets/img/Footer/svg/${messenger.key}.svg`)"
              width="42"
              height="42"
              class="img_lazy"
              :alt="messenger.label"
            >
            <p class="footer-contacts__messenger-name">{{ messenger.label }}</p>
          </a>
        </li>
      </ul>
      <div class="footer-contacts__social-network-list-desktop">
        <FooterSocialNetworks />
      </div>
    </div>
  </div>
</template>

<script>
import { messengers } from '@/data/messengers'
import FooterSocialNetworks from '@/components/core/Footer/FooterSocialNetworks'

export default {
  name: 'FooterContacts',
  components: {
    FooterSocialNetworks,
  },

  data() {
    return {
      messengers,
      mailLink: process.env.emailContact,
    }
  },
}
</script>

<style lang="scss" scoped>
@mixin contacts-head-content {
  &__head-content {
    flex-direction: column;
    margin-bottom: 31px;
  }
}

@mixin messenger-list-grid {
  &__messenger-item-wrapper {
    justify-content: flex-start;
  }

  &__messenger-item-wrapper {
    &:nth-child(3) {
      margin-left: -8px;
    }
  }
}

.footer-contacts {
  &__head-content {
    margin-bottom: 68px;
  }

  &__head-content,
  &__messengers-list,
  &__messenger-item-wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__contact-title-wrapper {
    display: flex;
    align-items: center;
  }

  &__contact-title,
  &__messenger-name {
    @include font('Inter', 16px, 400);
    line-height: 24px;
    letter-spacing: -0.013em;
  }

  &__contact-title-flag {
    display: flex;
    align-items: center;
    margin-right: 8px;

    svg {
      width: 18px;
      height: 14px;
    }
  }

  &__contact-title,
  &__contact-link {
    color: $text-color--white-primary;
  }

  &__contact-link {
    @include font('Poppins', 34px, 600);
    display: inline-block;
    margin-top: 12px;
    line-height: 100%;
    letter-spacing: -1px;
    border-bottom: 1px solid $text-color--red-opacity;
    text-decoration: none;
  }

  &__messenger-item-wrapper {
    align-items: center;
    text-decoration: none;

    &:first-child {
      margin-left: -8px;
    }

    img {
      display: block;
      width: 42px;
      height: 42px;
      margin-right: 3px;
    }
  }

  &__messenger-name {
    color: $text-color--grey;
  }

  &__social-network-list-desktop {
    margin-top: 53px;
    padding-top: 53px;
    border-top: 1px solid $border-color--grey-dark-transparent;
  }
}

@media only screen and (max-width: 1320px) {
  .footer-contacts {
    &__contact-link {
      font-size: 28px;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1200px) {
  .footer-contacts {
    &__contact-item {
      margin-bottom: 42px;

      &:last-child {
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    &__social-network-list-desktop {
      margin-top: 35px;
      padding-top: 40px;
    }

    @include contacts-head-content;
    @include messenger-list-grid;
  }
}

@media screen and (max-width: 1100px) {
  .footer-contacts__messengers-list {
    width: max-content;
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-column-gap: 70px;
  }
}

@media only screen and (max-width: 991px) {
  .footer-contacts {
    &__head-content {
      flex-direction: row;
      margin-bottom: 48px;
      flex-wrap: wrap;
    }

    &__lists-wrapper {
      max-width: 100%;
    }
  }
}

@media screen and (max-width: 800px) {
  .footer-contacts__messengers-list {
    grid-column-gap: 60px;
  }
}

@media screen and (max-width: 767px) {
  .footer-contacts {
    &__social-network-list-desktop {
      display: none;
    }

    &__contact-item {
      &:last-child {
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    &__messenger-telegram {
      margin-left: 2px;
    }
  }
}

@media only screen and (max-width: 640px) {
  .footer-contacts {
    @include contacts-head-content;
    @include messenger-list-grid;

    &__contact-item {
      margin-bottom: 33px;
    }

    &__contact-title {
      font-size: 13px;
      line-height: 22px;
    }
  }
}

@media screen and (max-width: 600px) {
  .footer-contacts {
    &__messengers-list {
      width: max-content;
      display: grid;
      grid-template-columns: repeat(2, max-content);
      grid-column-gap: 70px;

      svg {
        width: 42px;
        height: 42px;
      }
    }
  }
}

@media screen and (max-width: 360px) {
  .footer-contacts__messengers-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-column-gap: 33px;
  }
}
</style>
