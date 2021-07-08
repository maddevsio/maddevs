import { render, fireEvent, screen } from '@testing-library/vue'
import IndividualsForm from '@/components/core/forms/IndividualsForm'
import formBaseProps from '../../../__mocks__/formBaseProps'

import delay from '../../../../client/helpers/delay'

const mocks = formBaseProps

describe('IndividualsForm component', () => {
  it('should render correctly', () => {
    const { container } = render(IndividualsForm, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct call handler', async () => {
    render(IndividualsForm, {
      mocks,
    })

    await fireEvent.update(screen.getByTestId('test-base-form-phoneNumber'), '+3 4546-657-9098-7875645342245')
    await fireEvent.update(screen.getByTestId('test-base-form-email'), 'someemail@maddevs.io')
    await fireEvent.update(screen.getByTestId('test-base-form-fullName'), 'John Johnson')

    await fireEvent.click(screen.queryByTestId('test-privacy-policy-checkbox-input'))
    await fireEvent.click(screen.getByText('Get individual proactive rockets'))

    await delay(1500)
    expect(mocks.$v.$reset).toHaveBeenCalledTimes(1)
  })
})
