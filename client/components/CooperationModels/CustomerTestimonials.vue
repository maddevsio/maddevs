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
import { cooperationModelsTestimonials } from '@/data/customerTestimonials'

export default {
  name: 'CustomerTestimonials',
  components: {
    TestimonialBlock,
  },

  data() {
    return {
      testimonials: cooperationModelsTestimonials,
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
}
</style>
