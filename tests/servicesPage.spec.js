import {
  mount
} from '@vue/test-utils';
import ServicesPage from '@/pages/_lang/services';

describe('Services page', () => {
  let wrapper;

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: null
      }
    };
    wrapper = mount(ServicesPage, {
      stubs: ['ValidationObserver']
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
    expect(wrapper.vm.$data.title).toEqual('Mad Devs Services');
    expect(wrapper.vm.$data.description).toEqual('');
    expect(wrapper.vm.$data.ogUrl).toEqual('https://maddevs.io/services');
  });
});
