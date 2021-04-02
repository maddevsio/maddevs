import FullPlatformArchitecture from '@/components/Cases/kaf/FullPlatformArchitecture'
import { render } from '@testing-library/vue'

describe('FullPlatformArchitecture component', () => {
  it('should render correctly', () => {
    const { container } = render(FullPlatformArchitecture)
    expect(container).toMatchSnapshot()
  })
})
