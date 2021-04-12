import HardwareVideo from '@/components/Cases/sjmc/HardwareVideo.vue'
import { fireEvent, render, screen } from '@testing-library/vue'
import '../../../__mocks__/intersectionObserverMock'
import '../../../__mocks__/htmlMediaElement'

const mocks = {
  getMediaFromS3: image => image,
}

describe('HardwareVideo component', () => {
  it('should render correctly', () => {
    const { container } = render(HardwareVideo, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should toggle class for sound icon after click on elem', async () => {
    const { html } = render(HardwareVideo, {
      mocks,
    })

    expect(html()).toContain('case_sound-icon--sound-off')
    expect(html()).not.toContain('case_sound-icon--sound-on')

    const icon = screen.getByTestId('test-case_sound-icon')
    await fireEvent.click(icon)

    expect(html()).toContain('case_sound-icon--sound-on')
    expect(html()).not.toContain('case_sound-icon--sound-off')
  })
})
