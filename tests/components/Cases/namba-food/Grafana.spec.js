import Grafana from '@/components/Cases/nambafood/Grafana.vue'
import { render, screen } from '@testing-library/vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('Grafana component', () => {
  it('should render correctly', () => {
    const { container } = render(Grafana, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(Grafana, {
      mocks,
    })

    expect(screen.getByText(/Grafana — Docker containers’ monitoring service/i).className).toBeTruthy()
  })
})
