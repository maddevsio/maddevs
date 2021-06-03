import Partnership from '@/components/Cases/itc/Partnership'
import { render } from '@testing-library/vue'

describe('Partnership component', () => {
  it('should render correctly', () => {
    const { container } = render(Partnership)

    expect(container).toMatchSnapshot()
  })
})
