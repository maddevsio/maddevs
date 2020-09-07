import { shallowMount } from '@vue/test-utils';
import CareersForm from '@/components/Careers/CareersForm';

describe('CareersForm component', () => {
  let wrapper;
  const data = {
    isEmailSent: false,
    fullName: null,
    positionValue: null,
    positionTitle: null,
    email: null,
    emailTo: 'hr@maddevs.io',
    selectedFile: null,
    linkedinProfile: null,
    onSumbit: false,
    form: '',
    radioData: [
      { type: 'senior', label: 'Senior,' },
      { type: 'middle', label: 'Middle,' },
      { type: 'junior', label: 'Junior,' },
      { type: 'intern', label: 'Intern' }
    ]
  };

  beforeEach(() => {
    wrapper = shallowMount(CareersForm, {
      stubs: ['ValidationProvider', 'ValidationObserver'],
      mocks: {
        $refs: {
          nameInput: {
            focus: jest.fn()
          }
        },
        errors: false,
        onSumbit: false
      }
    });
    wrapper.vm.$refs = { 
      form: {
        reset: jest.fn()
      },
      fileInput: {
        reset: jest.fn()
      },
      radioButtons: {
        reset: jest.fn()
      }
    };
    wrapper.vm.$nextTick();
  });

  test('is Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('should check existence of data', () => {
    expect(wrapper.vm.$data).toStrictEqual(data);
  });

  test('onFileChanged method should set correct position', () => {
    const newPositionValue = null;
    CareersForm.methods.onFileChanged(newPositionValue);
    expect(wrapper.vm.$data.positionValue).toStrictEqual(newPositionValue);
  });

  test('sendData should add new object in $data.form', () => {
    const file = new Blob(['testing'], { type: 'application/pdf' });
    const form = {
      'templateId': 305491,
      'variables': {
        'email': '',
        'emailTo': 'hr@maddevs.io',
        'fullName': '',
        'subject': `Job Candidate Application for ${data.positionTitle}`,
        'positionValue': null,
        'positionTitle': '',
        'linkedinProfile': '',
        'attachment': {
          'base64': '',
          'name': ''
        }
      }
    };
    expect(wrapper.vm.$data.form).toEqual('');
    wrapper.vm.toBase64 = file => new Promise((res, rej) => res('string'));
    wrapper.vm.sendData();
    expect(wrapper.vm.$data.form).toEqual(form);
  });

  test('should rest values in data instances', () => {
    // Set mock data for data instances
    wrapper.vm.$data.fullName = 'Name';
    wrapper.vm.$data.email = 'email@mail.com';
    wrapper.vm.$data.form = {
      value1: 'value1',
      value2: 'value2'
    };

    wrapper.vm.resetForm();
    expect(
      wrapper.vm.$data.fullName &&
      wrapper.vm.$data.email &&
      wrapper.vm.$data.form
    ).toEqual(null);
  });

  test('toBase64 should return promise', () => {
    const file = new Blob(['testing'], { type: 'application/pdf' });
    const promise = new Promise((res, rej) => res());
    expect(wrapper.vm.toBase64(file)).toEqual(promise);
  });
});
