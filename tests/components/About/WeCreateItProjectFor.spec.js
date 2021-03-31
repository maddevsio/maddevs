import { render, screen } from '@testing-library/vue'
import WeCreateItProjectsFor from '@/components/About/WeCreateItProjectsFor'

describe('WeCreateItProjectsFor', () => {
  it('should render correctly', () => {
    const { container } = render(WeCreateItProjectsFor)
    expect(screen.getByTestId('test-weCreateItProject')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
