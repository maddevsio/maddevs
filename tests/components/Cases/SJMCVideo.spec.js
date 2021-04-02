import { mount } from '@vue/test-utils'
import SJMCVideo from '@/components/Cases/sjmc/SJMCVideo'

global.document.exitFullscreen = () => {}

describe('SJMCVideo component', () => {
  let wrapper
  const VueVideoStub = {
    render: () => {},
    methods: {
      onended: () => {},
    },
  }

  beforeEach(() => {
    wrapper = mount(SJMCVideo, {
      mocks: {
        $nuxt: {
          $on: jest.fn(),
        },
        getMediaFromS3: () => 's3 image url',
      },
      stubs: {
        SJMCVideo: VueVideoStub,
      },
    })
    wrapper.vm.$refs = {
      video: {
        paused: true,
        pause: jest.fn(),
        play: jest.fn(),
        onended: jest.fn(),
      },
      videoContainer: {
        requestFullscreen: jest.fn(),
      },
    }
    jest.spyOn(global.document, 'exitFullscreen').mockImplementation()
  })

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  // --------------------- //

  it('videoSetState function should call play', () => {
    const spyPlay = jest.spyOn(wrapper.vm.$refs.video, 'play')
    wrapper.vm.videoSetState()
    expect(spyPlay).toHaveBeenCalledWith()
    spyPlay.mockReset()
  })

  it('videoSetState function should call pause', () => {
    wrapper.vm.$refs.video.paused = false
    const spyPause = jest.spyOn(wrapper.vm.$refs.video, 'pause')
    wrapper.vm.videoSetState()
    expect(spyPause).toHaveBeenCalledWith()
    spyPause.mockReset()
  })

  it('exitFullscreen should change fullscreenModIsActive value', () => {
    wrapper.vm.$data.fullscreenModIsActive = true
    wrapper.vm.exitFullscreen()
    expect(wrapper.vm.$data.fullscreenModIsActive).toEqual(false)
  })

  it('emitHandler should change fullscreenModIsActive value', () => {
    const spyRequestFullscreen = jest.spyOn(wrapper.vm.$refs.videoContainer, 'requestFullscreen')
    wrapper.vm.$data.fullscreenModIsActive = false
    wrapper.vm.emitHandler()
    expect(spyRequestFullscreen).toHaveBeenCalledWith()
    expect(wrapper.vm.$data.fullscreenModIsActive).toEqual(true)
    spyRequestFullscreen.mockReset()
  })
})
