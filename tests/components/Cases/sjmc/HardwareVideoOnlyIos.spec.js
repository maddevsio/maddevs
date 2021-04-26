import HardwareVideoOnlyIos from '@/components/Cases/sjmc/HardwareVideoOnlyIos.vue'
import { fireEvent, render, screen } from '@testing-library/vue'
import '../../../__mocks__/intersectionObserverMock'
import '../../../__mocks__/htmlMediaElement'
import { shallowMount } from '@vue/test-utils'

const mocks = {
  $getMediaFromS3: image => image,
}

describe('HardwareVideoOnlyIos component', () => {
  it('should render correctly', () => {
    const { container } = render(HardwareVideoOnlyIos, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should work click pause handler', async () => {
    const { html } = render(HardwareVideoOnlyIos, {
      mocks,
    })

    expect(html()).toContain('case_video-wrapper--paused')
    const element = screen.getByTestId('test-case_sjmc-phone')
    await fireEvent.click(element)
    expect(html()).not.toContain('case_video-wrapper--paused')
    await fireEvent.click(element)
  })

  it('should correct call onEndedHandler method', () => {
    const callObject = {
      $refs: {
        videoWrap: {
          classList: {
            add: jest.fn(),
          },
        },
      },
    }

    const wrapper = shallowMount(HardwareVideoOnlyIos, {
      mocks,
    })

    wrapper.vm.$options.methods.onEndedHandler.call(callObject)
    expect(callObject.$refs.videoWrap.classList.add).toHaveBeenCalledWith('case_video-wrapper--paused')
  })

  it('should correct call toggleVideoState method if video enabled', () => {
    const callObject = {
      $refs: {
        video: {
          paused: false,
          pause: jest.fn(),
        },
        videoWrap: {
          classList: {
            add: jest.fn(),
          },
        },
      },
    }

    const wrapper = shallowMount(HardwareVideoOnlyIos, {
      mocks,
    })

    wrapper.vm.$options.methods.toggleVideoState.call(callObject)
    expect(callObject.$refs.videoWrap.classList.add).toHaveBeenCalledWith('case_video-wrapper--paused')
    expect(callObject.$refs.video.pause).toHaveBeenCalledTimes(1)
  })
})
