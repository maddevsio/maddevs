import {
  mount
} from '@vue/test-utils';
import GoDeeBanner from '@/components/GoDee/Banner';

describe('GoDee banner', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(GoDeeBanner);
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
