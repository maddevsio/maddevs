import { render } from '@testing-library/vue'
import ScrollToPositionsButton from '@/components/Careers/shared/ScrollToPositionsButton'
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

describe('ScrollToPositionsButton component', () => {
  it('should render correctly', () => {
    const { container } = render(ScrollToPositionsButton, {
      store,
    })

    expect(container).toMatchSnapshot()
  })
})
