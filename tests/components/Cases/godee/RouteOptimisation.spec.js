import RouteOptimisation from '@/components/Cases/godee/RouteOptimisation.vue'
import { render, screen } from '@testing-library/vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const props = {
  isIphone: true,
}

describe('RouteOptimisation component', () => {
  it('should render correctly', () => {
    const { container } = render(RouteOptimisation, {
      mocks,
      props,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly display title', async () => {
    render(RouteOptimisation, {
      mocks,
      props,
    })

    const result = await screen.findAllByTestId('test-case_video-flex-wrapper')
    expect(result).toHaveLength(1)
    expect(screen.getByText(/Route optimization/i).className).toContain('case_title_h3')
  })

  it('should hide video block if iphone property false', async () => {
    render(RouteOptimisation, {
      mocks,
      props: {
        isIphone: false,
      },
    })
    const result = await screen.queryAllByTestId('test-case_video-flex-wrapper')
    expect(result).toHaveLength(0)
  })
})
