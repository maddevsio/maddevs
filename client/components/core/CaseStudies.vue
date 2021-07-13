<template>
  <section
    id="case-studies"
    :class="{ 'case-studies--projects': type === 'projects' }"
    class="case-studies"
  >
    <div class="container">
      <div>
        <h2
          :class="`case-studies__main-title-${type}`"
          class="case-studies__main-title"
        >
          Case <br v-if="type === 'projects'">
          Studies
        </h2>
        <div
          v-if="type === 'projects'"
          class="case-studies__fire-icon"
        />
      </div>
    </div>
    <CasesList :limit="4" />
  </section>
</template>

<script>
import CasesList from '@/components/Cases/CasesList'
import { preview as projects } from '@/data/caseStudies'

export default {
  name: 'CaseStudies',
  components: {
    CasesList,
  },

  props: {
    type: {
      type: String,
      required: true,
      default: 'index',
    },
  },

  data() {
    return {
      projects,
    }
  },
}
</script>

<style lang="scss" scoped>
.case-studies {
  &--projects .projects-flame-background {
    position: absolute;
  }

  &__main-title-projects {
    text-align: left !important;

    br {
      display: none;
    }

    @media screen and (max-width: 420px) {
      br {
        display: block;
      }
    }
  }

  .container {
    position: relative;
    padding-bottom: 0;
  }

  &__main-title {
    @include h2-title;
    padding-bottom: 30px;
    color: $text-color--white;
    text-align: left;
    margin: auto;
    display: block;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;

    .single-project {
      &:nth-child(2) {
        /deep/ .single-project__background {
          width: auto;
        }
      }

      &:last-child {
        /deep/ .single-project__background {
          width: auto;
        }

        &::after {
          content: '';
          position: absolute;
          background-image: url('../../assets/img/Studies/jpg/godeeSecondaryBg.jpg');
          background-repeat: no-repeat;
          width: 100%;
          height: 100%;
          background-size: contain;
          z-index: -44;
          top: 0;
          right: 0;
        }
      }
    }

    @media screen and (max-width: 608px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  // Projects page, flame icon styles
  &__fire-icon {
    display: block;
    width: 407px;
    height: 661px;
    position: absolute;
    top: -366px;
    right: 100px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('data:image/svg+xml;charset=UTF-8,\ <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 407 661"><path d="M317.45 420.96c11.65 2.16 21.8.97 30.1-2.89 8.31-3.86 14.7-10.37 18.86-18.72 7.74-15.54 7.74-37.42-1.79-60.7 7.33 8.18 13.77 18.79 18.47 29.39 5.5 12.44 8.52 24.7 7.8 32.89h0c-1.88 23.25-18.51 38.5-33.33 52.09l-1.67 1.53c-7.53 6.92-14.47 13.52-18.2 20.59a22.8 22.8 0 00-2.86 11.21c.09 3.95 1.33 8.07 3.97 12.47 2.26 3.78 5.33 6.17 8.78 7.2 3.45 1.01 7.2.65 10.8-.91 5.66-2.46 11-7.87 14.47-15.7-3.58 48.78-20.78 84.4-46.15 110.06-26.63 26.93-62.33 42.95-100.97 51.6-76.14 17.03-163.41 5.35-214.15-7.73 31.52-19.07 43.5-34.22 50.26-50.3 2.76-6.58 4.64-13.3 6.64-20.43l1.48-5.23c2.62-9.13 5.82-19.08 11.5-30.51h0c10.02-20.22 21.6-33.92 32.26-46.52 4-4.72 7.86-9.3 11.45-13.99 6.59-8.6 12.24-17.58 16.08-28.67 3.59-10.38 5.56-22.57 5.23-37.95 9.08 12.2 14.1 22.39 16.56 31.22a51.95 51.95 0 01.96 24.66c-.96 4.95-2.42 9.55-3.89 14.16-.71 2.25-1.43 4.5-2.08 6.8-1.99 6.93-3.38 14.1-2.3 22.27h0c1.17 8.73 5.93 20.38 14.89 28.05 9.04 7.73 22.24 11.31 39.97 4 11.22-4.57 20.4-12.4 25.84-24.53 5.43-12.12 7.1-28.42 3.51-49.9-4.16-24.97 1.04-57.05 14.6-84.6h0c4.76-9.78 10.09-18.87 15.29-27.75 2.23-3.8 4.43-7.56 6.56-11.32 7.06-12.5 13.24-24.92 16.33-38.43 5.93-25.94.42-55.6-31.1-97.35 32.07 24.47 51.49 49.35 59.62 74.26 8.6 26.35 4.63 52.88-10.56 79.24h0c-8.11 14.12-13 27.91-12.6 38.84.21 5.49 1.75 10.31 4.94 14.07 3.2 3.76 7.96 6.35 14.43 7.53zm0 0s0 0 0 0l.18-.99-.18.99s0 0 0 0zm78.02-278.22c9.66 19.05 11.77 34 9.9 46.91-2.1 14.52-9.23 26.6-16.73 39.26l-.01.03c-12.15 20.52-25.06 42.32-17.46 77.55-34.62-29.51-35.52-67.43-24.2-83.42 6.15-8.55 14-15.26 21.72-21.85l.08-.07c9.06-7.73 17.97-15.33 23.22-25.46 4.5-8.67 6.3-19.1 3.48-32.95z" fill="rgb(17, 18, 19)" stroke="rgb(236, 28, 36)" stroke-width="2"/><path d="M333.02 131.84h0c-3.6 15.52-3.44 37.07 3.6 54.02-6.64-4.03-16.3-10.7-23.97-19.87-8.76-10.5-14.83-24.19-10.83-40.97 2.49-10.22 8.42-18.71 16.02-26.29 7.61-7.58 16.84-14.19 25.88-20.65l.04-.03c8.03-5.75 15.91-11.39 22.23-17.46 6.33-6.08 11.19-12.68 13.03-20.36h0c2.16-9.38 3.62-23.36-1.98-37.37a31.3 31.3 0 014.94 5.51 57.36 57.36 0 016.57 12.28c3.63 9.2 5.35 19.6 3.42 27.66h0c-4.37 18.58-16.9 30.26-29.6 42.05l-.1.08c-12.38 11.5-24.92 23.15-29.25 41.4zM81 374.74c-4.12 14.78 6.67 42.6 40.03 55.67-14.87-24.37-11.06-44.13-7.5-62.6l1.08-5.7c1.88-10.4 3.05-20.44.21-30.95-2.41-8.94-7.76-18.3-18.22-28.49 3.35 5.82 5.09 11.18 5.64 16.23.75 6.95-.75 13.24-3.27 19.26-2.05 4.9-4.8 9.67-7.56 14.48l-1.87 3.26c-3.37 5.96-6.59 12.09-8.55 18.84z" fill="rgb(236, 28, 36)" stroke="rgb(236, 28, 36)" stroke-width="2"/><path d="M65.67 634.34c195.32 27.7 274.62-56.25 269.58-103.75-5.87-55.83-39.02-39.37-45.94-102.28-15.53 49.37 10.7 66.45 15.31 88.74 5.04 24.17-2.94 35.62-20.56 33.33-13.21-1.66-20.56-27.5 1.05-44.58-52.45-1.04-18.67 60.42-98.6 61.04-26.23.2-59.8-29.17-48.04-65.2a126.99 126.99 0 00-42.8 68.95c-5.67 26.25-15.32 50.41-30 63.75z" fill="rgb(236, 28, 36)"/><path d="M162.5 300.02c-12.38-26.9-3.01-61.38 19.55-87.07-10.36 22.33-12.75 42.59-9.45 57.78 3.61 16.58 14.07 27.26 28.42 27.58h.02c3.14 0 5.85-.71 8.16-2.1 2.3-1.38 4.13-3.4 5.58-5.9 2.89-5 4.29-12.06 4.76-20.38.94-16.39-1.68-38.25-4.36-60.51l-.14-1.17s0 0 0 0c-5.22-45.16 17.07-81.28 46.99-91.25-17.23 11.38-24.19 28.18-25.83 47.28-1.82 21.17 2.9 45.29 7.36 68.16l.02.09c4.3 22 8.34 42.78 6.4 59.04-2.63 21.76-13.44 41.16-24.45 60.88l-.04.08c-10.1 18.08-20.34 36.44-24.2 56.94-3.62 19.11-1.69 40.02 10.87 64.29-15.08-15.11-35.3-42.18-26.5-82.49 3.05-13.98 3.03-24.41-.38-36.94-3.38-12.43-10.1-26.92-20.31-48.99l-.05-.1v-.01l-2.41-5.21z" fill="rgb(17, 18, 19)" stroke="rgb(236, 28, 36)" stroke-width="2"/></svg>');

    @media screen and (max-width: 1320px) {
      width: 340px;
      height: 600px;
      top: -297px;
    }

    @media screen and (max-width: 991px) {
      width: 300px;
      height: 560px;
      top: -253px;
    }

    @media screen and (max-width: 970px) {
      width: 250px;
      height: 510px;
      top: -200px;
    }

    @media screen and (max-width: 834px) {
      top: -255px;
      right: 95px;
    }

    @media screen and (max-width: 768px) {
      top: -255px;
      right: 65px;
    }

    @media screen and (max-width: 690px) {
      width: 240px;
      height: 470px;
      top: -229px;
      right: 55px;
    }

    @media screen and (max-width: 578px) {
      top: -254px;
    }

    @media screen and (max-width: 530px) {
      width: 203px;
      height: 400px;
      top: -197px;
      right: 40px;
    }

    @media screen and (max-width: 480px) {
      width: 145px;
      height: 300px;
      top: -112px;
    }

    @media screen and (max-width: 440px) {
      right: 25px;
    }

    @media screen and (max-width: 420px) {
      top: -70px;
      right: 35px;
    }

    @media screen and (max-width: 355px) {
      right: 30px;
    }
  }
}
</style>
