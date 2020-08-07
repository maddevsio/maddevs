import {
  mount
} from '@vue/test-utils';
import RouteOptimization from '@/components/GoDee/RouteOptimization';

describe('Route Optimization', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(RouteOptimization);
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
