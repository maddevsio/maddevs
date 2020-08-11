import {
  mount
} from '@vue/test-utils';
import Impact from '@/components/GoDee/Impact';

describe('Impact', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Impact);
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
