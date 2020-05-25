import {
  mount
} from '@vue/test-utils';
import mobileModal from '@/components/ui/mobile-modal';

describe('Frontend modal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(mobileModal, {
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
    expect(typeof mobileModal.data).toBe('function');
    const defaultData = mobileModal.data();
    expect(
      defaultData.agreeWithPrivacyPolicy &&
      defaultData.agreeToGetMadDevsDiscountOffers
    ).toEqual(false);
    expect(defaultData.inputId).toEqual('mobile');
  });

  test('has a functions', () => {
    expect(
      typeof mobileModal.methods.getPrivacyCheckboxState && 
      typeof mobileModal.methods.getDiscountOffersCheckboxState
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
