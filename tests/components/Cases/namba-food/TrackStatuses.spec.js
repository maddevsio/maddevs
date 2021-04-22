import TrackStatuses from '@/components/Cases/nambafood/TrackStatuses.vue'
import { render, screen } from '@testing-library/vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('TrackStatuses component', () => {
  it('should render correctly', () => {
    const { container } = render(TrackStatuses, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(TrackStatuses, {
      mocks,
    })

    expect(screen.getByText(/Customers track order statuses/i).className).toContain('case_title_h2')
  })
})
