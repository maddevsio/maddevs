import {
  mount
} from '@vue/test-utils';
import Result from '@/components/GoDee/Result';

describe('Result', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Result);
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
