import { mount } from '@vue/test-utils';
import NDA from '@/components/NDA';

describe('NDA', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(NDA);
  });
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
