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
          />
          <div class="careers-position__benefits">
            <h2 class="careers-position__benefits-title">
              Employees benefits
            </h2>
            <EmployeesBenefits />
          </div>
        </div>
        <div
          id="careers-position-form"
          class="careers-position__contacts"
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
import EmployeesBenefits from '@/components/Careers/shared/EmployeesBenefits'
import HRContactCard from '@/components/Careers/shared/HRContactCard'
import PositionForm from '@/components/Careers/shared/PositionForm'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'
import { buildHead } from '@/data/seo'

export default {
  name: 'CareersPosition',
  components: {
    PositionHeader,
    SlicesBlock,
    EmployeesBenefits,
    HRContactCard,
    PositionForm,
  },

  mixins: [initLazyLoadMixin],

  async asyncData({ store, params, error }) {
    const openGraphUrl = `${process.env.domain}/careers/${params.uid}/`
    try {
      await store.dispatch('getVacancyPost', params.uid)
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
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

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
