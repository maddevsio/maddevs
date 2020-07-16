import {
  mount
} from '@vue/test-utils';
import IndexPage from '@/pages/_lang/index';

describe('Index page', () => {
  let wrapper;

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: null
      }
    };
    wrapper = mount(IndexPage, {
      stubs: ['ValidationObserver', 'client-only']
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

  test('Sets the correctly data', () => {
    expect(wrapper.vm.$data.title).toEqual('Mad Devs: Software & Mobile App Development Company');
    expect(wrapper.vm.$data.description).toEqual('We develop tailored software solutions for corporations using the present-day developer tools and technology stack. Mad Devs acts as a part of your extended team, and you get your systems properly administered and monitored');
    expect(wrapper.vm.$data.ogUrl).toEqual('https://maddevs.io');
  });
});
