import Integrating from '@/components/Cases/nambafood/Integrating.vue'
import { render, screen } from '@testing-library/vue'

const mocks = {
  getMediaFromS3: () => 'img.jpg',
}

describe('Integrating component', () => {
  it('should render correctly', () => {
    const { container } = render(Integrating, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(Integrating, {
      mocks,
    })

    expect(screen.getByText(/Flexible catalogue management/i).className).toContain('case_title_h3')
  })
})
