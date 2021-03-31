import { render, screen } from '@testing-library/vue'
import UISubtitle from '@/components/Services/UISubtitle'

describe('UISubtitle', () => {
  it('should render correctly with slot', () => {
    const { container } = render(UISubtitle, {
      slots: {
        default: 'Default slot',
      },
    })

    expect(screen.getByText('Default slot')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
