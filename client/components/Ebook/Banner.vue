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
          <NuxtLink to="#read-online">
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

  > .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  &_info {
    margin-right: 30px;

    h1 {
      max-width: 650px;
      @include font('Inter', 68px, 600);
      line-height: 72px;
      color: #fff;
      margin-bottom: 72px;
      letter-spacing: -2px;
    }

    h5 {
      @include font('Inter', 20px, 600);
      letter-spacing: -0.4px;
      line-height: 26px;
      color: #fff;
      margin-bottom: 16px;
    }

    ul {
      margin-bottom: 48px;
      list-style: inherit;
      list-style-position: inside;

      li {
        @include font('Inter', 16px, 400);
        line-height: 24px;
        color: #fff;
        letter-spacing: -0.4px;
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
}
</style>
