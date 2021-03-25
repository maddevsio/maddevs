import { mount, createLocalVue } from '@vue/test-utils'
import contactMeModal from '@/components/Modals/contact-me-modal'
import Vuelidate from 'vuelidate'

const localVue = createLocalVue()

localVue.use(Vuelidate)

describe('contact me modal', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(contactMeModal, {
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
    expect(typeof contactMeModal.data).toBe('function')
    const defaultData = contactMeModal.data()
    expect(defaultData.agreeWithPrivacyPolicy && defaultData.agreeToGetMadDevsDiscountOffers).toEqual(false)
    expect(defaultData.inputId).toEqual('contact-me')
  })

  it('has a functions', () => {
    expect(
      typeof contactMeModal.methods.getPrivacyCheckboxState &&
        typeof contactMeModal.methods.getDiscountOffersCheckboxState,
    ).toBe('function')
  })

  it('call functions with params and change variables state', () => {
    wrapper.vm.getPrivacyCheckboxState(true)
    wrapper.vm.getDiscountOffersCheckboxState(true)

    expect(wrapper.vm.$data.agreeWithPrivacyPolicy && wrapper.vm.$data.agreeToGetMadDevsDiscountOffers).toEqual(true)
  })

  it('sendForm should add new object in $data.form', () => {
    const form = {
      templateId: 303792,
      variables: {
        agreeToGetMadDevsDiscountOffers: 'No',
        agreeWithPrivacyPolicy: 'No',
        email: '',
        emailTo: '',
        fullName: '',
        subject: 'Marketing',
        company: '',
        phoneNumber: '',
        modalTitle: 'Mad Devs Website Forms',
      },
    }
    expect(wrapper.vm.$data.form).toBeNull()
    wrapper.vm.sendForm(true)
    expect(wrapper.vm.$data.form).toEqual(form)
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
    expect(wrapper.vm.$data.fullName && wrapper.vm.$data.email && wrapper.vm.$data.form).toBeNull()
    expect(wrapper.vm.$data.projectDescriber && wrapper.vm.$data.company && wrapper.vm.$data.phoneNumber).toBeNull()
    expect(
      wrapper.vm.$data.agreeWithPrivacyPolicy &&
        wrapper.vm.$data.agreeToGetMadDevsDiscountOffers &&
        wrapper.vm.$data.isEmailSent,
    ).toEqual(false)
  })
})
