import ListItemBoxCheckMark from '@/components/Cases/shared/ListItemBoxCheckMark'
import { render, screen } from '@testing-library/vue'

const slots = {
  default: 'Main Content',
}

describe('ListItemBoxCheckMark component', () => {
  it('should render correctly', () => {
    const { container } = render(ListItemBoxCheckMark, {
      slots,
    })

    expect(screen.getAllByText(slots.default)).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})
