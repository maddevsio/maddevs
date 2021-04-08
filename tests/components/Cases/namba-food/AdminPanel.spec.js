import AdminPanel from '@/components/Cases/nambafood/AdminPanel.vue'
import { render, screen } from '@testing-library/vue'

const mocks = {
  getMediaFromS3: () => 'img.jpg',
}

describe('AdminPanel component', () => {
  it('should render correctly', () => {
    const { container } = render(AdminPanel, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(AdminPanel, {
      mocks,
    })

    expect(screen.getByText(/Admin panel automates Namba Food’s scalability/i).className).toBeTruthy()
  })
})
