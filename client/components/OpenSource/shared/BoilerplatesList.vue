<template>
  <section>
    <ul class="boilerplates-list">
      <BoilerplatesListItem
        v-for="item of boilerplatesList"
        :key="item.name"
        :v-bind="item"
      />
    </ul>
  </section>
</template>

<script>
import BoilerplatesListItem from '@/components/OpenSource/shared/BoilerplatesListItem'
import { boilerplatesList } from '@/data/boilerplatesList'

export default {
  name: 'FeaturedProjectsList',
  components: {
    BoilerplatesListItem,
  },

  data() {
    return {
      boilerplatesList,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

</style>
