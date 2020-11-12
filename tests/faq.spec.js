import { mount } from '@vue/test-utils';
import FAQ from '@/components/FAQ';

describe('FAQ', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(FAQ);
  });
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
