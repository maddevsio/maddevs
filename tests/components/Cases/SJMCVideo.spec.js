import { mount, shallowMount } from '@vue/test-utils'
import SJMCVideo from '@/components/Cases/sjmc/SJMCVideo'

global.document.exitFullscreen = () => {}

const VueVideoStub = {
  render: () => {},
  methods: {
    onended: () => {},
  },
}

const ON_EMIT = jest.fn()

const mocks = {
  $nuxt: {
    $on: ON_EMIT,
  },
  $getMediaFromS3: () => 's3 image url',
}

const stubs = {
  SJMCVideo: VueVideoStub,
}

const MOCK_REFS = {
  video: {
    paused: false,
    pause: jest.fn(),
    play: jest.fn(),
    onended: jest.fn(),
  },
  videoContainer: {
    requestFullscreen: jest.fn(),
  },
}

describe('SJMCVideo component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(SJMCVideo, {
      mocks,
      stubs,
    })
    wrapper.vm.$refs = MOCK_REFS
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
    wrapper.vm.$refs.video.paused = true
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

  it('video.onended should correct work in mount method', () => {
    const EVENT_LISTENER = jest.fn((eventType, callback) => {
      callback()
    })
    document.addEventListener = EVENT_LISTENER
    document.fullscreenElement = null

    shallowMount(SJMCVideo, {
      mocks,
      stubs,
    })

    expect(EVENT_LISTENER).toHaveBeenCalledTimes(1)
  })
})
