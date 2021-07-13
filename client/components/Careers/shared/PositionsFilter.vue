<template>
  <ul class="positions-filter">
    <li
      v-for="category in vacancyCategories"
      :key="category.title"
      class="positions-filter__item"
    >
      <input
        :id="category.title"
        type="radio"
        name="tag"
        :value="category.title"
        :checked="vacanciesCategory === category.title"
        @click="handleFilterChange"
      >
      <label :for="category.title">{{ category.title }}</label>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PositionsFilter',
  computed: {
    ...mapGetters(['vacancyCategories', 'vacanciesCategory']),
  },

  methods: {
    ...mapActions(['changeVacanciesCategory']),

    handleFilterChange(event) {
      this.changeVacanciesCategory(event.target.value !== this.vacanciesCategory ? event.target.value : null)
    },
  },
}
</script>

<style lang="scss" scoped>
.positions-filter {
  display: flex;
  flex-flow: row wrap;
  &__item {
    margin-right: 8px;
    margin-bottom: 8px;
    &:last-child {
      margin-right: 0;
    }
    input[type="radio"] {
      display: none;
    }
    label {
      display: block;
      cursor: pointer;
      box-shadow: none;
      padding: 12px 20px;
      letter-spacing: -0.013em;
      line-height: 19px;
      color: $text-color--black-oil;
      background-color: $bgcolor--silver;
      border-radius: 2px;
      transition: 0.2s;
    }
    input[type="radio"]:checked + label {
      color: $text-color--red;
    }
  }
}
</style>
