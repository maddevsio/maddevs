import Main from '@/components/Careers/Main'
import { render } from '@testing-library/vue'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const stubs = ['Banner', 'ProjectsCountries', 'Benefits', 'KeyMetrics', 'EmployeesBenefits', 'OpenPositions', 'CTABanner', 'ScrollToPositionsLink']

const localVue = createLocalVue()
localVue.use(Vuex)

const store = {
  actions: {
    getCareersHome: jest.fn(),
  },
}

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      stubs,
      store,
    })

    expect(container).toMatchSnapshot()
  })
})
