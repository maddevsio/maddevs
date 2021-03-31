import SoftwareDevelopmentContent from '@/components/Services/SoftwareDevelopmentContent'
import { render } from '@testing-library/vue'

describe('SoftwareDevelopmentContent component', () => {
  it('should render correctly', () => {
    const { container } = render(SoftwareDevelopmentContent, {
      stubs: ['client-only'],
    })

    expect(container).toMatchSnapshot()
  })
})
