import {
  mount
} from '@vue/test-utils';
import ControlPanel from '@/components/GoDee/ControlPanel';

describe('ControlPanel', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ControlPanel);
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
