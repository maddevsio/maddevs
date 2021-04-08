import { render, fireEvent, screen } from '@testing-library/vue'
import ModalGetYourTrustedItPartner from '@/components/core/modals/ModalGetYourTrustedItPartner'
import formBaseProps from '../../../__mocks__/formBaseProps'

const mocks = formBaseProps
mocks.$v.needAssistanceWith = {
  $touch: jest.fn(),
}

describe('ModalGetYourTrustedItPartner component', () => {
  it('should render correctly', () => {
    const { container } = render(ModalGetYourTrustedItPartner, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct call handler', async () => {
    render(ModalGetYourTrustedItPartner, {
      mocks,
    })

    await fireEvent.update(screen.getByTestId('test-base-form-phone'), '+3 4546-657-9098-7875645342245')
    await fireEvent.update(screen.getByTestId('test-base-form-email'), 'someemail@maddevs.io')
    await fireEvent.update(screen.getByTestId('test-base-form-full-name'), 'John Johnson')

    await fireEvent.click(screen.queryByTestId('test-privacy-policy-checkbox-input'))
    await fireEvent.click(screen.getByText('Get your trusted IT partner'))

    await new Promise(resolve => setTimeout(resolve, 1000))
    // Called in BaseForm and GetYourTrustedItPartnerForm components
    expect(mocks.$v.$reset).toHaveBeenCalledTimes(2)
  })
})
