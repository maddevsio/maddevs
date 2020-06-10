import {
  mount
} from '@vue/test-utils';
import InfrastructureAuditModal from '@/components/Modals/infrastructure-audit-modal';

describe('Infrastructure Audit Modal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(InfrastructureAuditModal, {
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
    expect(typeof InfrastructureAuditModal.data).toBe('function');
    const defaultData = InfrastructureAuditModal.data();
    expect(
      defaultData.agreeWithPrivacyPolicy &&
      defaultData.agreeToGetMadDevsDiscountOffers
    ).toEqual(false);
    expect(defaultData.inputId).toEqual('infrastructure-audit');
    expect(defaultData.options).toHaveLength(7);
    expect(defaultData.fieldName).toEqual('Where is your project hosted?');
    expect(defaultData.emitMethodName).toEqual('getSelectedProjectHost');
    expect(defaultData.sectionIsRequired).toEqual(false);
  });

  test('has a functions', () => {
    expect(
      typeof InfrastructureAuditModal.methods.getPrivacyCheckboxState && 
      typeof InfrastructureAuditModal.methods.getDiscountOffersCheckboxState &&
      typeof InfrastructureAuditModal.methods.getSelectedProjectHost
    ).toBe('function');
  });

  test('call functions with params and change variables state', () => {
    wrapper.vm.getPrivacyCheckboxState(true);
    wrapper.vm.getDiscountOffersCheckboxState(true);
    wrapper.vm.getSelectedProjectHost('Digital Ocean');

    expect(
      wrapper.vm.$data.agreeWithPrivacyPolicy &&
      wrapper.vm.$data.agreeToGetMadDevsDiscountOffers
    ).toEqual(true);
    expect(wrapper.vm.$data.selectedProjectHost).toEqual('Digital Ocean');
  });
});
