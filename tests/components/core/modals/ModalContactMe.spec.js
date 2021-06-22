import { render } from '@testing-library/vue'
import ModalContactMe from '@/components/core/modals/ModalContactMe'

describe('ModalContactMe component', () => {
  it('should render correctly', () => {
    const { container } = render(ModalContactMe)

    expect(container).toMatchSnapshot()
  })
})
