import { mount } from '@vue/test-utils'
import CardGoDeePreview from '@/components/Cases/cards/godee/CardGoDeePreview'

describe('cardGoDeePreview', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(CardGoDeePreview, {
      propsData: {
        pictureFolder: 'godee',
        fileName: 'application-for-passengers-card',
        fileExtension: 'png',
        mobileImage: false,
        mobileImageName: '',
        alt: 'GoDee: bus transit app for passengers',
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
})
