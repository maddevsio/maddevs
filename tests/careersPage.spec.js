import { mount, createLocalVue } from '@vue/test-utils';
import CareersPage from '@/pages/careers';
import Vuelidate from 'vuelidate';

const localVue = createLocalVue();

localVue.use(Vuelidate);

describe('careers page', () => {
  let wrapper;

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: null,
      },
    };
    wrapper = mount(CareersPage, {
      localVue,
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
    expect(wrapper.vm.$data.title).toEqual('Mad Devs Careers: Work with Us');
    expect(wrapper.vm.$data.description).toEqual(
      'Join our team of 100+ staff members working on unique projects, master new IT skills, and build a fantastic career path in software engineering, DevOps, or mobile app development.',
    );
    expect(wrapper.vm.$data.ogUrl).toEqual('https://maddevs.io/careers/');
  });
});
