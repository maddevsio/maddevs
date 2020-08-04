import {
  mount
} from '@vue/test-utils';
import Features from '@/components/GoDee/Features';

describe('Features', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Features);
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
