import 'regenerator-runtime'
import axios from 'axios'
import sendMessage from '../../../radiator/slack/sendMessage'

jest.spyOn(axios, 'post')

describe('Radiator > slack > sendMessage', () => {
  it('should correctly called axios', async () => {
    axios.post.mockImplementation(() => new Promise(res => res()))

    await sendMessage({})

    expect(axios.post).toHaveBeenCalledTimes(1)
  })
})
