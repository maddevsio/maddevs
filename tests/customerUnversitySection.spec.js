import { mount } from '@vue/test-utils'
import CustomerUniversitySection from '../client/components/Blog/CustomerUniversitySection'

describe('customer University section component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(CustomerUniversitySection, {
      stubs: ['prismic-image'],
      mocks: {
        $prismic: {
          asText: () => '',
        },
      },
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
