import { mount } from '@vue/test-utils'
import ListNumberedItemBox from '@/components/Cases/ListNumberedItemBox'

describe('list numbered item box', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(ListNumberedItemBox, {
      slots: {
        default: 'Main Content',
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
    expect(wrapper.html()).toContain('Main Content')
  })
})
