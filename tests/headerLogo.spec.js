import {
  mount
} from '@vue/test-utils';
import headerLogo from '@/components/svg/headerLogo';

describe('Header logo', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(headerLogo);
  });

  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  it('has a functions', () => {
    expect(typeof wrapper.vm.handleScroll).toBe('function');
  });

  it('headerLogoTextDisplayState should to be equal true', () => {
    Object.defineProperty(window, 'pageYOffset', {
      value: 100
    });
    wrapper.vm.handleScroll();
    expect(wrapper.vm.$data.headerLogoTextDisplayState).toBe(true);
  });

  it('headerLogoTextDisplayState should to be equal false', () => {
    Object.defineProperty(window, 'pageYOffset', {
      value: 99
    });
    wrapper.vm.handleScroll();
    expect(wrapper.vm.$data.headerLogoTextDisplayState).toBe(false);
  });
});
