import {
  mount
} from '@vue/test-utils';
import ServicesBanner from '@/components/Banner/ServicesBanner';

describe('Form checkboxes', () => {
  let wrapper;

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: '/'
      }
    };
    wrapper = mount(ServicesBanner, {
      stubs: ['nuxt-link']
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
});
