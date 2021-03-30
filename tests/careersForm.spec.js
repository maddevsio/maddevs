import { shallowMount, createLocalVue } from '@vue/test-utils'
import CareersForm from '@/components/Careers/Careers'
import Vuelidate from 'vuelidate'

const localVue = createLocalVue()

localVue.use(Vuelidate)

describe('careersForm component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(CareersForm, {
      localVue,
      mocks: {
        $refs: {
          nameInput: {
            focus: jest.fn(),
          },
        },
        errors: false,
        onSumbit: false,
      },
    })
    wrapper.vm.$refs = {
      form: {
        reset: jest.fn(),
      },
      fileInput: {
        reset: jest.fn(),
      },
      radioButtons: {
        reset: jest.fn(),
      },
    }
    wrapper.vm.$nextTick()
  })

  it('is Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should rest values in data instances', () => {
    // Set mock data for data instances
    wrapper.vm.$data.fullName = 'Name'
    wrapper.vm.$data.email = 'email@mail.com'
    wrapper.vm.$data.form = {
      value1: 'value1',
      value2: 'value2',
    }

    wrapper.vm.resetForm()
    expect(wrapper.vm.$data.fullName && wrapper.vm.$data.email && wrapper.vm.$data.form).toBeNull()
  })

  it('toBase64 should return promise', () => {
    const file = new Blob(['testing'], { type: 'application/pdf' })
    const promise = new Promise(resolve => resolve())
    expect(wrapper.vm.toBase64(file)).toEqual(promise)
  })
})
