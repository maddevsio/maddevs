<template>
  <section id="why-us" class="why-us">
    <div class="container">
      <div class="why-us__title-wrap">
        <h2 class="why-us__main-title">Why us?</h2>
      </div>
      <div class="why-us__statistics-wrap">
        <div class="why-us-customer-rates">
          <div class="why-us__statistics-title">Fantastic customer satisfaction rates:</div>
          <div class="why-us__rates-list">
            <div class="why-us__rates-item">
              <div class="why-us__rates-percnet">92%</div>
              <div class="why-us__rates-item_description">
                recommend us to others.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CustomerTestimonialMobileSlider from '@/components/About/CustomerTestimonialMobileSlider';

export default {
  name: 'CustomerTestimonials',
  components: {
    CustomerTestimonialMobileSlider
  },
  data() {
    return {
      testimonials: [
        {
          customerName: 'Atif Mahmud,',
          customerCountry: 'The UK',
          customerProject: 'teacherly',
          customerImageName: 'atif',
          testimonialText: 'Being a small team without a project manager we have never regretted of the collaboration with Mad Devs. The team shared the product ownership and responsibility for its development.'
        },
        {
          customerName: 'Daniel Vartanov,',
          customerCountry: 'The UK',
          customerProject: 'veeqo',
          customerImageName: 'daniel',
          testimonialText: 'We would never had a better deal on the labour market on our own. Buying from Mad Devs was our best way of finding a top-notch DevOps engineer.'
        },
        {
          customerName: 'Stefan Streichsbier,',
          customerCountry: 'Singapore',
          customerProject: 'guardrails',
          customerImageName: 'stefan',
          testimonialText: 'I am very happy with Mad Devs services so far. Looking forward to a long and fruitful partnership.'
        }
      ],
      pageWasLoaded: false
    };
  },
  mounted() {
    this.pageWasLoaded = true;
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
</style>
