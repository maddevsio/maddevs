import { mount } from '@vue/test-utils'
import Kaf from '../client/pages/case-studies/kaf'

describe('kaf', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Kaf, {
      mocks: {
        getMediaFromS3: () => 'img.jpg',
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
