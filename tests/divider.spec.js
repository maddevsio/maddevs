import {
  mount
} from '@vue/test-utils';
import DividerSlice from '../client/components/Blog/slices/DividerSlice';

describe('Divider slice component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(DividerSlice);
  });

  test('Is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
