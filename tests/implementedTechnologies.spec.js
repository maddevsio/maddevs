import {
  mount
} from '@vue/test-utils';
import ImplementedTechnologies from '@/components/GoDee/ImplementedTechnologies';

describe('Implemented Technologies', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ImplementedTechnologies);
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
