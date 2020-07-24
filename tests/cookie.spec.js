import {
  mount
} from '@vue/test-utils';
import Cookie from '@/components/ui/cookie';

describe('Cookie', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Cookie);
  });

  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  it('has a mounted hook', () => {
    expect(typeof Cookie.mounted).toBe('function');
  });

  it('hideCookieNotif should change value for cookieActive', () => {
    wrapper.vm.$data.cookieActive = true;
    wrapper.vm.hideCookieNotif();
    expect(wrapper.vm.$data.cookieActive).toBe(false);
  });
});