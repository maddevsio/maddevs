import BenefitsFromPekloTool from '@/components/Cases/peklo/BenefitsFromPekloTool'
import { render } from '@testing-library/vue'

const stubs = ['Picture']

describe('BenefitsFromPekloTool component', () => {
  it('should render correctly', () => {
    const { container } = render(BenefitsFromPekloTool, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
