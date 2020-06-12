import {
  mount
} from '@vue/test-utils';
import footerForm from '@/components/Footer/footer-form';

describe('Footer form', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(footerForm, {
      stubs: ['ValidationObserver', 'ValidationProvider', 'modal']
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
    expect(typeof footerForm.data).toBe('function');
    const defaultData = footerForm.data();
    expect(
      defaultData.agreeWithPrivacyPolicy &&
      defaultData.agreeToGetMadDevsDiscountOffers
    ).toEqual(false);
  });

  test('has a functions', () => {
    expect(
      typeof footerForm.methods.getPrivacyCheckboxState && 
      typeof footerForm.methods.getDiscountOffersCheckboxState &&
      typeof footerForm.methods.autosize
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
