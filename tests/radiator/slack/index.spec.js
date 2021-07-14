import 'regenerator-runtime'
import main from '../../../server/radiator/slack'
import buildMessage from '../../../server/radiator/slack/buildMessage'
import sendMessage from '../../../server/radiator/slack/sendMessage'

jest.mock('../../../radiator/slack/buildMessage', () => jest.fn())
jest.mock('../../../radiator/slack/sendMessage', () => jest.fn())

describe('Radiator > slack > index', () => {
  it('should correctly called build and send message functions', async () => {
    await main('data')

    expect(buildMessage).toHaveBeenCalledWith('data')
    expect(sendMessage).toHaveBeenCalledTimes(1)
  })
})
