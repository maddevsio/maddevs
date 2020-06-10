import {
  mount
} from '@vue/test-utils';
import OrderProjectFromUsModal from '@/components/Modals/order-project-from-us-modal';

describe('Order Project From Us Modal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(OrderProjectFromUsModal, {
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
});
