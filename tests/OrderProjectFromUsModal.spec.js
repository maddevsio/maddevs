import {
  mount,
  createLocalVue
} from '@vue/test-utils';
import OrderProjectFromUsModal from '@/components/Modals/order-project-from-us-modal';
import Vuelidate from 'vuelidate';

const localVue = createLocalVue();

localVue.use(Vuelidate);

describe('Order Project From Us Modal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(OrderProjectFromUsModal, {
      localVue,
      stubs: ['modal'],
      mocks: {
        $store: {
          dispatch: () => new Promise((rs, rj) => rs({status: 200}))
        },
        $nuxt: {
          $emit: jest.fn(),
          $on: jest.fn()
        }
      }
    });
    wrapper.vm.$refs = { 
      checkboxes: {
        reset: jest.fn()
      },
      form: {
        reset: jest.fn()
      }
    };
  });

  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  test('sets the correct default data', () => {
    expect(typeof OrderProjectFromUsModal.data).toBe('function');
    const defaultData = OrderProjectFromUsModal.data();
    expect(
      defaultData.agreeWithPrivacyPolicy &&
      defaultData.agreeToGetMadDevsDiscountOffers
    ).toEqual(false);
    expect(defaultData.inputId).toEqual('order-project-from-us');
  });

  test('has a functions', () => {
    expect(
      typeof OrderProjectFromUsModal.methods.getPrivacyCheckboxState && 
      typeof OrderProjectFromUsModal.methods.getDiscountOffersCheckboxState
    ).toBe('function');
  });

  test('call functions with params and change variables state', () => {
    wrapper.vm.getPrivacyCheckboxState(true);
    wrapper.vm.getDiscountOffersCheckboxState(true);

    expect(
      wrapper.vm.$data.agreeWithPrivacyPolicy &&
      wrapper.vm.$data.agreeToGetMadDevsDiscountOffers
    ).toEqual(true);
  });

  test('sendForm should add new object in $data.form', () => {
    const form = {
      'templateId': 304632,
      'variables': {
        'agreeToGetMadDevsDiscountOffers': 'No',
        'agreeWithPrivacyPolicy': 'No',
        'email': '',
        'emailTo': 'team@maddevs.io',
        'fullName': '',
        'subject': 'Marketing',
        'phoneNumber': '',
        'company': '',
        'projectDescription': '',
        'modalTitle': 'Mad Devs Website Forms'
      }
    };
    expect(wrapper.vm.$data.form).toEqual('');
    wrapper.vm.sendForm(true);
    expect(wrapper.vm.$data.form).toEqual(form);
  });

  test('should rest values in data instances', () => {
    // Set mock data for data instances
    wrapper.vm.$data.fullName = 'Name';
    wrapper.vm.$data.email = 'email@mail.com';
    wrapper.vm.$data.projectDescriber = 'Project Describer';
    wrapper.vm.$data.form = {
      value1: 'value1',
      value2: 'value2'
    };
    wrapper.vm.$data.projectDescription = 'test';
    wrapper.vm.$data.company = 'test';
    wrapper.vm.$data.agreeWithPrivacyPolicy = true;
    wrapper.vm.$data.agreeToGetMadDevsDiscountOffers = true;
    wrapper.vm.$data.isEmailSent = true;

    wrapper.vm.resetForm();
    expect(
      wrapper.vm.$data.fullName &&
      wrapper.vm.$data.email &&
      wrapper.vm.$data.form &&
      wrapper.vm.$data.projectDescription &&
      wrapper.vm.$data.company
    ).toEqual(null);
    expect(
      wrapper.vm.$data.agreeWithPrivacyPolicy &&
      wrapper.vm.$data.agreeToGetMadDevsDiscountOffers &&
      wrapper.vm.$data.isEmailSent
    ).toEqual(false);
  });
});
