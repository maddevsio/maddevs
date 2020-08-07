import {
  mount
} from '@vue/test-utils';
import TripsMonitor from '@/components/GoDee/TripsMonitor';

describe('Trips Monitor', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(TripsMonitor);
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
