import About from '@/components/Cases/itc/About'
import { render } from '@testing-library/vue'

describe('About component', () => {
  it('should render correctly', () => {
    const { container } = render(About)

    expect(container).toMatchSnapshot()
  })
})
