import {
  mount
} from '@vue/test-utils';
import SmartRoutePlaning from '@/components/GoDee/SmartRoutePlaning';

describe('Smart Route Planing', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(SmartRoutePlaning);
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
