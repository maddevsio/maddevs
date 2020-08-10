import {
  mount
} from '@vue/test-utils';
import DevelopmentProcess from '@/components/GoDee/DevelopmentProcess';

describe('DevelopmentProcess', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(DevelopmentProcess);
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
