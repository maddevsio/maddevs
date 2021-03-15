import {
  mount,
  createLocalVue
} from '@vue/test-utils';
import IndexPage from '@/pages/index';
import Vuelidate from 'vuelidate';

const localVue = createLocalVue();

localVue.use(Vuelidate);

describe('Index page', () => {
  let wrapper;

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: null
      }
    };
    wrapper = mount(IndexPage, {
      localVue,
      stubs: ['client-only', 'nuxt-link']
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
    expect(wrapper.vm.$data.title).toEqual('Mad Devs: Custom Software Development Company');
    expect(wrapper.vm.$data.description).toEqual('Mad Devs develops enterprise-level custom software solutions & mobile apps for finance, transportation, logistics, security, edtech, cloudtech & advertising industries.');
    expect(wrapper.vm.$data.ogUrl).toEqual('https://maddevs.io/');
  });
});
