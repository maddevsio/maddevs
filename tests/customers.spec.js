import { mount } from '@vue/test-utils'
import Customers from '@/components/Projects/Customers'

describe('customers component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Customers)
  })

  it('is Vue\'s instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
