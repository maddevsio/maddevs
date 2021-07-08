import { render, fireEvent, screen } from '@testing-library/vue'
import InfrastructureAuditForm from '@/components/core/forms/InfrastructureAuditForm'
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

describe('InfrastructureAuditForm component', () => {
  it('should render correctly', () => {
    const { container } = render(InfrastructureAuditForm, {
      mocks,
      store,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct call handler', async () => {
    render(InfrastructureAuditForm, {
      mocks,
      store,
    })

    await fireEvent.update(screen.getByTestId('test-base-form-phoneNumber'), '+3 4546-657-9098-7875645342245')
    await fireEvent.update(screen.getByTestId('test-base-form-email'), 'someemail@maddevs.io')
    await fireEvent.update(screen.getByTestId('test-base-form-fullName'), 'John Johnson')

    await fireEvent.click(screen.queryByTestId('test-privacy-policy-checkbox-input'))
    await fireEvent.click(screen.getByText(/Get an infrastructure audit/))

    await delay(500) // createLeadMixin calls the delay method
    expect(mocks.$v.$reset).toHaveBeenCalledTimes(1)
  })
})
