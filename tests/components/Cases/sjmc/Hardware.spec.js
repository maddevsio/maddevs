import Hardware from '@/components/Cases/sjmc/Hardware.vue'
import { fireEvent, render, screen } from '@testing-library/vue'

const mocks = {
  getMediaFromS3: image => image,
}

describe('Hardware component', () => {
  window.HTMLMediaElement.prototype.load = () => { /* do nothing */ }
  window.HTMLMediaElement.prototype.play = () => { /* do nothing */ }
  window.HTMLMediaElement.prototype.pause = () => { /* do nothing */ }
  window.HTMLMediaElement.prototype.addTextTrack = () => { /* do nothing */ }

  it('should render correctly', () => {
    const { container } = render(Hardware, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(Hardware, {
      mocks,
    })

    expect(screen.getByText(/SJMC Hardware/i).className).toBeTruthy()
  })

  it('should work click pause handler', async () => {
    const { html } = render(Hardware, {
      mocks,
    })

    expect(html()).toContain('case_sjmc-phone-video-wrapper--on-pause')
    const element = screen.getByTestId('test-case_sjmc-phone')
    await fireEvent.click(element)
    expect(html()).not.toContain('case_sjmc-phone-video-wrapper--on-pause')
    await fireEvent.click(element)
  })
})
