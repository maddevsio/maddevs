import ListNumberedBox from '@/components/Cases/shared/ListNumberedBox'
import { render, screen } from '@testing-library/vue'

const slots = {
  default: 'Main Content',
}

describe('ListNumberedBox component', () => {
  it('should render correctly', () => {
    const { container } = render(ListNumberedBox, {
      slots,
    })

    expect(screen.getAllByText(slots.default)).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})
