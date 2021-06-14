<template>
  <main class="main">
    <Model v-bind="model" />
  </main>
</template>

<script>
import Model from '@/components/CooperationModels/Model'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'
import { cooperationModels } from '@/data/cooperationModels'

export default {
  name: 'CooperationModel',
  components: {
    Model,
  },

  mixins: [initLazyLoadMixin],

  asyncData({ params, error }) {
    const openGraphUrl = `${process.env.domain}/cooperation-models/${params.uid}/`
    const model = cooperationModels[params.uid]

    if (model) {
      return {
        model,
        openGraphUrl,
      }
    }
    return error({ statusCode: 404, message: 'Page not found' })
  },

  mounted() {
    this.$lazyLoad.init()
  },
}
</script>
