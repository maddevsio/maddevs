import {
  mount
} from '@vue/test-utils';
import Monitoring from '@/components/GoDee/Monitoring';

describe('Monitoring', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Monitoring);
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
