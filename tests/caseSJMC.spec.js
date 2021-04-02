import { mount } from '@vue/test-utils'
import SirJohnMonashCentre from '../client/pages/case-studies/sir-john-monash-centre'

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
      stubs: ['nuxt-link', 'NuxtLink'],
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

  it('videoSetState function should call play and remove functions', () => {
    const spyPlay = jest.spyOn(wrapper.vm.$refs.video, 'play')
    const spyRemove = jest.spyOn(wrapper.vm.$refs.videoWrap.classList, 'remove')
    wrapper.vm.videoSetState()
    expect(spyPlay && spyRemove).toHaveBeenCalledWith('case_sjmc-phone-video-wrapper--on-pause')
    spyPlay.mockReset()
    spyRemove.mockReset()
  })

  it('videoSetState function should call pause and add functions', () => {
    wrapper.vm.$refs.video.paused = false

    const spyPause = jest.spyOn(wrapper.vm.$refs.video, 'pause')
    const spyAdd = jest.spyOn(wrapper.vm.$refs.videoWrap.classList, 'add')
    wrapper.vm.videoSetState()
    expect(spyPause && spyAdd).toHaveBeenCalledWith('case_sjmc-phone-video-wrapper--on-pause')
    spyPause.mockReset()
    spyAdd.mockReset()
  })
})
