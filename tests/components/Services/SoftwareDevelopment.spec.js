import SoftwareDevelopment from '@/components/Services/SoftwareDevelopment'
import { render } from '@testing-library/vue'

describe('SoftwareDevelopment component', () => {
  it('should render correctly', () => {
    const { container } = render(SoftwareDevelopment, {
      stubs: ['client-only'],
    })

    expect(container).toMatchSnapshot()
  })
})
