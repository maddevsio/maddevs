import { render } from '@testing-library/vue'
import ScrollToPositionsButton from '@/components/Careers/shared/ScrollToPositionsButton'

describe('ScrollToPositionsButton component', () => {
  it('should render correctly', () => {
    const { container } = render(ScrollToPositionsButton)

    expect(container).toMatchSnapshot()
  })
})
