import ProjectInNumbers from '@/components/Cases/kaf/ProjectInNumbers'
import { render } from '@testing-library/vue'

describe('ProjectInNumbers component', () => {
  it('should render correctly', () => {
    const { container } = render(ProjectInNumbers)
    expect(container).toMatchSnapshot()
  })
})
