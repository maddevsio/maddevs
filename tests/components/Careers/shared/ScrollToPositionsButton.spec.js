import { render } from '@testing-library/vue'
import ScrollToPositionsLink from '@/components/Careers/shared/ScrollToPositionsLink'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = {
  getters: {
    vacancies: () => ([]),
    vacanciesLoaded: () => true,
  },
}

describe('ScrollToPositionsLink component', () => {
  it('should render correctly', () => {
    const { container } = render(ScrollToPositionsLink, {
      store,
    })

    expect(container).toMatchSnapshot()
  })
})
