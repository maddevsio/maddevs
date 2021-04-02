import FullPlatformArchitecture from '@/components/Cases/yourcast/FullPlatformArchitecture'
import { render, screen } from '@testing-library/vue'

describe('FullPlatformArchitecture component', () => {
  it('should render correctly', () => {
    const { container } = render(FullPlatformArchitecture)
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(FullPlatformArchitecture)
    expect(screen.getByText(/Full Platform Architecture:/i)).toBeTruthy()
  })
})
