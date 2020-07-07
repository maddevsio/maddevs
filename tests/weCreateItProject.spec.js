import {
  mount
} from '@vue/test-utils';
import WeCreateItProjectFor from '@/components/About/WeCreateItProjectFor';

describe('We Create It Project For', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(WeCreateItProjectFor);
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
