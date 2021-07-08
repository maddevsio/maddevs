import { render, fireEvent, screen } from '@testing-library/vue'
import OrderProjectFromUsForm from '@/components/core/forms/OrderProjectFromUsForm'
import formBaseProps from '../../../__mocks__/formBaseProps'

import delay from '../../../../client/helpers/delay'

const mocks = formBaseProps

describe('OrderProjectFromUsForm component', () => {
  it('should render correctly', () => {
    const { container } = render(OrderProjectFromUsForm, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct call handler', async () => {
    render(OrderProjectFromUsForm, {
      mocks,
    })

    await fireEvent.update(screen.getByTestId('test-base-form-phoneNumber'), '+3 4546-657-9098-7875645342245')
    await fireEvent.update(screen.getByTestId('test-base-form-email'), 'someemail@maddevs.io')
    await fireEvent.update(screen.getByTestId('test-base-form-fullName'), 'John Johnson')

    await fireEvent.click(screen.queryByTestId('test-privacy-policy-checkbox-input'))
    await fireEvent.click(screen.getByText(/Submit your project/))

    await delay(3000)
    expect(mocks.$v.$reset).toHaveBeenCalledTimes(1)
  })
})
