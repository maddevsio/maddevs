import {
  mount
} from '@vue/test-utils';
import getYourTrustedItPartnerModal from '@/components/Modals/get-your-trusted-it-partner-modal';

describe('Get your trusted it partner modal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(getYourTrustedItPartnerModal, {
      stubs: ['ValidationProvider', 'ValidationObserver', 'modal', 'perfect-scrollbar']
    });
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
    expect(typeof getYourTrustedItPartnerModal.data).toBe('function');
    const defaultData = getYourTrustedItPartnerModal.data();
    expect(
      defaultData.agreeWithPrivacyPolicy &&
      defaultData.agreeToGetMadDevsDiscountOffers
    ).toEqual(false);
    expect(defaultData.inputId).toEqual('get-your-trusted-it-partner');
  });

  test('has a functions', () => {
    expect(
      typeof getYourTrustedItPartnerModal.methods.getPrivacyCheckboxState && 
      typeof getYourTrustedItPartnerModal.methods.getDiscountOffersCheckboxState &&
      typeof getYourTrustedItPartnerModal.methods.autosize
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
    };

    wrapper.vm.autosize(event);
    expect(event.target.style.height).toEqual('100px');
  });
});
