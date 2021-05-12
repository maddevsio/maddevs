<template>
  <section
    id="careers-position"
    class="careers-position"
  >
    <PositionHeader />
    <div class="careers-position__body">
      <div class="container">
        <div class="careers-position__container">
          <div class="careers-position__content">
            <SlicesBlock
              v-if="slices.length"
              :slices="slices"
            />
            <EmployeesBenefits />
          </div>
          <div class="careers-position__content-divider" />
          <HRContact />
          <div class="careers-position__form">
            <PositionForm />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PositionHeader from '@/components/Careers/shared/PositionHeader'
import SlicesBlock from '@/components/slices'
import EmployeesBenefits from '@/components/Careers/shared/EmployeesBenefits'
import HRContact from '@/components/Careers/shared/HRContact'
import PositionForm from '@/components/Careers/shared/PositionForm'

import extractSchemaOrg from '@/helpers/extractSchemaOrg'
import formatDate from '@/helpers/formatDate'
import { buildHead } from '@/data/seo'

export default {
  name: 'CareersPosition',
  components: {
    PositionHeader,
    SlicesBlock,
    EmployeesBenefits,
    HRContact,
    PositionForm,
  },

  async asyncData({ store, params, error }) {
    let schemaOrgSnippet = ''
    const openGraphUrl = `${process.env.domain}/careers/${params.uid}/`

    try {
      const post = await store.dispatch('getVacancyPost', { type: 'vacancy', uid: params.uid })

      // Schema org snippet
      schemaOrgSnippet = extractSchemaOrg(post.data.schema_org_snippets)

      return {
        type: post.type,
        id: post.id,
        uid: post.uid,
        title: post.data.title,
        subtitle: post.data.subtitle,
        slices: post.data.body,
        tags: post.tags,
        date: formatDate(post.data.date),
        metaTitle: post.data.meta_title || post.data.title,
        metaDescription: post.data.meta_description,
        openGraphUrl,
        schemaOrgSnippet,
      }
    } catch (e) {
      // Returns error page
      return error({ statusCode: 404, message: 'Page not found' })
    }
  },

  data() {
    return {
      slices: [],
      openGraphUrl: '',
      schemaOrgSnippet: '',
    }
  },

  head() {
    return buildHead({
      title: this.metaTitle || '',
      metaTitle: this.metaTitle || '',
      description: this.metaDescription || '',
      image: '/favicon.ico',
      url: this.openGraphUrl,
      jsonLd: this.schemaOrgSnippet,
    })
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.careers-position {
  padding-top: 62px;
  /deep/ &__container {
    max-width: 924px;
  }
  &__body {
    padding: 60px 0 79px;
    background-color: $bgcolor--white-primary;
    color: $text-color--black-oil;
  }
  &__content-divider {
    display: block;
    height: 1px;
    margin-top: 60px;
    margin-bottom: 79px;
    background-color: $border-color--grey-20-percent;
  }
  &__form {
    margin-top: 40px;
  }
}
</style>
