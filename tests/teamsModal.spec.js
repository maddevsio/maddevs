import {
  mount
} from '@vue/test-utils';
import TeamsModal from '@/components/ui/teams-modal';

describe('Teams Modal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(TeamsModal, {
      stubs: ['modal']
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
    expect(typeof TeamsModal.data).toBe('function');
    const defaultData = TeamsModal.data();
    expect(
      defaultData.agreeWithPrivacyPolicy &&
      defaultData.agreeToGetMadDevsDiscountOffers
    ).toEqual(false);
    expect(defaultData.inputId).toEqual('teams');
    expect(defaultData.selectedTeamSize).toEqual(false);
  });

  test('has a functions', () => {
    expect(
      typeof TeamsModal.methods.getPrivacyCheckboxState && 
      typeof TeamsModal.methods.getDiscountOffersCheckboxState && 
      typeof TeamsModal.methods.getTeamSize
    ).toBe('function');
  });

  test('call functions with params and change variables state', () => {
    wrapper.vm.getPrivacyCheckboxState(true);
    wrapper.vm.getDiscountOffersCheckboxState(true);
    wrapper.vm.getTeamSize('Less than 5');

    expect(
      wrapper.vm.$data.agreeWithPrivacyPolicy &&
      wrapper.vm.$data.agreeToGetMadDevsDiscountOffers
    ).toEqual(true);
    expect(wrapper.vm.$data.selectedTeamSize).toEqual('Less than 5');
  });
});
