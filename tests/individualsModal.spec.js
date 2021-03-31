import { mount, createLocalVue } from '@vue/test-utils'
import ModalIndividuals from '@/components/core/modals/ModalIndividuals'
import Vuelidate from 'vuelidate'

const localVue = createLocalVue()

localVue.use(Vuelidate)

describe('individuals modal', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(ModalIndividuals, {
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
    expect(typeof ModalIndividuals.data).toBe('function')
    const defaultData = ModalIndividuals.data()
    expect(defaultData.agreeWithPrivacyPolicy && defaultData.agreeToGetMadDevsDiscountOffers).toEqual(false)
  })

  it('has a functions', () => {
    expect(typeof ModalIndividuals.methods.handleCheckboxesChange).toBe('function')
  })

  it('call functions with params and change variables state', () => {
    wrapper.vm.handleCheckboxesChange({ privacy: true, discountOffers: true })
    expect(wrapper.vm.$data.agreeWithPrivacyPolicy && wrapper.vm.$data.agreeToGetMadDevsDiscountOffers).toEqual(true)
  })

  it('sendForm should add new object in $data.form', () => {
    const form = {
      templateId: 304625,
      variables: {
        agreeToGetMadDevsDiscountOffers: 'No',
        agreeWithPrivacyPolicy: 'No',
        email: '',
        emailTo: '',
        fullName: '',
        subject: 'Marketing',
        phoneNumber: '',
        interestedExpertise: '',
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
    wrapper.vm.$data.interestedExpertise = 'test'
    wrapper.vm.$data.projectDescription = 'test'
    wrapper.vm.$data.agreeWithPrivacyPolicy = true
    wrapper.vm.$data.agreeToGetMadDevsDiscountOffers = true
    wrapper.vm.$data.isEmailSent = true

    wrapper.vm.resetForm()
    expect(
      wrapper.vm.$data.fullName &&
        wrapper.vm.$data.email &&
        wrapper.vm.$data.form &&
        wrapper.vm.$data.interestedExpertise &&
        wrapper.vm.$data.projectDescription,
    ).toBeNull()
    expect(
      wrapper.vm.$data.agreeWithPrivacyPolicy &&
        wrapper.vm.$data.agreeToGetMadDevsDiscountOffers &&
        wrapper.vm.$data.isEmailSent,
    ).toEqual(false)
  })
})
