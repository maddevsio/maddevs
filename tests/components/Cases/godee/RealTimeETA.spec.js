import RealTimeETA from '@/components/Cases/godee/RealTimeETA.vue'
import { render, screen } from '@testing-library/vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('RealTimeETA component', () => {
  it('should render correctly', () => {
    const { container } = render(RealTimeETA, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly display title', () => {
    render(RealTimeETA, {
      mocks,
    })

    expect(screen.getByText(/Real-time ETA/i).className).toContain('case_title_h2')
  })
})
