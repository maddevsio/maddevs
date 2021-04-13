/* eslint no-console: 0 */
import { config } from './config'

function featureFlag(flag) {
  try {
    if (!flag || !config[flag]) {
      console.error('WARNING: FEATURE FLAGS. You provided an incorrect feature flag. Be sure that flag in the config and you`re correct to insert it. Feature flag will be ignored!')
      return true
    }
    if (!process.env.ffEnvironment) {
      console.error('WARNING: FEATURE FLAGS. ffEnvironment variable is not provided! Feature flag will be ignored!')
      return true
    }
    return config[flag].includes(process.env.ffEnvironment)
  } catch (error) {
    console.error('ERROR: FEATURE FLAGS. Unexpected error. Feature flag will be ignored!')
    console.error(error)
    return true
  }
}

export default featureFlag
