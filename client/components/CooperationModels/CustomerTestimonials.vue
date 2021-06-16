<template>
  <div class="customer-testimonials">
    <div class="container">
      <h2 class="customer-testimonials__title">
        Customer <br> Testimonials
      </h2>
      <div class="customer-testimonials__grid">
        <TestimonialBlock
          v-for="(testimonial, i) in testimonials"
          :key="testimonial.author && testimonial.author.name"
          :featured="i === 0"
          :text="testimonial.text"
          :author="testimonial.author"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TestimonialBlock from '@/components/CooperationModels/shared/TestimonialBlock'
import { testimonials } from '@/data/cooperationModels'

export default {
  name: 'CustomerTestimonials',
  components: {
    TestimonialBlock,
  },

  data() {
    return {
      testimonials,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.customer-testimonials {
  padding: 68px 0 119px;
  &__title {
    font-size: 60px;
    line-height: 65px;
    letter-spacing: -0.04em;

  }
  &__grid {
    margin-top: 49px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 80px;
  }

  @media screen and (max-width: 1200px) {
    &__grid {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 60px;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 39px 0 65px;
    &__grid {
      margin-top: 36px;
      grid-gap: 56px 35px;
    }
  }

  @media screen and (max-width: 680px) {
    padding: 39px 0 65px;
    &__title {
      font-size: 40px;
      line-height: 40px;
      letter-spacing: -0.05em;
    }
    &__grid {
      grid-template-columns: 1fr;
      grid-gap: 53px;
    }
  }
}
</style>
