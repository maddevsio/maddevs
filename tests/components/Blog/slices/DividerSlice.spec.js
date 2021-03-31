import DividerSlice from '@/components/Blog/slices/DividerSlice'
import { render } from '@testing-library/vue'

describe('divider slice component', () => {
  it('is a Vue instance', () => {
    const { container } = render(DividerSlice)

    expect(container).toMatchSnapshot()
  })
})
