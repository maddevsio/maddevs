import { render, fireEvent, screen } from '@testing-library/vue'
import ModalInfrastructureAudit from '@/components/core/modals/ModalInfrastructureAudit'
import formBaseProps from '../../../__mocks__/formBaseProps'
import delay from '../../../../client/helpers/delay'

const mocks = formBaseProps

describe('ModalInfrastructureAudit component', () => {
  it('should render correctly', () => {
    const { container } = render(ModalInfrastructureAudit, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct call handler', async () => {
    render(ModalInfrastructureAudit, {
      mocks,
    })

    await fireEvent.update(screen.getByTestId('test-base-form-phone'), '+3 4546-657-9098-7875645342245')
    await fireEvent.update(screen.getByTestId('test-base-form-email'), 'someemail@maddevs.io')
    await fireEvent.update(screen.getByTestId('test-base-form-full-name'), 'John Johnson')

    await fireEvent.click(screen.queryByTestId('test-privacy-policy-checkbox-input'))
    await fireEvent.click(screen.getByText(/Get an infrastructure audit/))

    await delay(1000)
    expect(mocks.$v.$reset).toHaveBeenCalledTimes(1)
  })
})
