import { mount } from '@vue/test-utils'
import SirJohnMonashCentre from '../client/pages/case-studies/sir-john-monash-centre'
import './__mocks__/intersectionObserverMock'

global.document.exitFullscreen = () => {}

describe('sirJohnMonashCentre', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(SirJohnMonashCentre, {
      mocks: {
        $nuxt: {
          $on: jest.fn(),
        },
        getMediaFromS3: () => 's3 image url',
      },
      stubs: ['NuxtLink'],
    })
    wrapper.vm.$refs = {
      video: {
        paused: true,
        play: jest.fn(),
        pause: jest.fn(),
        onended: jest.fn(),
      },
      videoWrap: {
        classList: {
          remove: jest.fn(),
          add: jest.fn(),
        },
      },
    }
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
