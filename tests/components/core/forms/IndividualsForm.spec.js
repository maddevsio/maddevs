import { render, fireEvent, screen } from '@testing-library/vue'
import IndividualsForm from '@/components/core/forms/IndividualsForm'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import formBaseProps from '../../../__mocks__/formBaseProps'

import delay from '../../../../client/helpers/delay'

jest.mock('@/api/ipInfo', () => (
  {
    getIPInfo: () => ({
      ip: 'ip',
      country_name: 'country',
      city: 'city',
    }),
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

describe('IndividualsForm component', () => {
  it('should render correctly', () => {
    const { container } = render(IndividualsForm, {
      mocks,
      store,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct call handler', async () => {
    render(IndividualsForm, {
      mocks,
      store,
    })

    await fireEvent.update(screen.getByTestId('test-base-form-phoneNumber'), '+3 4546-657-9098-7875645342245')
    await fireEvent.update(screen.getByTestId('test-base-form-email'), 'someemail@maddevs.io')
    await fireEvent.update(screen.getByTestId('test-base-form-fullName'), 'John Johnson')

    await fireEvent.click(screen.queryByTestId('test-privacy-policy-checkbox-input'))
    await fireEvent.click(screen.getByText('Get individual proactive rockets'))

    await delay(500) // createLeadMixin calls the delay method
    expect(mocks.$v.$reset).toHaveBeenCalledTimes(1)
  })
})
