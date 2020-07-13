import {
  mount
} from '@vue/test-utils';
import ProjectsBanner from '@/components/Banner/ProjectsBanner';

describe('Form checkboxes', () => {
  let wrapper;

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: '/'
      }
    };
    wrapper = mount(ProjectsBanner, {
      stubs: ['router-link']
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