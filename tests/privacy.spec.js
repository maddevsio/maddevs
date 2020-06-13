import { mount } from '@vue/test-utils';
import Privacy from '@/components/Privacy';

describe('Privacy', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Privacy);
  });
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
