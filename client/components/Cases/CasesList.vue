<template>
  <div class="container">
    <section class="cases-list">
      <!-- Card -->
        <CasesListItem
          :video-file-name="sjmc.video"
          :logo="sjmc.logo"
          :subtitle="sjmc.subtitle"
          :title="sjmc.title"
          :desc="sjmc.desc"
        />
      <!-- Card -->
      <NuxtLink
        to="/"
        class="cases-list_card cases-list_card-big"
      >
        <!-- Video BG -->
        <video
          loop="true"
          muted="true"
          autoplay="true"
        >
          <source
            :src="$getMediaFromS3('/videos/main.ef19480.mp4')"
            type="video/mp4"
          >
          Your browser does not support the video tag.
        </video>
        <!-- END Video BG -->
        <!-- Card info -->
        <div class="cases-list_card-info">
          <img
            :src="$getMediaFromS3(`/images/Cases/${logo.folder}/svg/${logo.file}.svg`)"
            :alt="logo.alt"
          >
          <span>Foodtech</span>
          <h3>Contactless Delivery Service</h3>
          <p>Mad Devs created the Namba Food delivery service from scratch. The solution orchestrates feature-rich apps for couriers, end-users, and business owners.</p>
          <NuxtLink
            to="/"
          >
            Explore
          </NuxtLink>
        </div>
        <!-- END Card info  -->
      </NuxtLink>
      <!-- Card -->
      <NuxtLink
        to="/"
        class="cases-list_card cases-list_card-small"
      >
        <!-- Video BG -->
        <video
          loop="true"
          muted="true"
          autoplay="true"
        >
          <source
            :src="$getMediaFromS3('/videos/yourcast-banner.mp4')"
            type="video/mp4"
          >
          Your browser does not support the video tag.
        </video>
        <!-- END Video BG -->
        <!-- Card info -->
        <div class="cases-list_card-info">
          <img
            :src="$getMediaFromS3(`/images/Cases/${logo.folder}/svg/${logo.file}.svg`)"
            :alt="logo.alt"
          >
          <span>Content Streaming</span>
          <h3>The Evolution of Yourcast.TV</h3>
          <p>Mad Devs developed a secure and private video streaming service and live video broadcasting cinema to provide entertainment experience to isolated groups feeling homesick.</p>
          <NuxtLink
            to="/"
          >
            Explore
          </NuxtLink>
        </div>
        <!-- END Card info  -->
      </NuxtLink>
      <!-- Card -->
      <NuxtLink
        to="/"
        class="cases-list_card cases-list_card-small"
      >
        <!-- Video BG -->
        <video
          loop="true"
          muted="true"
          autoplay="true"
        >
          <source
            :src="$getMediaFromS3('/videos/main.ef19480.mp4')"
            type="video/mp4"
          >
          Your browser does not support the video tag.
        </video>
        <!-- END Video BG -->
        <!-- Card info -->
        <div class="cases-list_card-info">
          <img
            :src="$getMediaFromS3(`/images/Cases/${logo.folder}/svg/${logo.file}.svg`)"
            :alt="logo.alt"
          >
          <span>BYOD</span>
          <h3>Veeqo – platform for e-commerce</h3>
          <p>Mad Devs created the Namba Food delivery service from scratch. The solution orchestrates feature-rich apps for couriers, end-users, and business owners.</p>
          <NuxtLink
            to="/"
          >
            Explore
          </NuxtLink>
        </div>
        <!-- END Card info  -->
      </NuxtLink>
      <!-- Card -->
      <NuxtLink
        to="/"
        class="cases-list_card cases-list_card-big"
      >
        <!-- Video BG -->
        <video
          loop="true"
          muted="true"
          autoplay="true"
        >
          <source
            :src="$getMediaFromS3('/videos/godee-case-main-video.mp4')"
            type="video/mp4"
          >
          Your browser does not support the video tag.
        </video>
        <!-- END Video BG -->
        <!-- Card info -->
        <div class="cases-list_card-info">
          <img
            :src="$getMediaFromS3(`/images/Cases/${logo.folder}/svg/${logo.file}.svg`)"
            :alt="logo.alt"
          >
          <span>Transportation</span>
          <h3>Convenient shuttle bus service</h3>
          <p>Mad Devs helped GoDee with developing feature-rich software to re-invent public mobility by building new smart ways of a daily commute.</p>
          <NuxtLink
            to="/"
          >
            Explore
          </NuxtLink>
        </div>
        <!-- END Card info  -->
      </NuxtLink>
    </section>
    <!-- NOTE: Temporarily commented -->
    <!-- <button
      class="cases-list_see-more"
    >
      <span>See More</span> ↓
    </button> -->
  </div>
</template>

<script>
import CasesListItem from '@/components/Cases/CasesListItem'

export default {
  name: 'CasesList',
  components: { CasesListItem },
  data() {
    return {
      logo: {
        width: 259,
        height: 82,
        folder: 'nambafood',
        file: 'nambafood-logo',
        alt: '',
      },

      nambafood: '/videos/main.ef19480.mp4',
      yourcast: '/videos/yourcast-banner.mp4',
      veequ: '/videos/main.ef19480.mp4',
      godee: '/videos/godee-case-main-video.mp4',

      sjmc: {
        video: '/videos/sjmc/sjmc-main-video.b35a387.mp4',
        subtitle: 'SJMC',
        title: 'Sir John Monash Centre',
        desc: 'Mad Devs engineers helped Sir John Monash Centre to enhance and maintain the BYOD multimedia technology.',
        logo: {
          width: 259,
          height: 82,
          folder: 'nambafood',
          file: 'nambafood-logo',
          alt: '',
        },
      },
    }
  },

  methods: {
    play() {
      this.$refs.video.play()
    },

    pause() {
      this.$refs.video.pause()
    },
  },
}
</script>

<style lang="scss" scoped>
  .cases-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: dense;
    gap: 30px;

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

      &-full {
        grid-column: auto / span 4;
      }

      &-big {
        grid-column: auto / span 3;
      }

      &-middle {
        grid-column: auto / span 2;
      }

      &-small {
        grid-column: auto / span 1;
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
</style>
