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

  it('should work touch handler without file', () => {
    const wrapper = shallowMount(Careers, {
      localVue,
      mocks,
    })

    wrapper.vm.$options.methods.handleFileSelect.call({ $v: {} })

    expect(mocks.$v.cvFile.$touch).toHaveBeenCalledTimes(0)
  })

  it('should work touch handler', () => {
    const wrapper = shallowMount(Careers, {
      localVue,
      mocks,
    })

    wrapper.vm.$options.methods.handleFileSelect.call(mocks)

    expect(mocks.$v.cvFile.$touch).toHaveBeenCalledTimes(1)
  })

  it('should not work send form if have invaid param', async () => {
    const wrapper = shallowMount(Careers, {
      localVue,
      mocks,
    })

    mocks.$v.validationGroup.$invalid = true
    wrapper.vm.$options.methods.submitForm.call(mocks)

    await expect(mocks.buildEmail).toHaveBeenCalledTimes(0)
    expect(mocks.resetForm).toHaveBeenCalledTimes(0)
    expect(mocks.$store.dispatch).toHaveBeenCalledTimes(0)
  })

  it('should work send form', async () => {
    mocks.$v.validationGroup.$invalid = false
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

  it('should work build email function', async () => {
    const toBase64Mock = jest.fn()
    mocks.toBase64 = () => {
      toBase64Mock()
      return 'base64file'
    }

    const callObject = {
      ...mocks,
      name: 'John Johnson',
      position: 'Frontend',
      email: 'johnhohnson@maddevs.io',
      cvFile: { name: 'some-name' },
      linkedin: '',
      grade: { value: 'Senior' },
    }

    const wrapper = shallowMount(Careers, {
      localVue,
      mocks,
      data: () => ({
        name: 'John Johnson',
        position: 'Frontend',
        email: 'johnhohnson@maddevs.io',
        cvFile: { name: 'some-name' },
        linkedin: '',
        grade: { value: 'Senior' },
      }),
    })

    const result = await wrapper.vm.$options.methods.buildEmail.call(callObject)
    await expect(toBase64Mock).toHaveBeenCalledTimes(1)
    expect(result.variables.subject).toBe(`Job Candidate Application for ${callObject.position}`)
    expect(result.variables.positionValue).toBe(callObject.grade.value)
  })

  it('should work base 64 function', async () => {
    const wrapper = shallowMount(Careers, {
      localVue,
      mocks,
    })

    const result = await wrapper.vm.$options.methods.toBase64.call(mocks, new File([], 'testfile.png', undefined))

    expect(result).toBe('data:application/octet-stream;base64,')
  })
})
