import SoftwareDevelopmentIcons from '@/components/Services/SoftwareDevelopmentIcons'
import { render } from '@testing-library/vue'

describe('SoftwareDevelopmentIcons component', () => {
  it('should render correctly', () => {
    const { container } = render(SoftwareDevelopmentIcons, {
      stubs: ['ClientOnly'],
    })

    expect(container).toMatchSnapshot()
  })
})
