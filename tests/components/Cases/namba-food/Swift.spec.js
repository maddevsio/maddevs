import Swift from '@/components/Cases/nambafood/Swift.vue'
import { render, screen } from '@testing-library/vue'

const mocks = {
  getMediaFromS3: () => 'img.jpg',
}

const props = {
  isIphone: true,
}

describe('Swift component', () => {
  it('should render correctly', () => {
    const { container } = render(Swift, {
      mocks,
      props,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(Swift, {
      mocks,
    })

    expect(screen.getByText(/Swift admin panel — intelligent delivery control/i).className).toContain('case_title_h2')
  })

  it('should render images', () => {
    render(Swift, {
      mocks,
      props,
    })

    expect(screen.getByTestId('test-case_ios-map-video-image').src).toBe(global.location.href + mocks.getMediaFromS3())
  })
})
