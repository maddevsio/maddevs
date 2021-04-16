import InfrastructureScheme from '@/components/Cases/godee/StableScalableSolution.vue'
import { render, screen } from '@testing-library/vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('InfrastructureScheme component', () => {
  it('should render correctly', () => {
    const { container } = render(InfrastructureScheme, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(InfrastructureScheme, {
      mocks,
    })

    expect(screen.getByText(/^[S]table & Scalable solution/i).className).toContain('case_title_h2')
  })
})
