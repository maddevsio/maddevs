import {
  mount
} from '@vue/test-utils';
import AboutGoDee from '@/components/GoDee/AboutGoDee';

describe('About GoDee', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(AboutGoDee);
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
