import { mount, createLocalVue } from '@vue/test-utils'
import IndexPage from '@/pages/index'
import Vuelidate from 'vuelidate'

const localVue = createLocalVue()

localVue.use(Vuelidate)

describe('index page', () => {
  let wrapper

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: null,
      },
    }
    wrapper = mount(IndexPage, {
      localVue,
      stubs: ['client-only', 'nuxt-link'],
    })
  })

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  // --------------------- //

  it('sets the correctly data', () => {
    expect(wrapper.vm.$data.title).toEqual('Mad Devs: Custom Software Development Company')
    expect(wrapper.vm.$data.description).toEqual(
      'Mad Devs develops enterprise-level custom software solutions & mobile apps for finance, transportation, logistics, security, edtech, cloudtech & advertising industries.',
    )
    expect(wrapper.vm.$data.ogUrl).toEqual('https://maddevs.io/')
  })
})
