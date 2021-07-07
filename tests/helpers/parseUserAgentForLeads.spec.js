import parseUserAgentForLeads from '@/helpers/parseUserAgentForLeads'

const mockBrowser = {
  name: 'Chrome',
  version: '91.0.4472.114',
}

const mockOS = {
  name: 'macOS',
  version: '10.15.7',
  versionName: 'Catalina',
}

const mockPlatform = {
  type: 'desktop',
  vendor: 'Apple',
}

jest.mock('bowser', () => ({
  parse: () => ({
    browser: mockBrowser,
    os: mockOS,
    platform: mockPlatform,
  }),
}))

describe('parseUserAgentForLeads helper', () => {
  it('should return object with correct keys', () => {
    const { userBrowser, userOS, userPlatform } = parseUserAgentForLeads()
    expect(userBrowser).toBe(`Name: ${mockBrowser.name}, Version: ${mockBrowser.version}`)
    expect(userOS).toBe(`Name: ${mockOS.name}, Version: ${mockOS.version}, VersionName: ${mockOS.versionName}`)
    expect(userPlatform).toBe(`Type: ${mockPlatform.type}, Vendor: ${mockPlatform.vendor}`)
  })

  it('should return unknown keys if window.navigator is not defined', () => {
    Object.defineProperty(global.window, 'navigator', { value: undefined, writable: true })
    const { userBrowser, userOS, userPlatform } = parseUserAgentForLeads()
    expect(userBrowser).toBe('Unknown')
    expect(userOS).toBe('Unknown')
    expect(userPlatform).toBe('Unknown')
  })
})
