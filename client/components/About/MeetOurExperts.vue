<template>
  <section
    id="meet-our-experts"
    class="meet-our_experts"
  >
    <div class="container">
      <h3 class="meet-our_experts__main-title">
        Meet our experts
      </h3>
      <div class="meet-our_experts__experts-list row">
        <div
          v-for="expert in experts"
          :key="expert.name"
          class="meet-our_experts__expert-item col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6"
        >
          <UIImage
            :file-name="expert.image"
            :file-name-retina="`${expert.image}@2x`"
            :alt="expert.alt"
            width="295"
            height="401"
          />
          <div class="meet-our_experts__expert-bottom_content">
            <div class="meet-our_experts__expert-info">
              <div class="meet-our_experts__expert-name">
                {{ expert.name }}
              </div>
              <div class="meet-our_experts__expert-position">
                {{ expert.position }}
              </div>
            </div>
          </div>
          <img
            :data-src="require(`@/assets/img/Home/svg/team/linkedin.svg`)"
            width="24"
            height="24"
            alt="Linkedin"
            class="meet-our_experts__expert-linkedin-link img_lazy"
          >
          <a
            :href="expert.linkedin"
            rel="nofollow"
            target="_blank"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UIImage from '@/components/shared/UIImage'
import { experts } from '@/data/ourExperts'

export default {
  name: 'MeetOurExperts',
  components: {
    UIImage,
  },

  data() {
    return {
      experts,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.meet-our_experts {
  padding-bottom: 100px;
  background-color: $bgcolor--white-darken;

  @media screen and (max-width: 834px) {
    padding-bottom: 76px;
  }

  @media screen and (max-width: 578px) {
    padding-bottom: 67px;
  }

  &__main-title {
    @include h3_title;
    text-align: center;
    color: $text-color--black-lighter;
  }

  &__expert-item {
    position: relative;

    &:hover {
      a {
        border: 1px solid $border-color--red;
      }

      .meet-our_experts__expert {
        &-name,
        &-position {
          color: $text-color--white;
          background: $bgcolor--red;
        }
      }
    }

    a {
      transition: all 0.1s;
      position: absolute;
      top: 0;
      left: calc(var(--bs-gutter-x) / 2);
      width: calc(100% - var(--bs-gutter-x));
      height: calc(100% - 1px);
    }
  }

  &__expert-bottom_content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: absolute;
    bottom: 18px;
  }

  &__expert-info {
    margin-left: 16px;
  }

  &__expert-linkedin-link {
    width: 24px;
    height: 24px;
    display: block;
    position: absolute;
    top: 16px;
    right: 28px;
  }

  &__expert-name,
  &__expert-position {
    width: max-content;
    padding: 4px 8px;
    background-color: $bgcolor--white-darken;
    letter-spacing: -0.02em;
    transition: all 0.1s;
  }

  &__expert-name {
    font-size: 17px;
    font-family: 'Poppins-Bold', sans-serif;
    font-weight: 700;
  }

  &__expert-position {
    font-size: 14px;
    font-family: 'Poppins-Regular', sans-serif;
  }

  @media only screen and (max-width: 1180px) {
    &__expert-name,
    &__expert-position {
      padding: 3px 4px;
    }

    &__expert-name {
      font-size: 13px;
    }

    &__expert-position {
      font-size: 10px;
    }

    &__expert-info {
      margin-left: 12px;
    }

    &__expert-linkedin-link {
      width: 16px;
      height: 16px;
    }
  }

  @media only screen and (max-width: 1024px) {
    &__expert-name,
    &__expert-position {
      padding: 2px 3px;
    }

    &__expert-name {
      font-size: 10px;
    }

    &__expert-position {
      font-size: 9px;
    }

    &__expert-info {
      margin-left: 8px;
    }

    &__expert-linkedin-link {
      top: 8px;
      right: 20px;
    }
  }

  @media screen and (max-width: 767px) {
    &__expert-name {
      font-size: 13px;
    }

    &__expert-position {
      font-size: 11px;
    }
  }

  @media screen and (max-width: 385px) {
    &__expert-name {
      font-size: 11px;
    }

    &__expert-position {
      font-size: 9px;
    }
  }

  @media screen and (max-width: 374px) {
    &__expert-name {
      font-size: 9px;
    }

    &__expert-position {
      font-size: 8px;
    }
  }
}
</style>
