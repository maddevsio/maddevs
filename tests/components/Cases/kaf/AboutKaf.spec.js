import AboutKaf from '@/components/Cases/kaf/AboutKaf'
import { render } from '@testing-library/vue'

describe('AboutKaf component', () => {
  it('should render correctly', () => {
    const { container } = render(AboutKaf)
    expect(container).toMatchSnapshot()
  })
})
