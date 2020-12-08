import {
  mount
} from '@vue/test-utils';
import Header from '@/components/Cases/Header';

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Header);
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
