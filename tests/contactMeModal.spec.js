import {
  mount
} from '@vue/test-utils';
import contactMeModal from '@/components/Modals/contact-me-modal';

describe('Contact me modal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(contactMeModal, {
      stubs: ['ValidationProvider', 'ValidationObserver', 'modal']
    });
  });

  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  test('sets the correct default data', () => {
    expect(typeof contactMeModal.data).toBe('function');
    const defaultData = contactMeModal.data();
    expect(
      defaultData.agreeWithPrivacyPolicy &&
      defaultData.agreeToGetMadDevsDiscountOffers
    ).toEqual(false);
    expect(defaultData.inputId).toEqual('contact-me');
  });

  test('has a functions', () => {
    expect(
      typeof contactMeModal.methods.getPrivacyCheckboxState && 
      typeof contactMeModal.methods.getDiscountOffersCheckboxState
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
});
