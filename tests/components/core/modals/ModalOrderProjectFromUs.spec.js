import { render } from '@testing-library/vue'
import ModalOrderProjectFromUs from '@/components/core/modals/ModalOrderProjectFromUs'

describe('ModalOrderProjectFromUs component', () => {
  it('should render correctly', () => {
    const { container } = render(ModalOrderProjectFromUs)

    expect(container).toMatchSnapshot()
  })
})
