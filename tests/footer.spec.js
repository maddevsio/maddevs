import {
  mount
} from '@vue/test-utils';
import Footer from '@/components/Footer';

describe('Footer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Footer);
  });

  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //
});
