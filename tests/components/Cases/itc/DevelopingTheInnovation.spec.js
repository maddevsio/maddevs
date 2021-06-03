import DevelopingTheInnovation from '@/components/Cases/itc/DevelopingTheInnovation'
import { render } from '@testing-library/vue'

describe('DevelopingTheInnovation component', () => {
  it('should render correctly', () => {
    const { container } = render(DevelopingTheInnovation)

    expect(container).toMatchSnapshot()
  })
})
