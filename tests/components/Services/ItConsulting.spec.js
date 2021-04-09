import ItСonsulting from '@/components/Services/ItСonsulting.vue'
import { render } from '@testing-library/vue'

describe('itСonsulting component', () => {
  it('should render correctly', () => {
    const { container } = render(ItСonsulting, {
      stubs: ['ClientOnly'],
    })

    expect(container).toMatchSnapshot()
  })
})
