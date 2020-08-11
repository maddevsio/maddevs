import {
  mount
} from '@vue/test-utils';
import StableScalable from '@/components/GoDee/StableScalable';

describe('Stable Scalable', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(StableScalable);
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
