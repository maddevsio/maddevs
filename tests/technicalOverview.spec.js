import {
  mount
} from '@vue/test-utils';
import TechnicalOverview from '@/components/GoDee/TechnicalOverview';

describe('TechnicalOverview', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(TechnicalOverview);
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
