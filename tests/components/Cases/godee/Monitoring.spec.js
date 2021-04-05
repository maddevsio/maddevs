import Monitoring from '@/components/Cases/godee/Monitoring.vue'
import { render, screen } from '@testing-library/vue'

describe('Monitoring component', () => {
  it('should render correctly', () => {
    const { container } = render(Monitoring, {
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly display title', () => {
    render(Monitoring, {
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(screen.getByText(/^[M]onitoring/i).className).toContain('case_title_h2')
  })
})
