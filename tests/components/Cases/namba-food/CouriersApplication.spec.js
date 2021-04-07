import CouriersApplication from '@/components/Cases/nambafood/CouriersApplication.vue'
import { render, screen } from '@testing-library/vue'

const mocks = {
  getMediaFromS3: () => 'img.jpg',
}

describe('CouriersApplication component', () => {
  it('should render correctly', () => {
    const { container } = render(CouriersApplication, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(CouriersApplication, {
      mocks,
    })

    expect(screen.getByText(/Android application for couriers/i).className).toBeTruthy()
  })
})
