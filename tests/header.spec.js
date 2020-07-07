import {
  mount
} from '@vue/test-utils';
import Header from '@/components/Header';

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Header, {
      stubs: ['router-link', 'modal', 'perfect-scrollbar']
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

  it('has a functions', () => {
    expect(typeof wrapper.vm.handleScroll).toBe('function');
  });

  it('sets the correct default data', () => {
    expect(typeof Header.data).toBe('function');
    const defaultData = Header.data();
    expect(defaultData.modalWindowName).toBe('contact-me-modal');
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
