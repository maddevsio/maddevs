import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuelidate from 'vuelidate'
import Feature from '@/featureFlags/Feature'

const localVue = createLocalVue()

localVue.use(Vuelidate)

const CORRECT_FLAG = 'correct-flag'
const INCORRECT_FLAG = 'incorrect-flag'

jest.mock('@/featureFlags/config', () => ({
  config: {
    'correct-flag': 'true',
  },
}))

describe('Feature component', () => {
  const props = {
    flag: INCORRECT_FLAG,
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

  it('should return true and print error if config include flag and env haven\'t Environment param', () => {
    process.env.ffEnvironment = ''
    const wrapper = shallowMount(Feature, {
      propsData: {
        flag: CORRECT_FLAG,
      },
    })

    expect(wrapper.vm.$options.computed.isShow()).toBeTruthy()
  })

  it('should return true and print error if config include flag and correct Environment param', () => {
    process.env.ffEnvironment = 'env'
    const wrapper = shallowMount(Feature, {
      propsData: {
        flag: CORRECT_FLAG,
      },
    })

    expect(wrapper.vm.$options.computed.isShow()).toBeTruthy()
  })

  it('should return true and print error if process env incorrect', () => {
    process.env = null
    const wrapper = shallowMount(Feature, {
      propsData: {
        flag: CORRECT_FLAG,
      },
    })

    expect(wrapper.vm.$options.computed.isShow()).toBeTruthy()
  })
})
