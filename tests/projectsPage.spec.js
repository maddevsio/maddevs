import { mount, createLocalVue } from '@vue/test-utils';
import ProjectsPage from '@/pages/projects';
import Vuelidate from 'vuelidate';

const localVue = createLocalVue();

localVue.use(Vuelidate);

describe('projects page', () => {
  let wrapper;

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: null,
      },
    };
    wrapper = mount(ProjectsPage, {
      localVue,
      stubs: ['nuxt-link'],
    });
  });

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  it('sets the correctly data', () => {
    expect(wrapper.vm.$data.title).toEqual('Mad Devs Portfolio: Key Clients, Case Studies and Open Source Projects');
    expect(wrapper.vm.$data.description).toEqual(
      'Check out our software engineering and mobile app development projects for companies from transportation, logistic, edtech, cloudtech, security, advertising, finance, and other industries.',
    );
    expect(wrapper.vm.$data.ogUrl).toEqual('https://maddevs.io/projects/');
  });
});
