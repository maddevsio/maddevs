import {
  mount
} from '@vue/test-utils';
import TechnicalSupport from '@/components/GoDee/TechnicalSupport';

describe('Technical Support', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(TechnicalSupport);
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
