import { render } from '@testing-library/vue'
import HeaderLogo from '@/components/core/Header/HeaderLogo'

describe('HeaderLogo component', () => {
  it('should render correctly', () => {
    const { container } = render(HeaderLogo)

    expect(container).toMatchSnapshot()
  })
})
