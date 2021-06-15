<template>
  <div class="container">
    <div class="models-grid">
      <ModelCard
        v-for="(modelKey, i) in Object.keys(models)"
        :key="modelKey"
        :full="i === 2 || i === 3"
        :uid="modelKey"
        v-bind="models[modelKey]"
      />
    </div>
  </div>
</template>

<script>
import ModelCard from '@/components/CooperationModels/shared/ModelCard'
import { cooperationModels } from '@/data/cooperationModels'

export default {
  name: 'ModelsGrid',
  components: {
    ModelCard,
  },

  data() {
    return {
      models: cooperationModels,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.models-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 630px) 600px 651px;
  grid-gap: 48px;
}
</style>
