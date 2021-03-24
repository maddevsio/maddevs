import { mount } from '@vue/test-utils';
import DividerSlice from '../client/components/Blog/slices/DividerSlice';

describe('divider slice component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(DividerSlice);
  });

  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
