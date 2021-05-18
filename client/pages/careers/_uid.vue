<template>
  <section
    id="careers-position"
    class="careers-position"
  >
    <PositionHeader />
    <div class="container">
      <div class="careers-position__container">
        <div class="careers-position__info">
          <SlicesBlock
            v-if="vacancy.slices && vacancy.slices.length"
            :slices="vacancy.slices"
            data-aos="fade"
            data-aos-duration="800"
          />
          <div class="careers-position__benefits">
            <h2
              class="careers-position__benefits-title"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              Employees benefits
            </h2>
            <div
              class="careers-position__employees-benefits"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <BenefitCard
                v-for="benefit in benefits"
                v-bind="benefit"
                :key="benefit.title"
              />
            </div>
          </div>
        </div>
        <div
          id="careers-position-form"
          class="careers-position__contacts"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <HRContactCard />
          <div class="careers-position__form">
            <PositionForm :position="vacancy.position" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import PositionHeader from '@/components/Careers/shared/PositionHeader'
import SlicesBlock from '@/components/slices'
import BenefitCard from '@/components/Careers/shared/BenefitCard'
import HRContactCard from '@/components/Careers/shared/HRContactCard'
import PositionForm from '@/components/Careers/shared/PositionForm'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'
import { buildHead } from '@/data/seo'
import { employeesBenefits as benefits } from '@/data/benefits'

import featureFlag from '@/featureFlags/featureFlag'
import animateOnScrollMixin from '@/mixins/animateOnScrollMixin'

export default {
  name: 'CareersPosition',
  components: {
    PositionHeader,
    SlicesBlock,
    BenefitCard,
    HRContactCard,
    PositionForm,
  },

  mixins: [initLazyLoadMixin, animateOnScrollMixin()],

  async asyncData({ store, params, error }) {
    const openGraphUrl = `${process.env.domain}/careers/${params.uid}/`
    const showPage = featureFlag('careersPosition')

    if (!showPage) return error({ statusCode: 404, message: 'Page not found' })

    try {
      await store.dispatch('getVacancy', params.uid)
      return {
        openGraphUrl,
      }
    } catch (e) {
      // Returns error page
      return error({ statusCode: 404, message: 'Page not found' })
    }
  },

  data() {
    return {
      openGraphUrl: '',
      benefits,
    }
  },

  head() {
    return buildHead({
      title: this.vacancy.metaTitle || this.vacancy.title || '',
      metaTitle: this.vacancy.metaTitle || this.vacancy.title || '',
      description: this.vacancy.metaDescription || '',
      jsonLd: this.vacancy.schemaOrgSnippet,
      image: '/favicon.ico',
      url: this.openGraphUrl,
    })
  },

  computed: {
    ...mapGetters(['vacancy']),
  },

  mounted() {
    this.$lazyLoad.init()
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

.careers-position {
  padding-bottom: 79px;
  background-color: $bgcolor--white-primary;
  color: $text-color--black-oil;
  /deep/ &__container {
    max-width: 924px;
  }
  &__benefits {
    margin-top: 62px;
    &-title {
      @include font('Poppins', 32px, 600);
      line-height: 43px;
      letter-spacing: -0.04em;
      margin-bottom: 25px;
    }
  }
  &__contacts {
    margin-top: 60px;
    padding-top: 79px;
    border-top: 1px solid $border-color--grey-20-percent;
  }
  &__form {
    margin-top: 45px;
  }

  &__employees-benefits {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 8px 10px;
  }

  @media screen and (max-width: 1024px) {
    /deep/ &__container {
      max-width: 100%;
    }
    &__benefits-title {
      font-size: 26px;
      line-height: 33px;
    }
    &__contacts {
      margin-top: 70px;
      padding-top: 70px;
    }
    &__form {
      margin-top: 39px;
    }
  }

  @media screen and (max-width: 768px) {
    &__benefits {
      .employees-benefits {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  @media screen and (max-width: 576px) {
    &__contacts {
      margin-top: 40px;
      padding-top: 40px;
    }
    &__form {
      margin-top: 26px;
    }
  }
}
</style>
