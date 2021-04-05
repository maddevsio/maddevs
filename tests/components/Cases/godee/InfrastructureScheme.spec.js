import InfrastructureScheme from '@/components/Cases/godee/InfrastructureScheme.vue'
import { render, screen } from '@testing-library/vue'

describe('InfrastructureScheme component', () => {
  it('should render correctly', () => {
    const { container } = render(InfrastructureScheme, {
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(InfrastructureScheme, {
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(screen.getByText(/Infrastructure scheme/i).className).toBeTruthy()
  })
})
