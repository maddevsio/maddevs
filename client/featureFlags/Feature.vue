<template>
  <div v-if="isShow">
    <slot />
  </div>
</template>

<script>
/* eslint no-console: 0 */
import { config } from './config'

export default {
  name: 'Feature',

  props: {
    flag: {
      type: String,
      required: true,
    },
  },

  computed: {
    isShow() {
      try {
        if (!config[this.flag]) {
          console.error('WARNING: FEATURE FLAGS. You provided an incorrect feature flag. Be sure that flag in the config and you`re correct to insert it. Feature flag will be ignored!')
          return true
        }
        if (!process.env.ffEnvironment) {
          console.error('WARNING: FEATURE FLAGS. ffEnvironment variable is not provided! Feature flag will be ignored!')
          return true
        }
        return config[this.flag].includes(process.env.ffEnvironment)
      } catch (error) {
        console.error('ERROR: FEATURE FLAGS. Unexpected error. Feature flag will be ignored!')
        console.error(error)
        return true
      }
    },
  },
}
</script>
