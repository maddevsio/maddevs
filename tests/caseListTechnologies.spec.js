import { mount } from '@vue/test-utils'
import ListTechnologies from '@/components/Cases/ListTechnologies'

describe('list technologies', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(ListTechnologies, {
      slots: {
        default: '<li>List item</li>',
      },
    })
  })

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  // --------------------- //

  it('should have correct data in slot', () => {
    expect(wrapper.html()).toContain('<li>List item</li>')
  })
})
