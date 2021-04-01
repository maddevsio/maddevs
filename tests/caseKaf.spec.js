import { mount } from '@vue/test-utils'
import yourcast from '../client/pages/case-studies/yourcast'

describe('yourcast', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(yourcast)
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
