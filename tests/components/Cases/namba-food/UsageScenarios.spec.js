import UsageScenarios from '@/components/Cases/nambafood/UsageScenarios.vue'
import { render, screen } from '@testing-library/vue'

const mocks = {
  getMediaFromS3: () => 'img.jpg',
}

describe('UsageScenarios component', () => {
  it('should render correctly', () => {
    const { container } = render(UsageScenarios, {
      mocks,
      stubs: ['client-only'],
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(UsageScenarios, {
      mocks,
      stubs: ['client-only'],
    })

    expect(screen.getByText(/Typical usage scenarios and user roles/i).className).toContain('case_title_h2')
  })
})
