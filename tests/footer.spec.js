import { mount } from '@vue/test-utils';
import Footer from '@/components/Footer';

describe('Footer', () => {
  let wrapper;

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: '/'
      }
    };
    wrapper = mount(Footer, {
      stubs: ['ValidationProvider', 'ValidationObserver', 'router-link']
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

  it('correctly sets the route when mounted', () => {
    expect(wrapper.vm.$data.currentPageName).toBe('/');
  });

  test('correctly sets the current pages name and class', () => {
    const $route = {
      path: '/gdpr'
    };

    wrapper = mount(Footer, {
      mocks: {
        $route
      }
    });

    wrapper.vm.$data.currentPageName = 'gdpr';
    expect(wrapper.vm.$route.path).toBe('/gdpr');
    expect(wrapper.vm.$data.currentPageName).toBe('gdpr');

    let wrapperClass = wrapper.findAll('.gdpr');
    expect(wrapperClass).toEqual({
      selector: '.gdpr'
    });
  });
});
