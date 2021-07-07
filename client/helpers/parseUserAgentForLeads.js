import bowser from 'bowser'

const parseUserAgentForLeads = () => {
  let userBrowser = 'Unknown'
  let userOS = 'Unknown'
  let userPlatform = 'Unknown'

  if (window && window.navigator && window.navigator.userAgent) {
    const { browser, os, platform } = bowser.parse(window.navigator.userAgent)

    userBrowser = `Name: ${browser.name}, Version: ${browser.version}`
    userOS = `Name: ${os.name}, Version: ${os.version}, VersionName: ${os.versionName}`
    userPlatform = `Type: ${platform.type}, Vendor: ${platform.vendor}`
  }

  return {
    userBrowser,
    userOS,
    userPlatform,
  }
}

export default parseUserAgentForLeads
