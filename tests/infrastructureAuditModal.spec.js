import { mount, createLocalVue } from '@vue/test-utils'
import InfrastructureAuditModal from '@/components/Modals/infrastructure-audit-modal'
import Vuelidate from 'vuelidate'

const localVue = createLocalVue()

localVue.use(Vuelidate)

describe('infrastructure Audit Modal', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(InfrastructureAuditModal, {
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
    expect(typeof InfrastructureAuditModal.data).toBe('function')
    const defaultData = InfrastructureAuditModal.data()
    expect(defaultData.agreeWithPrivacyPolicy && defaultData.agreeToGetMadDevsDiscountOffers).toEqual(false)
    expect(defaultData.inputId).toEqual('infrastructure-audit')
    expect(defaultData.options).toHaveLength(7)
    expect(defaultData.fieldName).toEqual('Where is your project hosted?')
    expect(defaultData.emitMethodName).toEqual('getSelectedProjectHost')
    expect(defaultData.sectionIsRequired).toEqual(false)
  })

  it('has a functions', () => {
    expect(
      typeof InfrastructureAuditModal.methods.getPrivacyCheckboxState &&
        typeof InfrastructureAuditModal.methods.getDiscountOffersCheckboxState &&
        typeof InfrastructureAuditModal.methods.getSelectedProjectHost,
    ).toBe('function')
  })

  it('call functions with params and change variables state', () => {
    wrapper.vm.getPrivacyCheckboxState(true)
    wrapper.vm.getDiscountOffersCheckboxState(true)
    wrapper.vm.getSelectedProjectHost('Digital Ocean')

    expect(wrapper.vm.$data.agreeWithPrivacyPolicy && wrapper.vm.$data.agreeToGetMadDevsDiscountOffers).toEqual(true)
    expect(wrapper.vm.$data.selectedProjectHost).toEqual('Digital Ocean')
  })

  it('sendForm should add new object in $data.form', () => {
    const form = {
      templateId: 304628,
      variables: {
        agreeToGetMadDevsDiscountOffers: 'No',
        agreeWithPrivacyPolicy: 'No',
        email: '',
        emailTo: '',
        fullName: '',
        subject: 'Marketing',
        phoneNumber: '',
        company: '',
        selectedProjectHost: '',
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
    wrapper.vm.$data.selectedProjectHost = 'test'
    wrapper.vm.$data.company = 'test'
    wrapper.vm.$data.agreeWithPrivacyPolicy = true
    wrapper.vm.$data.agreeToGetMadDevsDiscountOffers = true
    wrapper.vm.$data.isEmailSent = true

    wrapper.vm.resetForm()
    expect(
      wrapper.vm.$data.fullName &&
        wrapper.vm.$data.email &&
        wrapper.vm.$data.form &&
        wrapper.vm.$data.selectedProjectHost &&
        wrapper.vm.$data.company,
    ).toBeNull()
    expect(
      wrapper.vm.$data.agreeWithPrivacyPolicy &&
        wrapper.vm.$data.agreeToGetMadDevsDiscountOffers &&
        wrapper.vm.$data.isEmailSent,
    ).toEqual(false)
  })
})
