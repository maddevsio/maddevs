<template>
  <div>
    <ul class="positions-grid">
      <PositionsGridItem
        v-for="vacancy in vacanciesToShow"
        :key="vacancy.uid"
        v-bind="vacancy"
      />
    </ul>
    <div class="positions-load-button">
      <UnderlinedButton
        v-if="totalPages > vacanciesPage"
        type="button"
        @click="getMoreVacancies"
      >
        See more positions
      </UnderlinedButton>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PositionsGridItem from '@/components/Careers/shared/PositionsGridItem'
import UnderlinedButton from '@/components/Careers/shared/UnderlinedButton'

export default {
  name: 'PositionsGrid',
  components: {
    PositionsGridItem,
    UnderlinedButton,
  },

  data() {
    return {
      pageSize: 6,
    }
  },

  computed: {
    ...mapGetters(['vacancies', 'filteredVacancies', 'vacanciesCategory', 'vacanciesPage']),

    vacanciesToShow() {
      if (this.vacanciesCategory) {
        return this.filteredVacancies.slice(0, this.pageSize * this.vacanciesPage)
      }
      return this.vacancies.slice(0, this.pageSize * this.vacanciesPage)
    },

    totalPages() {
      if (this.vacanciesCategory) {
        return Math.ceil(this.filteredVacancies.length / this.pageSize)
      }
      return Math.ceil(this.vacancies.length / this.pageSize)
    },
  },

  methods: {
    ...mapActions(['getMoreVacancies']),
  },
}
</script>

<style lang="scss" scoped>
.positions-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 0.5px;
  margin-left: 0.5px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.positions-load-button {
  display: flex;
  justify-content: center;
  margin: 35px auto 0;

  @media screen and (max-width: 768px) {
    margin: 26px auto 0;
  }
}
</style>
