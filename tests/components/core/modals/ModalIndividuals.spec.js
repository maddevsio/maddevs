import { render, fireEvent, screen } from '@testing-library/vue'
import ModalIndividuals from '@/components/core/modals/ModalIndividuals'
import formBaseProps from '../../../__mocks__/formBaseProps'

const mocks = formBaseProps

describe('ModalIndividuals component', () => {
  it('should render correctly', () => {
    const { container } = render(ModalIndividuals, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct call handler', async () => {
    render(ModalIndividuals, {
      mocks,
    })

    await fireEvent.update(screen.getByTestId('test-base-form-phone'), '+3 4546-657-9098-7875645342245')
    await fireEvent.update(screen.getByTestId('test-base-form-email'), 'someemail@maddevs.io')
    await fireEvent.update(screen.getByTestId('test-base-form-full-name'), 'John Johnson')

    await fireEvent.click(screen.queryByTestId('test-privacy-policy-checkbox-input'))
    await fireEvent.click(screen.getByText('Get individual proactive rockets'))

    await new Promise(resolve => setTimeout(resolve, 1000))
    expect(mocks.$v.$reset).toHaveBeenCalledTimes(1)
  })
})
