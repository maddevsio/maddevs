import { mount } from '@vue/test-utils'
import QuickProjectStart from '@/components/About/QuickProjectStart'

describe('QuickProjectStart', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(QuickProjectStart)
  })

  it('correctly length of elements in DOM', () => {
    const contentItems = wrapper.findAll('.quick-project-start__list-item')
    expect(contentItems).toHaveLength(5)
  })

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  // --------------------- //
})
