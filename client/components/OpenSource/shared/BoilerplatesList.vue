<template>
  <section>
    <ul class="boilerplates-list">
      <BoilerplatesListItem
        v-for="item of boilerplatesList"
        :key="item.id"
        v-bind="item"
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

.boilerplates-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 48px;

  @media screen and (max-width: 1260px) {
    grid-gap: 24px;
  }

  @media screen and (max-width: 1090px) {
    grid-template-columns: 1fr;
  }
}
</style>
