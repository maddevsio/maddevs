import { render } from '@testing-library/vue'
import UnderlinedButton from '@/components/Careers/shared/UnderlinedButton'

describe('UnderlinedButton component', () => {
  it('should render correctly', () => {
    const { container } = render(UnderlinedButton)

    expect(container).toMatchSnapshot()
  })
})
