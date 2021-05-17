import ProjectsCountries from '@/components/Careers/ProjectsCountries'
import { render, screen } from '@testing-library/vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const stubs = ['UICustomersList', 'UILinkButton']

describe('ProjectsCountries component', () => {
  it('should render correctly', () => {
    const { container } = render(ProjectsCountries, {
      mocks,
      stubs,
    })

    expect(screen.getByText('Global projects in 20+ countries')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
