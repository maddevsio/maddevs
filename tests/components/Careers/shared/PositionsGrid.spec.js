import PositionsGrid from '@/components/Careers/shared/PositionsGrid'
import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const stubs = ['PositionsGridItem', 'UnderlinedButton']

const localVue = createLocalVue()
localVue.use(Vuex)

const store = {
  getters: {
    vacancies: () => ([]),
    filteredVacancies: () => ([]),
    vacanciesCategory: () => ('Category'),
    vacanciesPage: () => 1,
  },
  actions: {
    getMoreVacancies: jest.fn(),
  },
}

describe('PositionsGrid component', () => {
  it('should render correctly', () => {
    const { container } = render(PositionsGrid, {
      stubs,
      store,
    })

    expect(container).toMatchSnapshot()
  })
})
