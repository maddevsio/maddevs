import { render, screen } from '@testing-library/vue'
import WeCreateItProjectFor from '@/components/About/WeCreateItProjectFor'

describe('technologies and tools', () => {
  it('should render correctly with slot', () => {
    const { container } = render(WeCreateItProjectFor)

    expect(screen.getByTestId('test-weCreateItProject')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
