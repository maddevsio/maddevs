import SJMCVideo from '@/components/Cases/SJMCVideo'
import { render } from '@testing-library/vue'

global.document.exitFullscreen = () => {}

describe('SJMCVideo component', () => {
  const VueVideoStub = {
    render: () => {},
    methods: {
      onended: () => {},
    },
  }

  beforeEach(() => {

    // wrapper.vm.$refs = {
    //   video: {
    //     paused: true,
    //     pause: jest.fn(),
    //     play: jest.fn(),
    //     onended: jest.fn(),
    //   },
    //   videoContainer: {
    //     requestFullscreen: jest.fn(),
    //   },
    // }
    // jest.spyOn(global.document, 'exitFullscreen').mockImplementation()
  })

  it('Picture component', () => {
    const { container } = render(SJMCVideo, {
      mocks: {
        $nuxt: {
          $on: jest.fn(),
        },
      },
      stubs: {
        SJMCVideo: VueVideoStub,
      },
    })
    expect(container).toMatchSnapshot()
  })
})
