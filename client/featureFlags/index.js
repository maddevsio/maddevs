import Feature from './Feature.vue'
import featureFlag from './featureFlag'

const FeatureFlags = {
  install(Vue) {
    Vue.component(Feature.name, Feature)

    Vue.mixin({
      methods: {
        featureFlag,
      },
    })
  },
}

export default FeatureFlags
