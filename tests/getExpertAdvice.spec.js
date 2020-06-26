import {
  mount
} from '@vue/test-utils';
import getExpertAdvice from '@/components/Modals/get-expert-advice-modal';

describe('Technology stack modal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(getExpertAdvice, {
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
    expect(typeof getExpertAdvice.data).toBe('function');
    const defaultData = getExpertAdvice.data();
    expect(
      defaultData.agreeWithPrivacyPolicy &&
      defaultData.agreeToGetMadDevsDiscountOffers
    ).toEqual(false);
    expect(defaultData.inputId).toEqual('get-expert-advice');
  });

  test('has a functions', () => {
    expect(
      typeof getExpertAdvice.methods.getPrivacyCheckboxState && 
      typeof getExpertAdvice.methods.getDiscountOffersCheckboxState &&
      typeof getExpertAdvice.methods.autosize
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
