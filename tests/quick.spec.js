import {
  mount
} from '@vue/test-utils';
import QuickProjectStart from '@/components/About/QuickProjectStart.vue';

describe('Quick Project Start', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(QuickProjectStart)
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