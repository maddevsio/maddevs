import 'regenerator-runtime'
import { actions } from '@/store/modules/leads'

import { createNewLead } from '@/api/leads'

jest.mock('@/api/leads', () => (
  {
    createNewLead: jest.fn(() => 'test'),
  }
))

actions.$axios = {
  api: jest.fn(),
}

describe('Leads module actions', () => {
  it('should createNewLead action correctly called and returned response', async () => {
    const response = await actions.createNewLead()
    expect(response).toBe('test')
    expect(createNewLead).toHaveBeenCalledTimes(1)
  })
})
