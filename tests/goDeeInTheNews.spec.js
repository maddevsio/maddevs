import {
  mount
} from '@vue/test-utils';
import GoDeeInTheNews from '@/components/GoDee/GoDeeInTheNews';

describe('GoDeeInTheNews', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(GoDeeInTheNews);
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
