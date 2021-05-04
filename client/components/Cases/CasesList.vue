<template>
  <div class="container">
    <section class="cases-list">
      <!-- Card -->
      <CasesListItem
        v-for="(item, i) of casesList"
        :key="`case_list_item_${i}`"
        :video-file-name="item.video"
        :logo="item.logo"
        :subtitle="item.subtitle"
        :title="item.title"
        :desc="item.desc"
        :width="item.width"
        :link="item.link"
        :poster="item.poster"
        :class="`cases-list_${item.id}`"
      />
    </section>
    <NuxtLink
      to="/case-studies/"
      class="cases-list_see-more"
    >
      <span>See More</span> ↓
    </NuxtLink>
  </div>
</template>

<script>
import CasesListItem from '@/components/Cases/CasesListItem'
import { casesList } from '@/data/casesList'

export default {
  name: 'CasesList',
  components: { CasesListItem },
  data() {
    return {
      casesList,
      observer: null,
    }
  },

  mounted() {
    this.$nextTick(() => {
      if (window.innerWidth <= 992) {
        this.autoplay()
      }
    })
  },

  methods: {
    autoplay() {
      const observerCallback = entries => entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting) {
          target.pause()
        } else {
          target.play()
        }
      })

      const elements = Array.from(document.querySelectorAll('.cases-list_item-video'))

      if ('IntersectionObserver' in window) {
        this.observer = new IntersectionObserver(observerCallback, {
          threshold: 0.5,
        })
        elements.forEach(element => this.observer.observe(element))
      }
    },
  },
}
</script>

<style lang="scss" scoped>
  .cases-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: dense;
    gap: 30px;
    z-index: 1;
    background-color: #111213;

    @media screen and (max-width: 1140px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media screen and (max-width: 375px) {
      gap: 8px;
    }

    &_card {
      width: 100%;
      max-width: 100%;
      height: 605px;
      max-height: 605px;
      position: relative;
      border-radius: 2px;
      padding: 40px;
      box-sizing: border-box;
      overflow: hidden;
      text-decoration: none;

      a {
        text-decoration: none;
      }

      @media screen and (max-width: 375px) {
        padding: 24px;
        grid-column: auto / span 4 !important;
      }

      video {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }

      &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        background-color: rgba(0, 0, 0, 0.25);
        user-select: none;
        pointer-events: none;
      }

      &-info {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        position: relative;
        z-index: 1;
        color: #F4F4F4;

        * {
          color: inherit;
          font-family: 'Inter', sans-serif;
        }

        img {
          max-width: 105px;
          height: auto;
          margin-bottom: auto;
        }

        > span {
          text-transform: uppercase;
          letter-spacing: 0.28em;
          font-size: 10px;
          font-weight: normal;
          line-height: 140%;
          margin-bottom: 16px;
        }

        h3 {
          max-width: 350px;
          font-size: 40px;
          letter-spacing: -0.04em;
          font-weight: bold;
          line-height: 100%;
          margin-bottom: 16px;

          @media screen and (max-width: 375px) {
            font-size: 32px;
          }
        }

        p {
          max-width: 500px;
          font-size: 16px;
          letter-spacing: -0.013em;
          line-height: 140%;
          font-weight: normal;
          margin-bottom: 16px;
        }

        > a {
          font-size: 16px;
          line-height: 100%;
          text-decoration: none;
          padding: 8px;
          background-color: #fff;
          color: #000;
          border-radius: 4px;

          @media screen and (max-width: 375px) {
            font-size: 14px;
          }
        }
      }
    }

    &_see-more {
      color: #EC1C24;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: -0.013em;
      margin: 50px auto 0;
      font-family: 'Inter', sans-serif;
      background-color: transparent;
      border: 0;
      cursor: pointer;
      text-decoration: none;

      span {
        position: relative;

        &::after {
          content: '';
          width: 100%;
          height: 1px;
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          background-color: #EC1C24;
        }
      }
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-self: start;
    padding-bottom: 120px;

    @media screen and (max-width: 375px) {
      padding: 0;
    }
  }

  /deep/ .cases-list_yourcast {
    video {
      width: 140%;
      left: auto;
      right: 0;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
</style>
