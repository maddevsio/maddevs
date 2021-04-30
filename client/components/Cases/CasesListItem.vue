<template>
  <div
    class="cases-list_item cases-list_item-full"
    @mouseover="play"
    @mouseout="pause"
  >
    <NuxtLink to="/">
      <!-- Video BG -->
      <video
        ref="video"
        loop="true"
        muted="true"
        autoplay="false"
      >
        <source
          :src="$getMediaFromS3(videoFileName)"
          type="video/mp4"
        >
        Your browser does not support the video tag.
      </video>
      <!-- END Video BG -->
      <!-- Card info -->
      <div class="cases-list_item-info">
        <img
          :width="logo.width"
          :height="logo.height"
          :src="$getMediaFromS3(`/images/Cases/${logo.folder}/svg/${logo.file}.svg`)"
          :alt="logo.alt"
        >
        <span>{{ subtitle }}</span>
        <h3>{{ title }}</h3>
        <p>{{ desc }}</p>
        <NuxtLink
          to="/"
        >
          Explore
        </NuxtLink>
      </div>
      <!-- END Card info  -->
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    videoFileName: {
      type: String,
      default: null,
    },

    logo: {
      type: Object,
      default: () => ({
        width: 259,
        height: 82,
        folder: '',
        file: '',
        alt: '',
      }),
    },

    title: {
      type: String,
      default: null,
    },

    subtitle: {
      type: String,
      default: null,
    },

    desc: {
      type: String,
      default: null,
    },
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
  .cases-list_item {
    width: 100%;
    max-width: 100%;
    height: 605px;
    max-height: 605px;
    position: relative;
    border-radius: 2px;
    overflow: hidden;
    text-decoration: none;

    > a {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 40px;
      box-sizing: border-box;
      text-decoration: none;

      @media screen and (max-width: 375px) {
        padding: 24px;
      }
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

        @media screen and (max-width: 375px) {
          font-size: 32px;
        }
      }

      p {
        max-width: 500px;
        height: 0;
        font-size: 16px;
        letter-spacing: -0.013em;
        line-height: 140%;
        font-weight: normal;
        overflow: hidden;
        transition: all 0.3s ease;
        transform: translateY(100px);
      }

      > a {
        height: 0;
        font-size: 16px;
        line-height: 100%;
        text-decoration: none;
        background-color: #fff;
        color: #000;
        padding: 0 8px;
        border-radius: 4px;
        overflow: hidden;
        transition: all 0.3s ease;
        transform: translateY(100px);

        @media screen and (max-width: 375px) {
          font-size: 14px;
        }
      }
    }

    &:hover {
      .cases-list_item-info {
        p {
          height: auto;
          margin: 16px 0;
          transform: none;
        }

        > a {
          height: auto;
          padding: 8px;
          transform: none;
        }
      }
    }
  }
</style>
