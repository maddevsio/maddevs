import { mount, createLocalVue } from '@vue/test-utils'
import ModalOrderProjectFromUs from '@/components/core/modals/ModalOrderProjectFromUs'
import Vuelidate from 'vuelidate'

const localVue = createLocalVue()

localVue.use(Vuelidate)

describe('order Project From Us Modal', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(ModalOrderProjectFromUs, {
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
    const defaultData = ModalOrderProjectFromUs.data()
    expect(defaultData.agreeWithPrivacyPolicy && defaultData.agreeToGetMadDevsDiscountOffers).toEqual(false)
  })

  it('has a functions', () => {
    expect(typeof ModalOrderProjectFromUs.methods.handleCheckboxesChange).toBe('function')
  })

  it('call functions with params and change variables state', () => {
    wrapper.vm.handleCheckboxesChange({ privacy: true, discountOffers: true })
    expect(wrapper.vm.$data.agreeWithPrivacyPolicy && wrapper.vm.$data.agreeToGetMadDevsDiscountOffers).toEqual(true)
  })

  it('sendForm should add new object in $data.form', () => {
    const form = {
      templateId: 304632,
      variables: {
        agreeToGetMadDevsDiscountOffers: 'No',
        agreeWithPrivacyPolicy: 'No',
        email: '',
        emailTo: '',
        fullName: '',
        subject: 'Marketing',
        phoneNumber: '',
        company: '',
        projectDescription: '',
        modalTitle: 'Mad Devs Website Forms',
      },
    }
    expect(wrapper.vm.$data.form).toEqual('')
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
    wrapper.vm.$data.projectDescription = 'test'
    wrapper.vm.$data.company = 'test'
    wrapper.vm.$data.agreeWithPrivacyPolicy = true
    wrapper.vm.$data.agreeToGetMadDevsDiscountOffers = true
    wrapper.vm.$data.isEmailSent = true

    wrapper.vm.resetForm()
    expect(
      wrapper.vm.$data.fullName &&
        wrapper.vm.$data.email &&
        wrapper.vm.$data.form &&
        wrapper.vm.$data.projectDescription &&
        wrapper.vm.$data.company,
    ).toBeNull()
    expect(
      wrapper.vm.$data.agreeWithPrivacyPolicy &&
        wrapper.vm.$data.agreeToGetMadDevsDiscountOffers &&
        wrapper.vm.$data.isEmailSent,
    ).toEqual(false)
  })
})
