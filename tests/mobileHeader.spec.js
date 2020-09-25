import { mount } from '@vue/test-utils';
import mobileHeader from '@/components/Header/mobile-header';

describe('Mobile Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(mobileHeader, {
      stubs: ['router-link', 'perfect-scrollbar']
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

  test('switch state for mobileHeaderIsOpen variable when call function', () => {
    wrapper.vm.toggleMobileHeader();
    expect(wrapper.vm.$data.mobileHeaderIsOpen).toEqual(true);

    wrapper.vm.toggleMobileHeader();
    expect(wrapper.vm.$data.mobileHeaderIsOpen).toEqual(false);
  });
});
