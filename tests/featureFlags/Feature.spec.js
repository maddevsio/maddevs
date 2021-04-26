import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuelidate from 'vuelidate'
import Feature from '@/featureFlags/Feature'

const localVue = createLocalVue()

localVue.use(Vuelidate)

describe('Feature component', () => {
  const props = {
    flag: 'flag',
  }

  it('should return true and print error if config not include flag', () => {
    const wrapper = shallowMount(Feature, {
      props,
    })

    expect(wrapper.vm.$options.computed.isShow.call({})).toBeTruthy()
  })

  it('should return true and print error if config include flag and env haven\'t ffEnvironment param', () => {
    const wrapper = shallowMount(Feature, {
      props,
    })

    expect(wrapper.vm.$options.computed.isShow.call({
      config: { flag: true },
    })).toBeTruthy()
  })
})
