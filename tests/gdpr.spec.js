import { mount } from '@vue/test-utils';
import GDPR from '@/components/GDPR';

describe('GDPR', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(GDPR);
  });
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
