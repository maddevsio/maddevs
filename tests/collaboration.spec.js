import {
  mount
} from '@vue/test-utils';
import Collaboration from '@/components/GoDee/Collaboration';

describe('Collaboration', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Collaboration);
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
