import DividerSlice from '@/components/Blog/slices/DividerSlice'
import { render } from '@testing-library/vue'

describe('DividerSlice component', () => {
  it('should render correctly', () => {
    const { container } = render(DividerSlice)

    expect(container).toMatchSnapshot()
  })
})
