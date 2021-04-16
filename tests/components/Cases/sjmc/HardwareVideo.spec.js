import HardwareVideo from '@/components/Cases/sjmc/HardwareVideo.vue'
import { render, screen, fireEvent } from '@testing-library/vue'
import '../../../__mocks__/intersectionObserverMock'
import '../../../__mocks__/htmlMediaElement'

const mocks = {
  $getMediaFromS3: image => image,
}

describe('HardwareVideo component', () => {
  it('should render correctly', () => {
    const { container } = render(HardwareVideo, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should toggle video muted value', async () => {
    render(HardwareVideo, {
      mocks,
    })

    const video = screen.getByTestId('test-case_video')
    const soundControl = screen.getByTestId('test-case_sound-control')

    await fireEvent.click(soundControl)
    expect(video.muted).toEqual(false)

    await fireEvent.click(soundControl)
    expect(video.muted).toEqual(true)
  })
})
