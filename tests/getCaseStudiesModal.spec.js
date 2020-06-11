import {
  mount
} from '@vue/test-utils';
import GetCaseStudiesModal from '@/components/Modals/get-case-studies-modal';

describe('Contact me modal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(GetCaseStudiesModal, {
      stubs: ['ValidationProvider', 'ValidationObserver', 'modal', 'perfect-scrollbar']
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
    expect(typeof GetCaseStudiesModal.data).toBe('function');
    const defaultData = GetCaseStudiesModal.data();
    expect(
      defaultData.agreeWithPrivacyPolicy &&
      defaultData.agreeToGetMadDevsDiscountOffers
    ).toEqual(false);
    expect(defaultData.inputId).toEqual('case-studies');
  });

  test('has a functions', () => {
    expect(
      typeof GetCaseStudiesModal.methods.getPrivacyCheckboxState && 
      typeof GetCaseStudiesModal.methods.getDiscountOffersCheckboxState
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
