import {
  mount
} from '@vue/test-utils';
import CareersBanner from '@/components/Banner/CareersBanner';

describe('Form checkboxes', () => {
  let wrapper;

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: '/'
      }
    };
    wrapper = mount(CareersBanner, {
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