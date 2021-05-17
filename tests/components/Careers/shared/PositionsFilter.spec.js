import PositionsFilter from '@/components/Careers/shared/PositionsFilter'
import OpenPositions from '@/components/Careers/OpenPositions'
import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = {
  getters: {
    vacanciesCategory: () => ('category1'),
    vacancyCategories: () => (['category1', 'category2']),
  },
  actions: {
    changeVacanciesCategory: jest.fn(),
  },
}

describe('PositionsFilter component', () => {
  it('should render correctly', () => {
    const { container } = render(PositionsFilter, {
      parentComponent: OpenPositions,
      store,
    })

    expect(container).toMatchSnapshot()
  })
})
