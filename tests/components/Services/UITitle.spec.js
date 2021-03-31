import { render, screen } from '@testing-library/vue'
import UITitle from '@/components/Services/UITitle'

describe('UITitle', () => {
  it('should render correctly with slot', () => {
    const { container } = render(UITitle, {
      slots: {
        default: 'Default slot',
      },
    })

    expect(screen.getByText('Default slot')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
