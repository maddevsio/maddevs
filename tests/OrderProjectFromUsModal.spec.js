import {
  mount
} from '@vue/test-utils';
import OrderProjectFromUsModal from '@/components/Modals/order-project-from-us-modal';

describe('Order Project From Us Modal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(OrderProjectFromUsModal, {
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
      typeof OrderProjectFromUsModal.methods.getDiscountOffersCheckboxState &&
      typeof OrderProjectFromUsModal.methods.autosize
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

  test('autosize function should add value in event key', () => {
    const event = {
      target: {
        style: {
          height: ''
        },
        scrollHeight: 100
      }
    }

    wrapper.vm.autosize(event);
    expect(event.target.style.height).toEqual('100px');
  });
});
