import { shallowMount } from '@vue/test-utils';
import ServicesPage from '@/pages/services';

describe('Services page', () => {
  let wrapper;

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: null
      }
    };
    wrapper = shallowMount(ServicesPage);
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
    expect(wrapper.vm.$data.title).toEqual('Mad Devs: Custom Software Development and Mobile App Creation Services');
    expect(wrapper.vm.$data.description).toEqual('We deliver software engineering and mobile app development services, software testing and QA services, DevOps and IT consulting services to businesses of any size.');
    expect(wrapper.vm.$data.ogUrl).toEqual('https://maddevs.io/services/');
  });
});
