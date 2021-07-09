import 'regenerator-runtime'
import SoftwareDevelopment from '@/components/Services/SoftwareDevelopment'
import { render } from '@testing-library/vue'

describe('SoftwareDevelopment component', () => {
  it('should render correctly', () => {
    const { container } = render(SoftwareDevelopment, {
      stubs: ['ClientOnly'],
    })

    expect(container).toMatchSnapshot()
  })
})
