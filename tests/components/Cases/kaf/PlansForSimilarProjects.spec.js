import PlansForSimilarProjects from '@/components/Cases/kaf/PlansForSimilarProjects'
import { render } from '@testing-library/vue'

describe('PlansForSimilarProjects component', () => {
  it('should render correctly', () => {
    const { container } = render(PlansForSimilarProjects)
    expect(container).toMatchSnapshot()
  })
})
