import {
  mount
} from '@vue/test-utils';
import HeaderNambaFood from '@/components/Cases/HeaderNambaFood';

describe('HeaderNambaFood', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(HeaderNambaFood);
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
