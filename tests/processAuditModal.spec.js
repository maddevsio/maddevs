import {
  mount
} from '@vue/test-utils';
import processAuditModal from '@/components/Modal/process-audit-modal';

describe('Process audit modal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(processAuditModal, {
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
    expect(typeof processAuditModal.data).toBe('function');
    const defaultData = processAuditModal.data();
    expect(
      defaultData.agreeWithPrivacyPolicy &&
      defaultData.agreeToGetMadDevsDiscountOffers
    ).toEqual(false);
    expect(defaultData.inputId).toEqual('process-audit');
  });

  test('has a functions', () => {
    expect(
      typeof processAuditModal.methods.getPrivacyCheckboxState && 
      typeof processAuditModal.methods.getDiscountOffersCheckboxState
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
