import { mount } from '@vue/test-utils'
import NdaPage from '@/pages/nda'

describe('nda page', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(NdaPage)
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
