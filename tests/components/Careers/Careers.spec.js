import { createLocalVue, shallowMount } from '@vue/test-utils'
import Careers from '@/components/Careers/Careers'
import Vuelidate from 'vuelidate'
import { render } from '@testing-library/vue'

const localVue = createLocalVue()

localVue.use(Vuelidate)

const mocks = {
  $v: {
    name: {
      $touch: jest.fn(),
    },
    position: {
      $touch: jest.fn(),
    },
    grade: {
      $touch: jest.fn(),
    },
    email: {
      $touch: jest.fn(),
    },
    cvFile: {
      $touch: jest.fn(),
    },
    $reset: jest.fn(),
    validationGroup: {},
  },
  $store: {
    dispatch: jest.fn(),
  },
  buildEmail: jest.fn(),
  resetForm: jest.fn(),
  $refs: {
    fileInput: {
      reset: jest.fn(),
    },
    radioButtons: {
      reset: jest.fn(),
    },
  },
}

describe('Careers component', () => {
  it('should render correctly', () => {
    const { container } = render(Careers, {
      localVue,
    })

    expect(container).toMatchSnapshot()
  })

  it('should work touch handler', () => {
    const wrapper = shallowMount(Careers, {
      localVue,
      mocks,
    })

    wrapper.vm.$options.methods.handleFileSelect.call(mocks)

    expect(mocks.$v.cvFile.$touch).toHaveBeenCalledTimes(1)
  })

  it('should work send form', async () => {
    const wrapper = shallowMount(Careers, {
      localVue,
      mocks,
    })

    wrapper.vm.$options.methods.submitForm.call(mocks)

    await expect(mocks.buildEmail).toHaveBeenCalledTimes(1)
    expect(mocks.resetForm).toHaveBeenCalledTimes(1)
    expect(mocks.$store.dispatch).toHaveBeenCalledTimes(1)
  })

  it('should work reset form', () => {
    const wrapper = shallowMount(Careers, {
      localVue,
      mocks,
    })

    wrapper.vm.$options.methods.resetForm.call(mocks)

    expect(mocks.$v.$reset).toHaveBeenCalledTimes(1)
    expect(mocks.$refs.fileInput.reset).toHaveBeenCalledTimes(1)
    expect(mocks.$refs.radioButtons.reset).toHaveBeenCalledTimes(1)
  })
})
