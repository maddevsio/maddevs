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

  it('should correct work auto close handler', async () => {
    props.visibled = false
    const { emitted, updateProps } = render(ModalSuccess, {
      props,
    })

    await updateProps({
      visibled: true,
      id: 'modal-id',
      displayTime: 1000,
    })

    await new Promise(resolve => setTimeout(resolve, 1500))

    expect(emitted().close).toHaveLength(1)
  })

  it('the timer should be reset if the modal was closed early', async () => {
    props.visibled = true
    const { emitted, updateProps } = render(ModalSuccess, {
      props,
    })

    await updateProps({
      visibled: false,
      id: 'modal-id',
      displayTime: 1000,
    })

    await new Promise(resolve => setTimeout(resolve, 1500))

    expect(!!emitted().close).toBeFalsy()
  })
})
