import OpenPositions from '@/components/Careers/OpenPositions'
import { render, screen } from '@testing-library/vue'

const stubs = ['PositionsFilter', 'PositionsGrid']

describe('OpenPositions component', () => {
  it('should render correctly', () => {
    const { container } = render(OpenPositions, {
      stubs,
    })

    expect(screen.getByText('Open Positions')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
