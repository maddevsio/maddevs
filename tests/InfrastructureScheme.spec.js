import {
  mount
} from '@vue/test-utils';
import InfrastructureScheme from '@/components/GoDee/InfrastructureScheme';

describe('Infrastructure Scheme', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(InfrastructureScheme);
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
