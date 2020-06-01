import {
  mount
} from '@vue/test-utils';
import technologyStackModal from '@/components/ui/technology-stack-modal';

describe('Technology stack modal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(technologyStackModal, {
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
    expect(typeof technologyStackModal.data).toBe('function');
    const defaultData = technologyStackModal.data();
    expect(
      defaultData.agreeWithPrivacyPolicy &&
      defaultData.agreeToGetMadDevsDiscountOffers
    ).toEqual(false);
    expect(defaultData.inputId).toEqual('technology-stack');
  });

  test('has a functions', () => {
    expect(
      typeof technologyStackModal.methods.getPrivacyCheckboxState && 
      typeof technologyStackModal.methods.getDiscountOffersCheckboxState
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