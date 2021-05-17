import OpenPositions from '@/components/Careers/OpenPositions'
import { render } from '@testing-library/vue'

const stubs = ['PositionsFilter', 'PositionsGrid']

describe('OpenPositions component', () => {
  it('should render correctly', () => {
    const { container } = render(OpenPositions, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
