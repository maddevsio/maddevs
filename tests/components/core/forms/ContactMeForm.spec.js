import { render, fireEvent, screen } from '@testing-library/vue'
import ContactMeForm from '@/components/core/forms/ContactMeForm'
import formBaseProps from '../../../__mocks__/formBaseProps'

import delay from '../../../../client/helpers/delay'

const mocks = formBaseProps

describe('ContactMeForm component', () => {
  it('should render correctly', () => {
    const { container } = render(ContactMeForm, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct call handler', async () => {
    render(ContactMeForm, {
      mocks,
    })

    await fireEvent.update(screen.getByTestId('test-base-form-phoneNumber'), '+3 4546-657-9098-7875645342245')
    await fireEvent.update(screen.getByTestId('test-base-form-email'), 'someemail@maddevs.io')
    await fireEvent.update(screen.getByTestId('test-base-form-company'), 'Maddevs.io')
    await fireEvent.update(screen.getByTestId('test-base-form-fullName'), 'John Johnson')

    await fireEvent.click(screen.queryByTestId('test-privacy-policy-checkbox-input'))
    await fireEvent.click(screen.getByText('Сontact Me'))

    await delay(1500)
    expect(mocks.$v.$reset).toHaveBeenCalledTimes(1)
  })
})
