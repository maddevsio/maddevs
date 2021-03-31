import { render, screen } from '@testing-library/vue'
import UIParagraph from '@/components/Services/UIParagraph'

describe('UIParagraph', () => {
  it('should render correctly', () => {
    const { container } = render(UIParagraph, {
      slots: {
        default: 'Default slot',
      },
    })

    expect(screen.getByText('Default slot')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
