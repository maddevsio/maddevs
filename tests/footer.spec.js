import { shallowMount, createLocalVue } from '@vue/test-utils'
import Footer from '@/components/core/Footer/Footer'
import Vuelidate from 'vuelidate'

const localVue = createLocalVue()

localVue.use(Vuelidate)

describe('footer', () => {
  let wrapper

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: '/',
      },
    }
    wrapper = shallowMount(Footer, {
      localVue,
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

  it('correctly sets the route when mounted', () => {
    expect(wrapper.vm.$data.pageName).toBe('/')
  })

  it('correctly sets the current pages name and class', () => {
    const $route = {
      path: '/gdpr',
    }

    wrapper = shallowMount(Footer, {
      mocks: {
        $route,
      },
    })

    wrapper.vm.$data.currentPageName = 'gdpr'
    expect(wrapper.vm.$route.path).toBe('/gdpr')
    expect(wrapper.vm.$data.currentPageName).toBe('gdpr')

    const wrapperClass = wrapper.findAll('.gdpr')
    expect(wrapperClass).toEqual({
      selector: '.gdpr',
    })
  })

  it('correctly sets the current pages name to /nda and class', () => {
    const $route = {
      path: '/nda',
    }

    wrapper = shallowMount(Footer, {
      mocks: {
        $route,
      },
    })

    wrapper.vm.$data.currentPageName = 'nda'
    expect(wrapper.vm.$route.path).toBe('/nda')
    expect(wrapper.vm.$data.currentPageName).toBe('nda')

    const wrapperClass = wrapper.findAll('.nda')
    expect(wrapperClass).toEqual({
      selector: '.nda',
    })
  })

  it('correctly sets the current pages name to /privacy and class', () => {
    const $route = {
      path: '/privacy',
    }

    wrapper = shallowMount(Footer, {
      mocks: {
        $route,
      },
    })

    wrapper.vm.$data.currentPageName = 'privacy'
    expect(wrapper.vm.$route.path).toBe('/privacy')
    expect(wrapper.vm.$data.currentPageName).toBe('privacy')

    const wrapperClass = wrapper.findAll('.privacy')
    expect(wrapperClass).toEqual({
      selector: '.privacy',
    })
  })
})
