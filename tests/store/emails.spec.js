import 'regenerator-runtime'
import { actions } from '@/store/modules/emails'

import { sendEmail } from '@/api/emails'

jest.mock('@/api/emails', () => (
  {
    sendEmail: jest.fn(() => 'test'),
  }
))

actions.$axios = {
  api: jest.fn(),
}

describe('Emails module actions', () => {
  it('should sendEmail action correctly called and returned response', async () => {
    const response = await actions.sendEmail()
    expect(response).toBe('test')
    expect(sendEmail).toHaveBeenCalledTimes(1)
  })
})
