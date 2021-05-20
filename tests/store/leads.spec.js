import 'regenerator-runtime'
import { actions } from '@/store/modules/leads'

import { sendLead } from '@/api/leads'

jest.mock('@/api/leads', () => (
  {
    sendLead: jest.fn(() => 'test'),
  }
))

actions.$axios = {
  api: jest.fn(),
}

describe('Leads module actions', () => {
  it('should createNewLead action correctly called and returned response', async () => {
    const response = await actions.sendLead()
    expect(response).toBe('test')
    expect(sendLead).toHaveBeenCalledTimes(1)
  })
})
