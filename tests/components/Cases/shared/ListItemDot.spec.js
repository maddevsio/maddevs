import ListItemDot from '@/components/Cases/shared/ListItemDot'
import { render, screen } from '@testing-library/vue'

const slots = {
  default: 'Main Content',
}

describe('ListItemDot component', () => {
  it('should render correctly', () => {
    const { container } = render(ListItemDot, {
      slots,
    })

    expect(screen.getAllByText(slots.default)).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})
