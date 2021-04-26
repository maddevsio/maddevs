import 'regenerator-runtime'
import fs from 'fs'
import { google } from 'googleapis'
import authorize from '../../../radiator/analytics/auth'

jest.spyOn(fs, 'writeFile').mockImplementation((_, __, fn) => fn())
jest.spyOn(fs, 'unlink').mockImplementation((_, fn) => fn())

jest.mock('googleapis', () => ({
  google: {
    auth: {
      GoogleAuth: jest.fn(),
    },
    options: jest.fn(),
  },
}))

describe('Radiator > analytics > auth module', () => {
  it('should correctly called google auth functions', async () => {
    const unlink = await authorize()
    expect(fs.writeFile).toHaveBeenCalledTimes(1)
    expect(google.auth.GoogleAuth).toHaveBeenCalledTimes(1)
    expect(google.options).toHaveBeenCalledTimes(1)
    await unlink()
    expect(fs.unlink).toHaveBeenCalledTimes(1)
  })
})
