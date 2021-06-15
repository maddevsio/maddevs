<template>
  <div
    class="testimonial-block"
    :class="featured ? 'testimonial-block--featured' : null"
  >
    <span class="testimonial-block__mark">“</span>
    <div class="testimonial-block__content">
      <blockquote class="testimonial-block__text">
        {{ text }}
      </blockquote>
      <div class="testimonial-block__author">
        <div class="testimonial-block__author-image">
          <img
            :data-src="require(`@/assets/img/CooperationModels/png/customers/${author.image}.png`)"
            alt="Photo"
            class="img_lazy"
          >
        </div>
        <div>
          <p class="testimonial-block__author-name">
            {{ author.name }}
          </p>
          <span class="testimonial-block__author-position">{{ author.position }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialBlock',
  props: {
    featured: {
      type: Boolean,
      default: false,
    },

    text: {
      type: String,
      required: true,
    },

    author: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.testimonial-block {
  display: flex;
  &--featured {
    grid-column: auto / span 2;
    .testimonial-block__text {
      font-size: 40px;
      line-height: 51px;
      font-weight: 700;
    }
  }
  &__mark {
    transform: translateY(-10px);
    margin-left: -4px;
    padding-right: 4px;
    @include font('Poppins', 25px, 400);
    display: block;
    color: $text-color--quote-box;
  }
  &__text {
    font-weight: 500;
    margin: 0;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: -0.013em;
  }
  &__author {
    margin-top: 20px;
    display: flex;
    &-image {
      overflow: hidden;
      width: 42px;
      height: 42px;
      border-radius: 3px;
      background-color: $bgcolor--silver;
      margin-right: 11px;
      img {
        display: block;
        font-size: 12px;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &-name {
      font-weight: 500;
    }
    &-name,
    &-position {
      font-size: 15px;
      line-height: 23px;
      letter-spacing: -0.013em;
    }
  }

  @media screen and (max-width: 1450px) {
    &--featured {
      .testimonial-block {
        &__text {
          font-weight: 500;
          font-size: 24px;
          line-height: 29px;
        }
      }
    }
    &__mark {
      font-size: 20px;
    }
    &__text {
      font-size: 21px;
      line-height: 27px;
    }
  }

  @media screen and (max-width: 1024px) {
    &--featured {
      grid-column: auto / span 2;
      .testimonial-block {
        &__author {
          &-image {
            width: 42px;
            height: 42px;
          }
        }
      }
    }
    &__author {
      &-image {
        width: 26px;
        height: 26px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    grid-column: auto;
    &,
    &--featured {
      .testimonial-block {
        &__text {
          font-weight: 400;
          font-size: 21px;
          line-height: 27px;
        }
        &__mark {
          font-size: 16px;
        }
        &__author {
          margin-top: 14px;
          &-image {
            width: 26px;
            height: 26px;
          }
          &-name,
          &-position {
            font-size: 12px;
            line-height: 15px;
          }
        }
      }
    }
  }
}
</style>
