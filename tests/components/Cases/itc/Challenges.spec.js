import Challenges from '@/components/Cases/itc/Challenges'
import { render } from '@testing-library/vue'

const stubs = ['CardTechSolution']

describe('Challenges component', () => {
  it('should render correctly', () => {
    const { container } = render(Challenges, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
