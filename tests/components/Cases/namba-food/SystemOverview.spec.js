import SystemOverview from '@/components/Cases/nambafood/SystemOverview.vue'
import { render, screen } from '@testing-library/vue'
import '../../../__mocks__/intersectionObserverMock'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('SystemOverview component', () => {
  it('should render correctly', () => {
    const { container } = render(SystemOverview, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(SystemOverview, {
      mocks,
    })

    expect(screen.getByText(/High-level system overview/i).className).toContain('case_title_h2')
  })
})
