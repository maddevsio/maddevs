import {
  mount
} from '@vue/test-utils';
import teamHeadcountModal from '@/components/Modals/team-headcount-modal';

describe('Team headcount modal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(teamHeadcountModal, {
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
    expect(typeof teamHeadcountModal.data).toBe('function');
    const defaultData = teamHeadcountModal.data();
    expect(
      defaultData.agreeWithPrivacyPolicy &&
      defaultData.agreeToGetMadDevsDiscountOffers
    ).toEqual(false);
    expect(defaultData.inputId).toEqual('team-headcount');
  });

  test('has a functions', () => {
    expect(
      typeof teamHeadcountModal.methods.getPrivacyCheckboxState && 
      typeof teamHeadcountModal.methods.getDiscountOffersCheckboxState
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
