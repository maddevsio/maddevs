import {
  mount
} from '@vue/test-utils';
import CareersPage from '@/pages/careers';

describe('Careers page', () => {
  let wrapper;

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: null
      }
    };
    wrapper = mount(CareersPage, {
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
    expect(wrapper.vm.$data.title).toEqual('Mad Devs Careers: Work with Us');
    expect(wrapper.vm.$data.description).toEqual('Join our team of 100+ staff members working on unique projects, master new IT skills, and build a fantastic career path in software engineering, DevOps, or mobile app development.');
    expect(wrapper.vm.$data.ogUrl).toEqual('https://maddevs.io/careers');
  });
});
