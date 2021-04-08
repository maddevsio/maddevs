import ListNumberedItemBox from '@/components/Cases/shared/ListNumberedItemBox'
import { render, screen } from '@testing-library/vue'

const slots = {
  default: 'Main Content',
}

describe('ListNumberedItemBox component', () => {
  it('should render correctly', () => {
    const { container } = render(ListNumberedItemBox, {
      slots,
    })

    expect(screen.getAllByText(slots.default)).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})
