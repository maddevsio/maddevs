import { mount, createLocalVue } from '@vue/test-utils'
import ModalContactMe from '@/components/core/modals/ModalContactMe'
import Vuelidate from 'vuelidate'

const localVue = createLocalVue()

localVue.use(Vuelidate)

describe('modalContactMe', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(ModalContactMe, {
      localVue,
      stubs: ['modal'],
      mocks: {
        $store: {
          dispatch: () => new Promise(resolve => resolve({ status: 200 })),
        },
        $nuxt: {
          $emit: jest.fn(),
          $on: jest.fn(),
        },
      },
    })
    wrapper.vm.$refs = {
      checkboxes: {
        reset: jest.fn(),
      },
      form: {
        reset: jest.fn(),
      },
    }
  })

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  // --------------------- //

  it('sets the correct default data', () => {
    expect(typeof ModalContactMe.data).toBe('function')
    const defaultData = ModalContactMe.data()
    expect(defaultData.agreeWithPrivacyPolicy && defaultData.agreeToGetMadDevsDiscountOffers).toEqual(false)
    expect(defaultData.fullname).toBe('')
  })

  it('has a functions', () => {
    expect(typeof ModalContactMe.methods.submitForm && typeof ModalContactMe.methods.resetForm).toBe('function')
  })

  it('should rest values in data instances', () => {
    // Set mock data for data instances
    wrapper.vm.$data.fullName = 'Name'
    wrapper.vm.$data.email = 'email@mail.com'
    wrapper.vm.$data.projectDescriber = 'Project Describer'
    wrapper.vm.$data.form = {
      value1: 'value1',
      value2: 'value2',
    }
    wrapper.vm.$data.agreeWithPrivacyPolicy = true
    wrapper.vm.$data.agreeToGetMadDevsDiscountOffers = true
    wrapper.vm.$data.isEmailSent = true
    wrapper.vm.$data.company = 'Company'
    wrapper.vm.$data.phoneNumber = 'Phone number'

    wrapper.vm.resetForm()
    expect(wrapper.vm.$data.fullName && wrapper.vm.$data.email).toEqual('')
    expect(wrapper.vm.$data.projectDescriber && wrapper.vm.$data.company && wrapper.vm.$data.phoneNumber).toEqual('')
    expect(wrapper.vm.$data.agreeWithPrivacyPolicy && wrapper.vm.$data.agreeToGetMadDevsDiscountOffers).toEqual(false)
  })
})
