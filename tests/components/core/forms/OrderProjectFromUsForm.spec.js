import { render, fireEvent, screen } from '@testing-library/vue'
import OrderProjectFromUsForm from '@/components/core/forms/OrderProjectFromUsForm'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import formBaseProps from '../../../__mocks__/formBaseProps'

import delay from '../../../../client/helpers/delay'

jest.mock('@/api/ipInfo', () => (
  {
    getIPInfo: jest.fn(() => 'ip info'),
  }
))

const localVue = createLocalVue()
localVue.use(Vuex)

const store = {
  actions: {
    sendLead: jest.fn(),
  },
}
const mocks = formBaseProps

describe('OrderProjectFromUsForm component', () => {
  it('should render correctly', () => {
    const { container } = render(OrderProjectFromUsForm, {
      mocks,
      store,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct call handler', async () => {
    render(OrderProjectFromUsForm, {
      mocks,
      store,
    })

    await fireEvent.update(screen.getByTestId('test-base-form-phoneNumber'), '+3 4546-657-9098-7875645342245')
    await fireEvent.update(screen.getByTestId('test-base-form-email'), 'someemail@maddevs.io')
    await fireEvent.update(screen.getByTestId('test-base-form-fullName'), 'John Johnson')

    await fireEvent.click(screen.queryByTestId('test-privacy-policy-checkbox-input'))
    await fireEvent.click(screen.getByText(/Submit your project/))

    await delay(500) // createLeadMixin calls the delay method
    expect(mocks.$v.$reset).toHaveBeenCalledTimes(1)
  })
})
