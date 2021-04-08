import { render, screen, fireEvent } from '@testing-library/vue'
import ModalSuccess from '@/components/core/modals/ModalSuccess'

const props = {
  visibled: true,
  id: 'modal-id',
  displayTime: 1000,
}

describe('ModalSuccess component', () => {
  it('should render correctly', () => {
    const { container } = render(ModalSuccess, {
      props,
    })

    expect(container).toMatchSnapshot()
  })

  it('should work close modal method', async () => {
    const { emitted } = render(ModalSuccess, {
      props,
    })

    fireEvent.click(screen.queryByTestId('test-close-modal'))

    expect(emitted().close).toHaveLength(1)
  })
})
