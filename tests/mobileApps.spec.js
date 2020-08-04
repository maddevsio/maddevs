import {
  mount
} from '@vue/test-utils';
import MobileApps from '@/components/GoDee/MobileApps';

describe('MobileApps', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(MobileApps);
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
