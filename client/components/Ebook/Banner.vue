<template>
  <section class="ebook-banner">
    <div class="container">
      <!-- Info -->
      <div class="ebook-banner_info">
        <h1>Custom Software Development: Pricing Strategies</h1>
        <h5>This e-book is for you if you:</h5>
        <ul>
          <li>Are looking for software development services</li>
          <li>Are an aspiring IT company searching for useful information</li>
          <li>Are interested in pricing information for custom software development</li>
        </ul>
        <div class="ebook-banner_info-btns">
          <UIButton @click="showModalEbook">
            Download PDF
            <img
              src="@/assets/img/common/arrow-up-right.svg"
              alt="arrow"
            >
          </UIButton>
          <NuxtLink to="#read-online-anchor">
            Read it online
          </NuxtLink>
        </div>
      </div>

      <!-- Book -->
      <div class="ebook-banner_book">
        <img
          src="@/assets/img/Ebook/book.svg"
          alt="Ebook"
        >
      </div>
    </div>
    <!-- this id should be unique, because it used for google analytics -->
    <ModalEbook
      id="ebook-modal"
      ref="modalEbook"
    />
  </section>
</template>

<script>
import UIButton from '@/components/shared/UIButton'
import ModalEbook from '@/components/core/modals/ModalEbook'

export default {
  name: 'EbookBanner',
  components: { UIButton, ModalEbook },
  methods: {
    showModalEbook() {
      if (!this.$refs?.modalEbook?.show) return
      this.$refs.modalEbook.show()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.ebook-banner {
  padding-top: 207px;

  @media screen and (max-width: 768px) {
    padding-top: 147px;
  }

  > .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }

  &_info {
    margin-right: 30px;

    @media screen and (max-width: 768px) {
      margin-right: 0;
    }

    h1 {
      max-width: 650px;
      @include font('Inter', 68px, 600);
      line-height: 72px;
      color: #fff;
      margin-bottom: 72px;
      letter-spacing: -2px;

      @media screen and (max-width: 540px) {
        @include font('Inter', 42px, 600);
        line-height: 48px;
        margin-bottom: 32px;
      }
    }

    h5 {
      @include font('Inter', 20px, 600);
      letter-spacing: -0.4px;
      line-height: 26px;
      color: #fff;
      margin-bottom: 16px;

      @media screen and (max-width: 540px) {
        @include font('Inter', 18px, 600);
        line-height: 22px;
      }
    }

    ul {
      margin-bottom: 48px;
      list-style: none;

      li {
        display: flex;
        align-items: flex-start;
        @include font('Inter', 16px, 400);
        line-height: 24px;
        color: #fff;
        letter-spacing: -0.4px;

        @media screen and (max-width: 540px) {
          margin-bottom: 15px;
        }

        &::before {
          content: '';
          width: 5px;
          min-width: 5px;
          max-width: 5px;
          height: 5px;
          display: inline-block;
          border-radius: 100%;
          background-color: #fff;
          margin: 10px 10px 0;
        }
      }
    }

    &-btns {
      display: flex;
      align-items: center;

      a,
      button {
        @include font('Inter', 16px, 600);
        letter-spacing: -0.4px;
        line-height: 20px;
        color: #fff;
      }

      button {
        display: flex;
        align-items: center;
        padding: 14px 24px;
        margin-right: 32px;

        img {
          margin-left: 7px;
        }
      }

      a {
        text-decoration-line: underline;
        text-underline-offset: 2px;
      }
    }
  }

  &_book {
    img {
      width: 100%;
      max-width: 395px;

      @media screen and (max-width: 768px) {
        width: 211px;
        margin-bottom: 71px;
      }

      @media screen and (max-width: 540px) {
        margin-bottom: 47px;
      }
    }
  }
}
</style>
