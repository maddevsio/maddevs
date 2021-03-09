import {
  mount,
  createLocalVue
} from '@vue/test-utils';
import TeamsModal from '@/components/Modals/teams-modal';
import Vuelidate from 'vuelidate';

const localVue = createLocalVue();

localVue.use(Vuelidate);

describe('Teams Modal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(TeamsModal, {
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
    wrapper.vm.$refs.checkboxes = {
      reset: jest.fn()
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
    expect(typeof TeamsModal.data).toBe('function');
    const defaultData = TeamsModal.data();
    expect(
      defaultData.agreeWithPrivacyPolicy &&
      defaultData.agreeToGetMadDevsDiscountOffers
    ).toEqual(false);
    expect(defaultData.inputId).toEqual('teams');
    expect(defaultData.selectedTeamSize).toEqual(null);
    expect(defaultData.options).toHaveLength(3);
    expect(defaultData.fieldName).toEqual('Expected team size');
    expect(defaultData.emitMethodName).toEqual('getTeamSize');
    expect(defaultData.sectionIsRequired).toEqual(true);
  });

  test('has a functions', () => {
    expect(
      typeof TeamsModal.methods.getPrivacyCheckboxState && 
      typeof TeamsModal.methods.getDiscountOffersCheckboxState && 
      typeof TeamsModal.methods.getTeamSize
    ).toBe('function');
  });

  test('call functions with params and change variables state', () => {
    wrapper.vm.getPrivacyCheckboxState(true);
    wrapper.vm.getDiscountOffersCheckboxState(true);
    wrapper.vm.getTeamSize('Less than 5');

    expect(
      wrapper.vm.$data.agreeWithPrivacyPolicy &&
      wrapper.vm.$data.agreeToGetMadDevsDiscountOffers
    ).toEqual(true);
    expect(wrapper.vm.$data.selectedTeamSize).toEqual('Less than 5');
  });

  test('sendForm should add new object in $data.form', () => {
    const form = {
      'templateId': 304637,
      'variables': {
        'agreeToGetMadDevsDiscountOffers': 'No',
        'agreeWithPrivacyPolicy': 'No',
        'email': '',
        'emailTo': 'team@maddevs.io',
        'fullName': '',
        'phoneNumber': '',
        'projectDescription': '',
        'selectedTeamSize': '',
        'subject': 'Marketing',
        'modalTitle': 'Mad Devs Website Forms'
      }
    };
    expect(wrapper.vm.$data.form).toEqual(null);
    wrapper.vm.sendForm(true);
    expect(wrapper.vm.$data.form).toEqual(form);
  });

  test('should reset values in data instances', () => {
    // Set mock data for data instances
    wrapper.vm.$data.fullName = 'Name';
    wrapper.vm.$data.email = 'email@mail.com';
    wrapper.vm.$data.phoneNumber = '+1232312312';
    wrapper.vm.$data.selectedTeamSize = '15';
    wrapper.vm.$data.projectDescription = 'Propject description';
    wrapper.vm.$data.form = {
      value1: 'value1',
      value2: 'value2'
    };
    wrapper.vm.$data.agreeWithPrivacyPolicy = true;
    wrapper.vm.$data.agreeToGetMadDevsDiscountOffers = true;

    wrapper.vm.resetForm();
    expect(
      wrapper.vm.$data.fullName &&
      wrapper.vm.$data.email &&
      wrapper.vm.$data.phoneNumber &&
      wrapper.vm.$data.selectedTeamSize &&
      wrapper.vm.$data.projectDescription &&
      wrapper.vm.$data.form
    ).toEqual(null);

    expect(
      wrapper.vm.$data.agreeWithPrivacyPolicy &&
      wrapper.vm.$data.agreeToGetMadDevsDiscountOffers
    ).toEqual(false);
  });
});
