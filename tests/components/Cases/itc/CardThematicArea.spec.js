import CardThematicArea from '@/components/Cases/itc/CardThematicArea'
import { render } from '@testing-library/vue'

const stubs = ['Card', 'Picture']

describe('CardThematicArea component', () => {
  it('should render correctly', () => {
    const { container } = render(CardThematicArea, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
