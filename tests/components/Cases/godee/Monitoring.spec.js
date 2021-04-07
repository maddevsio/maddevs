import Monitoring from '@/components/Cases/godee/Monitoring.vue'
import { render, screen } from '@testing-library/vue'

const mocks = {
  getMediaFromS3: () => 'img.jpg',
}

describe('Monitoring component', () => {
  it('should render correctly', () => {
    const { container } = render(Monitoring, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly display title', () => {
    render(Monitoring, {
      mocks,
    })

    expect(screen.getByText(/^[M]onitoring/i).className).toContain('case_title_h2')
  })
})
