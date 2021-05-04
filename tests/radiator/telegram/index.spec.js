import 'regenerator-runtime'
import TelegramBot from 'node-telegram-bot-api'
import main from '../../../radiator/telegram'
import buildMessage from '../../../radiator/telegram/buildMessage'

jest.mock('../../../radiator/telegram/buildMessage', () => jest.fn())

jest.mock('node-telegram-bot-api', () => jest.fn())

const sendMessage = jest.fn()

TelegramBot.mockImplementation(() => ({
  sendMessage,
}))

buildMessage.mockImplementation(() => '')

describe('Radiator > telegram > index', () => {
  it('should correctly called build and send message functions', async () => {
    const data = {
      telegramChannelId: 123,
    }

    await main(data)
    expect(buildMessage).toHaveBeenCalledWith(data)
    expect(sendMessage).toHaveBeenCalledWith(123, '', { parse_mode: 'markdown' })
  })
})
