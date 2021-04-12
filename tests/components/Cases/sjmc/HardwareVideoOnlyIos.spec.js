import HardwareVideoOnlyIos from '@/components/Cases/sjmc/HardwareVideoOnlyIos.vue'
import { fireEvent, render, screen } from '@testing-library/vue'
import '../../../__mocks__/intersectionObserverMock'
import '../../../__mocks__/htmlMediaElement'

const mocks = {
  getMediaFromS3: image => image,
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
})
