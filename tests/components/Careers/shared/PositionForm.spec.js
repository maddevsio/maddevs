/* eslint-disable jest/no-disabled-tests */
import Vuelidate from 'vuelidate'
import { render } from '@testing-library/vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import PositionForm from '@/components/Careers/shared/PositionForm'

jest.mock('@/api/ipInfo', () => (
  {
    getIPInfo: () => ({
      ip: 'ip',
      country_name: 'country',
      city: 'city',
    }),
  }
))

jest.mock('bowser', () => ({
  parse: () => ({
    browser: {
      name: 'Chrome',
      version: '91.0.4472.114',
    },
    os: {
      name: 'macOS',
      version: '10.15.7',
      versionName: 'Catalina',
    },
    platform: {
      type: 'desktop',
      vendor: 'Apple',
    },
  }),
}))

Object.defineProperty(global.window, 'location', { value: { href: 'pageUrl' }, writable: true })

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
  buildApplicantData: jest.fn(),
  resetForm: jest.fn(),
  sendVacancy: jest.fn(),
  $refs: {
    fileInput: {
      reset: jest.fn(),
    },
    radioButtons: {
      reset: jest.fn(),
    },
  },
}

describe('PositionForm component', () => {
  it('should render correctly', () => {
    const { container } = render(PositionForm, {
      localVue,
    })

    expect(container).toMatchSnapshot()
  })

  it('should work touch handler without file', () => {
    const wrapper = shallowMount(PositionForm, {
      localVue,
      mocks,
    })

    wrapper.vm.$options.methods.handleFileSelect.call({ $v: {} })

    expect(mocks.$v.cvFile.$touch).toHaveBeenCalledTimes(0)
  })

  it('should work touch handler', () => {
    const wrapper = shallowMount(PositionForm, {
      localVue,
      mocks,
    })

    wrapper.vm.$options.methods.handleFileSelect.call(mocks)

    expect(mocks.$v.cvFile.$touch).toHaveBeenCalledTimes(1)
  })

  it('should not work send form if have invaid param', async () => {
    const wrapper = shallowMount(PositionForm, {
      localVue,
      mocks,
    })

    mocks.$v.validationGroup.$invalid = true
    wrapper.vm.$options.methods.submitForm.call(mocks)

    await expect(mocks.buildApplicantData).toHaveBeenCalledTimes(0)
    expect(mocks.resetForm).toHaveBeenCalledTimes(0)
    expect(mocks.sendVacancy).toHaveBeenCalledTimes(0)
  })

  it('should work send form', async () => {
    mocks.$v.validationGroup.$invalid = false
    const wrapper = shallowMount(PositionForm, {
      localVue,
      mocks,
    })

    wrapper.vm.$options.methods.submitForm.call(mocks)

    await expect(mocks.buildApplicantData).toHaveBeenCalledTimes(1)
    expect(mocks.resetForm).toHaveBeenCalledTimes(1)
    expect(mocks.sendVacancy).toHaveBeenCalledTimes(1)
  })

  it('should work reset form', () => {
    const wrapper = shallowMount(PositionForm, {
      localVue,
      mocks,
    })

    wrapper.vm.$options.methods.resetForm.call(mocks)

    expect(mocks.$v.$reset).toHaveBeenCalledTimes(1)
    expect(mocks.$refs.fileInput.reset).toHaveBeenCalledTimes(1)
    expect(mocks.$refs.radioButtons.reset).toHaveBeenCalledTimes(1)
  })

  it('should work build applicant data function', async () => {
    process.env.emailHR = 'emailTo@maddevs.io'
    const toBase64Mock = jest.fn()
    mocks.toBase64 = () => {
      toBase64Mock()
      return 'base64file'
    }

    const callObject = {
      ...mocks,
      name: 'John Johnson',
      email: 'johnhohnson@maddevs.io',
      cvFile: { name: 'some-name' },
      linkedin: '',
      grade: { value: 'Senior' },
    }

    const wrapper = shallowMount(PositionForm, {
      localVue,
      mocks,
      props: {
        huntflowVacancyId: 123,
        position: 'Frontend',
      },
      data: () => ({
        name: 'John Johnson',
        email: 'johnhohnson@maddevs.io',
        cvFile: { name: 'some-name' },
        linkedin: '',
        grade: { value: 'Senior' },
      }),
    })

    const result = await wrapper.vm.$options.methods.buildApplicantData.call(callObject)
    const expectedResult = {
      body: {
        huntflow: {
          vacancyId: wrapper.vm.$props.huntflowVacancyId,
          firstName: callObject.name.split(' ')[0],
          middleName: '',
          lastName: callObject.name.split(' ')[1],
          email: callObject.email,
          positionTitle: wrapper.vm.$props.position,
          positionValue: callObject.grade.value,
          linkedinProfile: callObject.linkedin,
        },

        email: {
          templateId: 305491,
          variables: {
            fullName: callObject.name,
            email: callObject.email,
            emailTo: process.env.emailHR,
            linkedinProfile: callObject.linkedin,
            positionValue: callObject.grade.value,
            positionTitle: wrapper.vm.$props.position,
            subject: `Job Candidate Application for ${wrapper.vm.$props.position}`,
            modalTitle: 'Mad Devs Website Carrers Form',
            pageUrl: 'pageUrl',
            ip: 'ip',
            geoIp: 'Country: country, City: city',
            userBrowser: 'Name: Chrome, Version: 91.0.4472.114',
            userOS: 'Name: macOS, Version: 10.15.7, VersionName: Catalina',
            userPlatform: 'Type: desktop, Vendor: Apple',
            formLocation: '\'I want to work for Mad Devs\' button, vacancy page',
          },

          attachment: {
            base64: 'base64file',
            name: callObject.cvFile.name,
          },
        },
      },

      cvFile: callObject.cvFile,
    }

    await expect(toBase64Mock).toHaveBeenCalledTimes(1)
    expect(result).toEqual(expectedResult)
  })

  it('should work base 64 function', async () => {
    const wrapper = shallowMount(PositionForm, {
      localVue,
      mocks,
    })

    const result = await wrapper.vm.$options.methods.toBase64.call(mocks, new File([], 'testfile.png', undefined))

    expect(result).toBe('data:application/octet-stream;base64,')
  })
})
