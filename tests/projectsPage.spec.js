import {
  mount
} from '@vue/test-utils';
import ProjectsPage from '@/pages/projects';

describe('Projects page', () => {
  let wrapper;

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: null
      }
    };
    wrapper = mount(ProjectsPage, {
      stubs: ['ValidationObserver', 'nuxt-link']
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
    expect(wrapper.vm.$data.title).toEqual('Mad Devs Portfolio: Key Clients, Case Studies and Open Source Projects');
    expect(wrapper.vm.$data.description).toEqual('Check out our software engineering and mobile app development projects for companies from transportation, logistic, edtech, cloudtech, security, advertising, finance, and other industries.');
    expect(wrapper.vm.$data.ogUrl).toEqual('https://maddevs.io/projects');
  });
});
