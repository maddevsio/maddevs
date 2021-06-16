import InfrastructureScheme from '@/components/Cases/godee/InfrastructureScheme.vue'
import { render, screen } from '@testing-library/vue'
import '../../../__mocks__/intersectionObserverMock'

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

    expect(screen.getByText(/Infrastructure scheme/i).className).toBeTruthy()
  })
})
