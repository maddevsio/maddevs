import { mount, createLocalVue } from '@vue/test-utils'
import CareersPage from '@/pages/careers'
import Vuelidate from 'vuelidate'

const localVue = createLocalVue()

localVue.use(Vuelidate)

describe('careers page', () => {
  let wrapper

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: null,
      },
    }
    wrapper = mount(CareersPage, {
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
})
