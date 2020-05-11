import {
  mount
} from '@vue/test-utils';
import WhyUs from '@/components/About/WhyUs';

describe('Why Us?', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(WhyUs);
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
