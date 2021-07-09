import bowser from 'bowser'

const parseUserAgentForLeads = () => {
  let userBrowser = 'Unknown'
  let userOS = 'Unknown'
  let userPlatform = 'Unknown'

  if (window && window.navigator && window.navigator.userAgent) {
    const { browser, os, platform } = bowser.parse(window.navigator.userAgent)
    const { name: browserName = 'Unknown', version: browserVersion = 'Unknown' } = browser
    const { name: osName = 'Unknown', version: osVersion = 'Unknown', versionName: osVersionName = 'Unknown' } = os
    const { type: platformType = 'Unknown', vendor: platformVendor = 'Unknown' } = platform

    userBrowser = `Name: ${browserName}, Version: ${browserVersion}`
    userOS = `Name: ${osName}, Version: ${osVersion}, VersionName: ${osVersionName}`
    userPlatform = `Type: ${platformType}, Vendor: ${platformVendor}`
  }

  return {
    userBrowser,
    userOS,
    userPlatform,
  }
}

export default parseUserAgentForLeads
