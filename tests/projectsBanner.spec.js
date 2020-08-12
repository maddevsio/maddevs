import {
  mount
} from '@vue/test-utils';
import ProjectsBanner from '@/components/Banner/ProjectsBanner';

describe('Projects banner', () => {
  let wrapper;

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: '/'
      }
    };
    wrapper = mount(ProjectsBanner, {
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
