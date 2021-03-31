import { mount } from '@vue/test-utils'
import ListNumberedBox from '@/components/Cases/ListNumberedBox'

describe('list numbered box', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(ListNumberedBox, {
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
