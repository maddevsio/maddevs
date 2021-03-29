import { mount } from '@vue/test-utils'
import Kaf from '../client/pages/case-studies/kaf'

describe('kaf', () => {
  let wrapper
  const data = {
    headerLogo: {
      width: 387,
      height: 81.23,
      pictureFolder: 'kaf',
      fileName: 'kaf-logo',
      alt: '',
    },
  }

  beforeEach(() => {
    wrapper = mount(Kaf)
  })

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  // --------------------- //

  it('sets the correctly data', () => {
    expect(wrapper.vm.$data).toEqual(data)
  })
})