import PhaseLiveStreamingTechnology from '@/components/Cases/yourcast/PhaseLiveStreamingTechnology'
import { render, screen } from '@testing-library/vue'
import '../../../__mocks__/intersectionObserverMock'

describe('PhaseLiveStreamingTechnology component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseLiveStreamingTechnology, {
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(PhaseLiveStreamingTechnology, {
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })
    expect(screen.getByText(/Phase 2: Live streaming technology/i).className).toContain('case_title_h2')
  })
})
