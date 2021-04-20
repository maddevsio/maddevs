import Pipelines from '@/components/Cases/nambafood/Pipelines.vue'
import { render, screen } from '@testing-library/vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('Pipelines component', () => {
  it('should render correctly', () => {
    const { container } = render(Pipelines, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(Pipelines, {
      mocks,
    })

    expect(screen.getByText(/^[P]ipelines/i).className).toContain('case_title_h3')
  })
})
