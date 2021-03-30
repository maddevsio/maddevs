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

    supportedGadgets: [
      {
        title: 'Laptops',
        width: 735,
        height: 449,
        fileName: 'macbook-pro',
        alt: 'Laptops',
        cardColor: 'purple-medium',
      },
      {
        title: 'Smartphones',
        width: 312,
        height: 627,
        fileName: 'iphonex',
        alt: 'Smartphones',
        cardColor: 'black-primary-bg',
      },
      {
        title: 'Tablets',
        width: 518,
        height: 374,
        fileName: 'ipad-pro',
        alt: 'Tablets',
        cardColor: 'purple-dark',
      },
    ],
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
