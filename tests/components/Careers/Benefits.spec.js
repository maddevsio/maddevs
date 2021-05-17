import Benefits from '@/components/Careers/Benefits'
import { render, screen } from '@testing-library/vue'

describe('Benefits component', () => {
  it('should render correctly', () => {
    const { container } = render(Benefits)

    expect(screen.getByText('Sustainable engineering culture')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
